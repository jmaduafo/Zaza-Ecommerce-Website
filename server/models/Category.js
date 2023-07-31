const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    subcategories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'SubCategory'
        }
    ]
});


const Category = model('Category', categorySchema);

module.exports = Category;
