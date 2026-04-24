const apiKey = '530b6b9d5566bdfb61e043fe04d419c7';

const inputFilme = document.getElementById("filme");
const botao = document.getElementById("botao");
const result = document.getElementById("result");


botao.addEventListener("click", async () => {
 
  const inputValue = inputFilme.value;

  if(!inputValue) 
    
    return;
  
  inputFilme.value = "";

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${inputValue}&page=1`;


  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(`🎬 Resultados para: "${inputValue}"\n`);

    result.innerHTML = "";

    dados.results.forEach(filme => {

      const card = document.createElement("div");
      card.className = "bg-white p-2 border border-gray-300 rounded-xl shadow-lg flex flex-col items-center gap-8";

      const linkCapa = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;

      const poster = document.createElement("img");
      poster.src = linkCapa
      poster.className = "w-50 h-60 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
      card.appendChild(poster); 

      const tituloFilme= document.createElement("h2");
      tituloFilme.innerHTML = `Título: ${filme.title}`;
      card.appendChild(tituloFilme);

      const nota= document.createElement("p");
      nota.innerHTML = `Nota: ⭐ ${filme.vote_average} ` ;
      card.appendChild(nota);

      const sinopse= document.createElement("p");
      sinopse.innerHTML = `Sinopse: ${filme.overview}`;
      sinopse.className = "text-justify ml-5 mr-5"
      card.appendChild(sinopse);
        
      result.appendChild(card);
      
    });


  } catch (erro) {
    console.error("Ops, falha ao conectar com a TMDB:", erro);
  }


})

