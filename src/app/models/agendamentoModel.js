const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

async function agendarDataHora(data,horario,nome,barbeiro) {
    return await prisma.agendamentos.create({
        data: {
            nome: nome, 
            barbeiro: barbeiro,
            data: data,
            hora: horario
        },
    });
}
async function getAgendamentos() {
    return await prisma.agendamentos.findMany();
}
async function deleteAgendamento(id) {
    return await prisma.agendamentos.delete({ where: {id: Number(id)} });
}

module.exports = {
    agendarDataHora,
    getAgendamentos,
    deleteAgendamento
}
// agendarDataHora getAgendamentos deleteAgendamento