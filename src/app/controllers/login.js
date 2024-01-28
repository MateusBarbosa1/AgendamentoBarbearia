function renderLogin(app,req,res) {
    res.render('login')
}
async function verifyData(app,req,res) {
    var userData = req.body;
    

    if (userData.nome == 'mateus' && userData.senha == '12348765pg' || userData.nome == 'bruno' && userData.senha == 'brunobarberadmin') {
        require('../controllers/admin').renderAdmin(app,req,res);
    }
    
}
module.exports = {
    renderLogin,
    verifyData
}