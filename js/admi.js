const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a3d2898a84msh27d2a272d88fcd8p13c7cajsn5c64c8b3b68a',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

async function getJuegos() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        renderGames(data.slice(1, 21));
    } catch (error) {
        console.error(error);
    }
}

function renderGames(data) {
    let rows = '';
    for (let juegos of data) {
        rows += `
        <tr>
            <td>${juegos.titulo}</td>
            <td>${juegos.anio}</td>
            <td>${juegos.desarrollador}</td>
            <td>
              <img src="${juegos.portada}" alt="" class="img-fluid">
            </td>
            <td>
              <button>
                <i class="bi bi-trash-fill" onclick="delJuego(${juegos.id})"></i>
              </button>  
            </td>
        </tr>
        `;
    }
    document.querySelector('.datos').innerHTML = rows;
}

function delJuego(id) {

    const respuesta = fetch(`http://localhost:8080/delPelicula/${id}`, {
        method: 'DELETE',
    });

    //2 invocar
    respuesta
        .then(response => okDel(response))//fulfilled
        .catch(error => dibujarError(error))//rejected
}

function okDel(response) {
    document.querySelector('#peliculas').innerHTML = "Se eliminó exitosamente";
}

function dibujarError(error) {
    document.querySelector('#peliculas').innerHTML = error;
}