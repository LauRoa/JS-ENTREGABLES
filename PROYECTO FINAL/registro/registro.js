const botonInicioSesion = document.getElementById("btnIniciar");

const usuario = document.getElementById("usuario");

const evento = "click";

botonInicioSesion.addEventListener(evento, () => {
     sessionStorage.setItem("usuario",usuario.value);
 });

 