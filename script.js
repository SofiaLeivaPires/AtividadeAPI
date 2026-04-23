// 1. Coloque a sua chave gerada aqui
const apiKey = '530b6b9d5566bdfb61e043fe04d419c7';

// 2. Montamos a URL. Note que já passamos o parâmetro language=pt-BR!
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;

async function buscarFilmes() {
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log("🎬 Filmes Populares no Momento:\n");

    // A API devolve os filmes dentro de um array chamado 'results'
    dados.results.forEach(filme => {
        console.log(`Título: ${filme.title}`);
        console.log(`Nota: ⭐ ${filme.vote_average}`);
        
        // Se a sinopse existir, a gente mostra
        if (filme.overview) {
             console.log(`Sinopse: ${filme.overview}`);
        }
        
        // 3. O Pulo do Gato das Imagens:
        // Juntamos a URL base da TMDB (tamanho w500) com o caminho da imagem do filme
        const linkCapa = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
        console.log(`Link da Capa: ${linkCapa}`);
        console.log("---------------------------------------------------");
    });

  } catch (erro) {
    console.error("Ops, falha ao conectar com a TMDB:", erro);
  }
}

buscarFilmes();