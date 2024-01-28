module.exports = function(app) {
    app.get('/login', (req,res)=>{
        require('../controllers/login').renderLogin(app,req,res);
    })
    app.post('/loginVerify', (req,res)=>{
        require('../controllers/login').verifyData(app,req,res);
    });
}