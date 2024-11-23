import 'dotenv/config';
// Importa o framework Express e a função para conectar ao banco de dados
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados utilizando a string de conexão obtida das variáveis de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Função assíncrona para buscar todos os posts do banco de dados

export async function getTodosPosts() {
    // Obtém o banco de dados específico dentro da conexão
    const db = conexao.db("imersao-projetoinstaalura");
    // Seleciona a coleção "posts" onde os dados serão armazenados
    const colecao = db.collection("posts");
    // Realiza uma consulta para encontrar todos os documentos na coleção e retorna os resultados como um array
    return colecao.find().toArray(); 
  }  
  export async function criarPost(novoPost) {
      const db = conexao.db("imersao-projetoinstaalura");
      const colecao = db.collection("posts");
      return colecao.insertOne(novoPost)
  }
  export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-projetoinstaalura");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}