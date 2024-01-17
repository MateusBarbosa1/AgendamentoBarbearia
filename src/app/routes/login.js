module.exports = function(app) {
    app.get('/login', (req,res)=>{
        app.app.controllers.login.renderLogin(app,req,res);
    })
    app.post('/loginVerify', (req,res)=>{
        app.app.controllers.login.verifyData(app,req,res);
    });
}