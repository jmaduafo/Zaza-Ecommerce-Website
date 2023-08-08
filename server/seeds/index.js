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
         console.log(i, subCategoryData[i])   
      if (i < 12) {
        // lingerie
        subCategoryData[i].category = categories[0]._id
      } else {
        // fragrances
        subCategoryData[i].category = categories[1]._id
    }
  }
    const subcategories = await SubCategory.insertMany(subCategoryData)

    // function getRandomSubcategoryLingerie() {
    //   return Math.floor(Math.random() * 12); 
    // }
    // function getRandomSubcategoryFragrance() {
    //   return Math.floor(Math.random() * (subCategoryData.length - 12 + 1 ) + 12); 
    // }

    await Product.deleteMany();

    // seed lingerie products
    for (let i = 0; i < lingerieData.length; i++){
      console.log(i, lingerieData[i].name)   

      lingerieData[i].category = categories[0]._id

      if (i < 5) {
      lingerieData[i].subcategory = subcategories[0]
      } else if (i < lingerieData.length) {
      lingerieData[i].subcategory = subcategories[11]
      }
      // lingerieData[i].subcategory = subcategories[getRandomSubcategoryLingerie()]
    }

    // seed fragrance products
    for (let i = 0; i < fragranceData.length; i++) {
      console.log(i, fragranceData[i].name)   

      fragranceData[i].category = categories[0]._id

      if (i < 2) {
        fragranceData[i].subcategory = subcategories[14]
      } else if (i < 5) {
        fragranceData[i].subcategory = subcategories[16]
      } else {
        fragranceData[i].subcategory = subcategories[17]
      }
      // fragranceData[i].subcategory = subcategories[getRandomSubcategoryFragrance()]
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
