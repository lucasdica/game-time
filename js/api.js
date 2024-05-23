// const API_KEY = 'cb55b1c2d6293c06bb14f940ee49d93bd6969f29';
// const URL = `https://www.giantbomb.com/api/games/?api_key=${API_KEY}&format=json&limit=10&field_list=name,image`;


// function getPelis() {
//     const respuesta = fetch(URL);

//     //2 invocar
//     respuesta
//         .then(response => response.json())
//         .then(response => renderGames(response))//fulfilled
//         .catch(error => dibujarError(error))//rejected
// }

// function renderGames(response) {
//     const juegos = response.results;
//     let rows = '';
//     for (let juego of juegos) {
//         rows += `
//         <div class="imagen_juego">
//           <img src="${juego.image.medium_url}" alt="" class="borde-img" />
//           <p class="text-center text-dark" style="background-color: #ffce7a">
//             ${juego.name}
//           </p>
//         </div>
//         `
//     }
//     document.querySelector('.videojuegos').innerHTML = rows;
// }

// getPelis();
// renderGames();

const API_KEY = 'cb55b1c2d6293c06bb14f940ee49d93bd6969f29';
const URL = `https://www.giantbomb.com/api/games/?api_key=${API_KEY}&format=json&limit=10&field_list=name,image`;

async function getGames() {
    try {
        const respuesta = await fetch(URL);
        if (!respuesta.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await respuesta.json();
        renderGames(data);
    } catch (error) {
        console.log("Error");
    }
}

function renderGames(response) {
    const juegos = response.results;
    let rows = '';
    for (let juego of juegos) {
        rows += `
        <div class="imagen_juego">
          <img src="${juego.image.medium_url}" alt="" class="borde-img" />
          <p class="text-center text-dark" style="background-color: #ffce7a">
            ${juego.name}
          </p>
        </div>
        `;
    }
    document.querySelector('.videojuegos').innerHTML = rows;
}

// Invocación de getPelis para iniciar el proceso
getGames();

// 

// const url = "https://www.giantbomb.com/api/games/?api_key=cb55b1c2d6293c06bb14f940ee49d93bd6969f29&format=json&limit=10&field_list=name,image" //substituya la DEMO_KEY por tu llave personal(API Key) 
 

// async function listaImagenes() {

//     try{
//         let fetchImagen = await fetch(url)
//         let datosImagenes = await fetchImagen.json()

//         console.log(datosImagenes)

//         const card = document.querySelector("[data-ul]")

//         datosImagenes.forEach( juego => {

//             const contenido =
//             `
//             <div class="imagen_juego">
//                 <img src="${juego.image.medium_url}" alt="" class="borde-img" />
//                 <p class="text-center text-dark" style="background-color: #ffce7a">
//                 ${juego.name}
//                 </p>
//             </div>
//             `

//             card.innerHTML = card.innerHTML + contenido
//         })
        
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// listaImagenes()

// const API_KEY = 'cb55b1c2d6293c06bb14f940ee49d93bd6969f29';
// const URL = `https://www.giantbomb.com/api/games/?api_key=${API_KEY}&format=json&limit=10&field_list=name,image`;

// document.addEventListener('DOMContentLoaded', () => {
//     getGames();
// });

// async function getGames() {
//     try {
//         const respuesta = await fetch(URL);
//         if (!respuesta.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await respuesta.json();
//         console.log('Data fetched from API:', data); // Para verificar la estructura de la respuesta
//         renderGames(data);
//     } catch (error) {
//         dibujarError(error);
//     }
// }

// function renderGames(response) {
//     const juegos = response.results;
//     if (!juegos) {
//         console.error('No games found in response');
//         return;
//     }

//     let rows = '';
//     for (let juego of juegos) {
//         rows += `
//         <div class="imagen_juego">
//           <img src="${juego.image.medium_url}" alt="" class="borde-img" />
//           <p class="text-center text-dark" style="background-color: #ffce7a">
//             ${juego.name}
//           </p>
//         </div>
//         `;
//     }

//     const videojuegosContainer = document.querySelector('.videojuegos');
//     if (!videojuegosContainer) {
//         console.error('No element found with class "videojuegos"');
//         return;
//     }
//     videojuegosContainer.innerHTML = rows;
// }

// // Función para manejar errores
// function dibujarError(error) {
//     console.error('Error fetching data:', error);
// }
