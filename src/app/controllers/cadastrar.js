function renderCadastrar(app,req,res) {
    res.render('cadastrar')
}
async function cadastrarNovoUsuario(app,req,res) {
    var userData = req.body;
    var userModel = require('../models/userModel');

    await userModel.cadastrarUsuario(userData);

    res.redirect('/login')
}

module.exports = {
    renderCadastrar,
    cadastrarNovoUsuario
}