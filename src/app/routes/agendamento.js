module.exports = function(app){
    app.get('/agendamento', (req,res)=>{
        require('../controllers/agendamento').renderAgendamento(app,req,res);
    });
    app.get('/agendar-barber1', (req,res)=>{
        require('../controllers/agendamento').renderAgendamentoBarber1(app,req,res);
    });
    app.get('/agendar-barber2', (req,res)=>{
        require('../controllers/agendamento').renderAgendamentoBarber2(app,req,res);
    });
    app.post('/barber2/agendar=1', (req,res)=>{
        var barber = 2;
        require('../controllers/agendamento').AgendamentoData(barber,app,req,res);
    });
    app.post('/barber2/agendar=2', (req,res)=>{
        var barber = 2;
        require('../controllers/agendamento').AgendamentoHora(barber, app,req,res);
    });
    app.post('/agendar=1', (req,res)=>{
        var barber = 1;
        require('../controllers/agendamento').AgendamentoData(barber, app,req,res);
    });
    app.post('/agendar=2', (req,res)=>{
        var barber = 1;
        require('../controllers/agendamento').AgendamentoHora(barber, app,req,res);
    });
    app.get('/agendamento-concluido', (req,res)=>{
        require('../controllers/agendamento').renderAgendamentoConcluido(app,req,res);
    });
    app.get('/delete/:id', (req,res)=>{
        require('../controllers/admin').deleteAgendamento(app,req,res);
    });
}