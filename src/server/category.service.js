const Category = require('./category.model');

require('./mongodb').connect();

function getCategories() {
    const query = Category.find({}, { name:1 });

    return query.exec();
}

function getCategory(id) {
    const query = Category.findById(id);

    return query.exec()
}

////////////

module.exports = {
    getCategory,
    getCategories
}