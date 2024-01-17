const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function cadastrarUsuario(data) {
    return await prisma.usuarios.create({
        data: {
            nome: data.nome,
            senha: data.senha
        },
    });
}
async function getUser() {
    return await prisma.usuarios.findMany();
}

// cadastrarUsuario, verifyLogin

module.exports = {
    cadastrarUsuario,
    getUser
}