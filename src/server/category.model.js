const mongoose = require('mongoose');
const env = require('./environments/environment');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: String,
    words: [ String ]
}, {
    collection: 'Categories'
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

// Default DATA
if (env.categoriesDefault) {
     Category.deleteMany()
        .then( () => {
            Category.insertMany(env.categoriesDefault)
        }) 
}