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

    function getRandomSubcategoryLingerie() {
      return Math.floor(Math.random() * 12); // Generates a random number between 0 and 12
    }

    function getRandomSubcategoryFragrance() {
      return Math.floor(Math.random() * (subCategoryData.length - 12 + 1 ) + 12); // Generates a random number between 0 and 12
    }

    for (let i = 0; i < lingerieData.length; i++){
      lingerieData[i].category = categories[0]._id
      lingerieData[i].subcategory = subcategories[getRandomSubcategoryLingerie()]
    }

    for (let i = 0; i < fragranceData.length; i++) {
      fragranceData[i].category = categories[0]._id
      fragranceData[i].subcategory = subcategories[getRandomSubcategoryFragrance()]

    }


    await Product.insertMany(lingerieData);
    await Product.insertMany(fragranceData);


    console.log('all done!');
    process.exit(0);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

});
