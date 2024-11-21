import getTodosposts from "../models/postModel.js";

export async function listarPosts(req, res) {
    // Chama a função para buscar todos os posts
    const posts = await getTodosposts();
        // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
        res.status(200).json(posts);  
    } 

