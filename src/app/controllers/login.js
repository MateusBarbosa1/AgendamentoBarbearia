function renderLogin(app,req,res) {
    res.render('login')
}
async function verifyData(app,req,res) {
    var userData = req.body;
    
    const userModel = app.app.models.userModel;
    const getUser = await userModel.getUser();

    var stats = 2

    for (var i = 0;i < getUser.length;i++) {
        if(getUser[i].nome == userData.nome && getUser[i].senha == userData.senha) {
            if (userData.nome.toLowerCase() == 'mateus' && userData.senha == '12348765pg' || userData.nome.toLowerCase() == 'bruno' && userData.senha == 'brunobarberadmin') {
                stats = 0
                break
            } else {
                stats = 1;
                break;
            }
        }
    }
    while (stats == 0) {
        app.app.controllers.admin.renderAdmin(app,req,res);
        break
    }
    while (stats == 1) {
        res.render('painel')
        break
    }
    if (stats == 2) {
        res.redirect('/login')
    }
}
module.exports = {
    renderLogin,
    verifyData
}