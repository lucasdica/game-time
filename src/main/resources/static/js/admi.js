const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
};

async function getJuegos() {

    const respuesta = fetch('http://localhost:8080/listarJuegos');
    respuesta
        .then(response => response.json())
        .then(response => renderGames(response))//fulfilled
        .catch(error => dibujarError(error))//rejected
}

function renderGames(data) {
    let rows = '';
    for (let juegos of data) {
        rows += `
        <tr>
            <td>${juegos.titulo}</td>
            <td>${juegos.anio}</td>
            <td>
              <img src="${juegos.desarrollador}" alt="" class="img-fluid">
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

    const respuesta = fetch(`http://localhost:8080/delJuegos/${id}`, {
        method: 'DELETE',
    });

    //2 invocar
    respuesta
        .then(response => okDel(response))//fulfilled
        .catch(error => dibujarError(error))//rejected
}

function okDel(response) {
    document.querySelector('#juegos').innerHTML = "Se eliminó exitosamente";
}

function dibujarError(error) {
    document.querySelector('#juegos').innerHTML = error;
}