const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
  };
  
 function getGames() {
//    const respuesta = fetch(`https://api.themoviedb.org/3/movie/top_rated`, options);
    const respuesta = fetch(`http://localhost:8080/listarJuegos`, {mode: 'cors'});

    //2 invocar
    respuesta
        .then(response => response.json())
        .then(response => renderGames(response))//fulfilled
        .catch(error => dibujarError(error))//rejected
  }


function renderGames(data) {
    let rows = '';
    for (let juegos of data) {
        rows += `
        <div class="imagen_juego">
            <p class="text-center text-dark title-juego" style="background-color: #ffce7a">
            ${juegos.titulo}
            </p>
            <img src="${juegos.desarrollador}" alt="" class="borde-img img-fluid" />
            <p class="text-center text-light datos-juego" style="background-color: #212529">
            ${juegos.portada}
            </p>
        </div>
        `;
    }
    document.querySelector('[data-ul]').innerHTML = rows;
}

getGames();
