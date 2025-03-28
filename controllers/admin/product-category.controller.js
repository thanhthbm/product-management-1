const ProductCategory = require('../../models/product-category.model.js');
const systemConfig = require('../../config/system.js');
const {tree} = require('../../helpers/createTree.js');
// [GET]: /admin/product-category
module.exports.index = async (req, res) => {
    const find = {
        deleted: false,
    }


    const records = await ProductCategory.find(find);
    const newRecords = tree(records);

    res.render(`admin/pages/product-category/index.pug`, {
        pageTitle: 'Danh mục sản phẩm',
        records: newRecords
    });
};

//[GET]: /admin/product-category/create
module.exports.create = async (req, res) => {
    const find = {
        deleted: false
    }



    const records = await ProductCategory.find(find);

    const newRecords = tree(records);

    res.render(`admin/pages/product-category/create.pug`, {
        pageTitle: 'Danh mục sản phẩm',
        records: newRecords
    });
};

//[POST] /admin/product-category/createPost
module.exports.createPost = async (req, res) => {
    if (req.body.position == ''){
        const count = await ProductCategory.countDocuments();
        req.body.position = count + 1;
    }
    else{
        req.body.position = parseInt(req.body.position);
    }

    const record = new ProductCategory(req.body);
    await record.save();

    res.redirect(`/${systemConfig.prefixAdmin}/product-category`);
}