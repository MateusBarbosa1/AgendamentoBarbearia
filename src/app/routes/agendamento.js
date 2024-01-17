module.exports = function(app){
    app.get('/agendamento', (req,res)=>{
        app.app.controllers.agendamento.renderAgendamento(app,req,res);
    });
    app.get('/agendar-barber1', (req,res)=>{
        app.app.controllers.agendamento.renderAgendamentoBarber1(app,req,res);
    });
    app.get('/agendar-barber2', (req,res)=>{
        app.app.controllers.agendamento.renderAgendamentoBarber2(app,req,res);
    });
    app.post('/barber2/agendar=1', (req,res)=>{
        var barber = 2;
        app.app.controllers.agendamento.AgendamentoData(barber,app,req,res);
    });
    app.post('/barber2/agendar=2', (req,res)=>{
        var barber = 2;
        app.app.controllers.agendamento.AgendamentoHora(barber, app,req,res);
    });
    app.post('/agendar=1', (req,res)=>{
        var barber = 1;
        app.app.controllers.agendamento.AgendamentoData(barber, app,req,res);
    });
    app.post('/agendar=2', (req,res)=>{
        var barber = 1;
        app.app.controllers.agendamento.AgendamentoHora(barber, app,req,res);
    });
    app.get('/agendamento-concluido', (req,res)=>{
        app.app.controllers.agendamento.renderAgendamentoConcluido(app,req,res);
    });
    app.get('/delete/:id', (req,res)=>{
        app.app.controllers.admin.deleteAgendamento(app,req,res);
    });
}