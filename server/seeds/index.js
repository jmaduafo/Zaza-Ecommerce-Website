const db = require('../config/connections');
const { User, Category, SubCategory, Product, } = require('../models');
const userData = require('./userData.json');
const categoryData = require('./categoryData.json')
const subCategoryData = require('./subCategoryData.json')
const productData = require('./productsData.json')


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userData);

  await Category.deleteMany();
  await SubCategory.deleteMany();

    const categories = await Category.create(categoryData);

    // const updatedSubCategoryData = subCategoryData.map((subCategory, index) => {
    //   if (index < 4) {
    //     // bras
    //     return { ...subCategory, category: categories[0]._id };
    //   } else if (index < 7) {
    //     // panties
    //     return { ...subCategory, category: categories[1]._id };
    //   } else {
    //     // sets
    //     return { ...subCategory, category: categories[2]._id };
    //   }
    // });

    // await SubCategory.insertMany(updatedSubCategoryData);

    for (let i = 0; i < subCategoryData.length; i++) {
      if (i < 4) {
        // bras
        subCategoryData[i].category = categories[0]._id
      } else if (i < 7) {
        // panties
        subCategoryData[i].category = categories[1]._id

      } else {
        // sets 
        subCategoryData[i].category = categories[2]._id
      }
    }

    console.log(subCategoryData)
    const subcategories = await SubCategory.insertMany(subCategoryData)  
    console.log(subcategories)

    await Product.deleteMany();
    productData[0].subcategory = subcategories[0]._id
    productData[1].subcategory = subcategories[0]._id
    productData[2].subcategory = subcategories[1]._id
    productData[3].subcategory = subcategories[2]._id

    await Product.insertMany(productData);

    console.log('all done!');
    process.exit(0);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

});
