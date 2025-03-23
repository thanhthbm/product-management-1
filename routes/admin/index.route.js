const dashboardRoutes = require('./dashboard.route.js');
const systemConfig = require('../../config/system.js');
const productRoutes = require('./product.route.js');
const deletedRoutes = require('./deleted.route');

module.exports = (app) => {
    const PATH_ADMIN = '/' + systemConfig.prefixAdmin;
    app.use(PATH_ADMIN + '/products', productRoutes)
    app.use(PATH_ADMIN + '/dashboard', dashboardRoutes);
    app.use(PATH_ADMIN + '/deleted', deletedRoutes);
}