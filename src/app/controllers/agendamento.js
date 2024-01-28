function renderAgendamento(app,req,res){
    res.render('agendamento')
}
function renderAgendamentoConcluido(app,req,res) {
    res.render('agendamento-concluido');
}
function renderAgendamentoBarber1(app,req,res) {
    res.render('agendamento-barber1.html');
}
function renderAgendamentoBarber2(app,req,res) {
    res.render('agendamento-barber2.html');
}
var dataDB = ''
var horarioDB = ''
var nomeDB = ''
async function AgendamentoData(barber,app,req,res) {
    var inputData = req.body;
    var data = new Date(inputData.dia)
    dataDB = `${data.getDate()+1}/${data.getMonth()+1}`;
    nomeDB = `${inputData.name}`


    var horarios = [
        '8:00',
        '8:30',
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00'
    ]
    const agendamentoModel = require('../models/agendamentoModel');
    const getAgendamentos = await agendamentoModel.getAgendamentos();


        
    if (barber == 1) {
        res.render('agendamento-barber1-horario', {result: getAgendamentos, data: dataDB, horarios: horarios}) 
    } else {
        res.render('agendamento-barber2-horario', {result: getAgendamentos, data: dataDB, horarios: horarios}) 
    }


}
async function AgendamentoHora(barber,app,req,res) {
    var inputData = req.body;
    var horario = inputData.horario;
    horarioDB = `${horario}`

    const agendamentoModel = require('../models/agendamentoModel');
    await agendamentoModel.agendarDataHora(dataDB,horarioDB,nomeDB,barber);

    res.redirect('agendamento-concluido');
    
}


module.exports = {
    renderAgendamento,
    renderAgendamentoBarber1,
    renderAgendamentoBarber2,
    renderAgendamentoConcluido,
    AgendamentoData,
    AgendamentoHora
}