module.exports = function(app) {
    app.get('/cadastrar', (req,res)=>{
        app.app.controllers.cadastrar.renderCadastrar(app,req,res);
    });
    app.post('/registerUser', (req,res)=>{
        app.app.controllers.cadastrar.cadastrarNovoUsuario(app,req,res);
    }); 
}