const Livro = require('./livro-schema');

const obterLivros = async () => {
  try {
    return await Livro.find();
  } catch (error) {
    console.error('Erro ao obter os livros:', error);
    return [];
  }
};

const incluir = async (livro) => {
  try {
    return await Livro.create(livro);
  } catch (error) {
    console.error('Erro ao incluir o livro:', error);
    return null;
  }
};

const excluir = async (codigo) => {
  try {
    return await Livro.deleteOne({ _id: codigo });
  } catch (error) {
    console.error('Erro ao excluir o livro:', error);
    return null;
  }
};

module.exports = { obterLivros, incluir, excluir };
