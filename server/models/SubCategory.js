const { Schema, model } = require('mongoose');

const subcategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    ]
});


const SubCategory = model('SubCategory', subcategorySchema);

module.exports = SubCategory;
