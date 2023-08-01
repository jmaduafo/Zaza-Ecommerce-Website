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

    const subcategories = await SubCategory.insertMany(subCategoryData)

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
