async function renderAdmin(app,req,res) {
    const agendamentoModel = app.app.models.agendamentoModel;
    const getAgendamentos = await agendamentoModel.getAgendamentos();
    
    console.log(getAgendamentos)
    res.render('admin', {agendamentos: getAgendamentos});
    
}
async function deleteAgendamento(app,req,res) {
    var id = req.params.id;
    var agendamentoModel = app.app.models.agendamentoModel;

    await agendamentoModel.deleteAgendamento(id);
    app.app.controllers.admin.renderAdmin(app,req,res);

}


module.exports = {
    renderAdmin,
    deleteAgendamento
}