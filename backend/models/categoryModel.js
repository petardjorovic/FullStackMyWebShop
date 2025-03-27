const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
    },
});

const categoryModel = mongoose.model('Category', categorySchema);
module.exports = categoryModel;
