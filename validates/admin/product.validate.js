const systemConfig = require('../../config/system.js');

module.exports.createPost = (req, res, next) => {
    if (!req.body.title){
        req.flash('error', 'Please fill in the title!');
        res.redirect(req.get('Referrer') || `/${systemConfig.prefixAdmin}/product-category/create`);
        return;
    }

    //validated
    next();
}