const express = require('express');
const router = express.Router();

const categoryService = require('./category.service');

router.get('/categories/:id?', (req, res) => {
    categoryService.getCategory(req.params.id)
        .then( cat => {
            res.status(200).json(cat);
        })
        .catch( error => {
            return res.status(500).send(error);
        })
});

module.exports = router;