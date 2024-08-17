//routes.js

const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    createUser,
    getAllItemCategories,
    createItemCategory,
    getAllProducts,
    createProduct,
    deletePost
} = require('./controllers');

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.get('/itemCategories', getAllItemCategories);
router.post('/itemCategories', createItemCategory);
router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.delete('/deletepost',deletePost);

module.exports = router;
