const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a3d2898a84msh27d2a272d88fcd8p13c7cajsn5c64c8b3b68a',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

async function getGames() {
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
        <div class="imagen_juego">
            <p class="text-center text-dark title-juego" style="background-color: #ffce7a">
            ${juegos.titulo}
            </p>
            <img src="${juegos.portada}" alt="" class="borde-img" />
            <p class="text-center text-light datos-juego" style="background-color: #212529">
            ${juegos.desarrollador}
            </p>
        </div>
        `;
    }
    document.querySelector('[data-ul]').innerHTML = rows;
}

getGames();
