var database = require("../database/config");

function buscarPesquisaPorUsuario(pesquisaId) {

  instrucaoSql = `select * from aquario a where fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(pesquisaId, experiencia) {
  
  instrucaoSql = `insert into (experiencia, fk_pesquisa) usuario values (${experiencia}, ${pesquisaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarPesquisaPorUsuario,
  cadastrar
}
