const dashboardRoutes = require('./dashboard.route.js');
const systemConfig = require('../../config/system.js');
const productRoutes = require('./product.route.js');
const deletedRoutes = require('./deleted.route');
const productCategoryRoutes = require('./product-category.route.js');

module.exports = (app) => {
    const PATH_ADMIN = '/' + systemConfig.prefixAdmin;
    app.use(PATH_ADMIN + '/products', productRoutes)
    app.use(PATH_ADMIN + '/dashboard', dashboardRoutes);
    app.use(PATH_ADMIN + '/deleted', deletedRoutes);
    app.use(PATH_ADMIN + '/product-category', productCategoryRoutes);
}