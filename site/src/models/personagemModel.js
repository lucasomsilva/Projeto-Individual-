var database = require("../database/config");

function registrarPersonagem(nome, fkUsuario) {
    console.log("PREFERÊNCIAS REGISTRADAS COM SUCESSO! \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarPersonagem()", nome, fkUsuario);
    var instrucao = `
        INSERT INTO personagem (nome, fkUsuario) VALUES ('${nome}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarPersonagem(idUsuario) {
    console.log("ACESSEI O PERSONAGEM MODEL para buscar o personagem favorito, function mostrarPersonagem()", idUsuario );

    var instrucao = `   
    select nome from personagem where fkUsuario = ${idUsuario};	
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarPersonagem,
    mostrarPersonagem
};
