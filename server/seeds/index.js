const db = require('../config/connections');
const { User, Category, SubCategory, Product, } = require('../models');
const userData = require('./userData.json');
const categoryData = require('./categoryData.json')
const subCategoryData = require('./subCategoryData.json')
const lingerieData = require('./lingerieData.json')
const fragranceData = require('./frangrancesData.json')


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userData);

    await Category.deleteMany();
    await SubCategory.deleteMany();

    console.log(subCategoryData.length)
    const categories = await Category.create(categoryData);

    for (let i = 0; i < subCategoryData.length; i++) {
      if (i < 12) {
        // lingerie
        subCategoryData[i].category = categories[0]._id
      } else {
        // fragrances
        subCategoryData[i].category = categories[1]._id
    }
  }
    const subcategories = await SubCategory.insertMany(subCategoryData)

    await Product.deleteMany();
    productData[0].subcategory = subcategories[0]._id
    productData[1].subcategory = subcategories[0]._id
    productData[2].subcategory = subcategories[1]._id
    productData[3].subcategory = subcategories[2]._id
    productData[4].subcategory = subcategories[9]._id
    productData[5].subcategory = subcategories[13]._id
    productData[6].subcategory = subcategories[13]._id
    productData[7].subcategory = subcategories[13]._id
    productData[8].subcategory = subcategories[13]._id

    productData[0].category = categories[0]._id
    productData[1].category = categories[0]._id
    productData[2].category = categories[0]._id
    productData[3].category = categories[0]._id
    productData[4].category = categories[0]._id
    productData[5].category = categories[1]._id
    productData[6].category = categories[1]._id
    productData[7].category = categories[1]._id
    productData[8].category = categories[1]._id
    // productData[9].subcategory = subcategories[10]._id

    await Product.insertMany(productData);

    console.log('all done!');
    process.exit(0);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

});
