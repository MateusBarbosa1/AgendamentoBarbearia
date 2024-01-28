module.exports = function(app) {
    app.get('/cadastrar', (req,res)=>{
        require('../controllers/cadastrar').renderCadastrar(app,req,res);
    });
    app.post('/registerUser', (req,res)=>{
        require('../controllers/cadastrar').cadastrarNovoUsuario(app,req,res);
    }); 
}