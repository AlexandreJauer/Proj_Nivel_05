const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// Rota raiz - GET
router.get('/', async function (_req, res) {
        try {
            const livros = await obterLivros();
            res.json(livros);
        } catch (error) {
            console.error('Erro ao obter os livros:', error);
            res.status(500).json({ mensagem: 'Erro ao obter os livros.' });
        }
    });

// Rota raiz - POST
router.post('/', async function (_req, res) {
        try {
            const livro = _req.body;
            await incluir(livro);
            res.json({ mensagem: 'Livro incluído com sucesso.' });
        } catch (error) {
            console.error('Erro ao incluir o livro:', error);
            res.status(500).json({ mensagem: 'Erro ao incluir o livro.' });
        }
    });

// Rota raiz com o código do livro - DELETE
router.delete('/:codigo', async function (_req, res) {
        try {
            const codigo = _req.params.codigo;
            await excluir(codigo);
            res.json({ mensagem: 'Livro excluído com sucesso.' });
        } catch (error) {
            console.error('Erro ao excluir o livro:', error);
            res.status(500).json({ mensagem: 'Erro ao excluir o livro.' });
        }
    });

module.exports = router;
