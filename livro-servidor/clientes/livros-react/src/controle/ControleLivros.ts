import { Livro } from "../modelo/Livro";

const livros: Livro[] = [
  new Livro(1, 1, "Livro 1", "Resumo livro 1", ["Alexandre"]),
  new Livro(2, 2, "Livro 2", "Resumo livro 2", ["Roberto"]),
  new Livro(3, 3, "Livro 3", "Resumo livro 3", ["João"])
];

export class ControleLivros {
  async function obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data.map((livro: LivroMongo) => ({
      titulo: livro.titulo,
      autor: livro.autor,
      anoPublicacao: livro.anoPublicacao,
    }));
  }
}

