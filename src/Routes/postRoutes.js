import express from "express";
import { listarPosts } from "../controllers/postsController.js";

 const routes = (app) =>{
    // Cria uma instância do Express, que será o nosso servidor web
    app.use(express.json());
    // rotas para buscar todos os posts
    app.get("/posts", listarPosts);
}

export default  routes;
