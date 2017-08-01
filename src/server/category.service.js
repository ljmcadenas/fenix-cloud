const Category = require('./category.model');

require('./mongodb').connect();

function getCategory(id) {
    const query = Category.findById(id);

    return query.exec()
}

////////////

module.exports = {
    getCategory,
    getCategories
}