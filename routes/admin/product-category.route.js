const express = require('express');
const router = express.Router();
const multer = require('multer');
const validate = require('../../validates/admin/product-category.validate.js');
const uploadCloud = require('../../middlewares/admin/uploadCloud.middleware.js');
const upload = multer();

const controller = require('../../controllers/admin/product-category.controller.js');

router.get('/', controller.index);

router.get('/create', controller.create);

router.post(
    '/create',
    upload.single('thumbnail'),
    uploadCloud.upload,
    validate.createPost,
    controller.createPost
);

module.exports = router;