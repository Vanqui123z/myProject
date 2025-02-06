const SiteController = require('../controllers/SiteController');
const newsRouter = require('./news');
const studentRouter = require('./student');
const formRouter = require('./form');

function route(app) {
    app.use('/form', formRouter);
    app.use('/news', newsRouter); 
    app.use('/student', studentRouter); 
    app.get('/:query', SiteController.search); 
    app.get('/', SiteController.index); 
    
}
module.exports = route;
