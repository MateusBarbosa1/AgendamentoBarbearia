module.exports = function(app) {
    app.get('/', (req,res)=>{
        require('../controllers/home').renderHome(app, req, res);
    });
}