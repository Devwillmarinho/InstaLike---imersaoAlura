import express from "express"; // Importa o framework Express para criar a aplicação web
import multer from "multer"; // Importa o Multer para lidar com o upload de arquivos

// Importa funções do controlador de posts para lidar com a lógica específica
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

// Configura como os arquivos serão armazenados no disco
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define o diretório onde os arquivos serão salvos (substitua por seu caminho desejado)
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Define o nome do arquivo (pode ser personalizado para maior segurança)
    cb(null, file.originalname);
  }
});

// Cria uma instância do Multer usando a configuração de armazenamento
const upload = multer({ storage });

// Define as rotas da aplicação
const routes = (app) => {
  // Habilita o parsing de dados JSON nas requisições
  app.use(express.json());

  // Rota para listar todos os posts
  app.get("/posts", listarPosts);

  // Rota para criar um novo post
  app.post("/posts", postarNovoPost);

  // Rota para fazer upload de uma imagem
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes; // Exporta as rotas para serem usadas em outras partes da aplicação