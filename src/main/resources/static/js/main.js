document.addEventListener("DOMContentLoaded", () => {
  let name = document.getElementById("name");
  let lname = document.getElementById("lname");
  let pass = document.getElementById("pass");
  let country = document.getElementById("country");
  let mail = document.getElementById("email");
  let terms = document.getElementById("terms");

  document.getElementById("register-btn").addEventListener("click", () => {
    document.querySelector(".iniciar-sesion").classList.remove("aparecer");
    document.querySelector(".register").classList.toggle("aparecer");
  });

  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".register").classList.toggle("aparecer");
  });

  document.getElementById("reg-submit").addEventListener("click", (event) => {
    event.preventDefault(); // Evitar la recarga de la página

    if (
      name.value.length > 2 && name.value.length <= 20 &&
      lname.value.length > 2 && lname.value.length <= 20 &&
      pass.value.length > 2 && pass.value.length <= 20 &&
      country.value.length > 2 && country.value.length <= 20 &&
      mail.value.length > 2 && mail.value.length <= 50 &&
      mail.value.includes("@") && mail.value.includes(".") &&
      terms.checked
    ) {
      document.querySelector(".register").classList.toggle("aparecer");
      // Aquí puedes agregar la lógica para enviar el formulario
    }
  });

  document.getElementById("iniciar-sesion-btn").addEventListener("click", () => {
    document.querySelector(".register").classList.remove("aparecer");
    document.querySelector(".iniciar-sesion").classList.toggle("aparecer");
  });

  document.querySelector(".cerrar").addEventListener("click", () => {
    document.querySelector(".iniciar-sesion").classList.toggle("aparecer");
  });
});

// Habilitar o deshabilitar el btn de iniciar sesión

let form = document.querySelector("#iniciar-form");
let btnSubmit = document.querySelector("#btn-submit");

form.addEventListener("keyup", noDisabled)

function noDisabled() {
  let email = document.querySelector("#correo").value;
  let pass = document.querySelector("#contrasenia").value;
  btnSubmit.disabled = !(email.length > 0 && pass.length > 0);
}
