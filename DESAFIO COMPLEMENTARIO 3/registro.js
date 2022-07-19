let usuario;
let usuarioStorage = localStorage.getItem("usuario");

if(usuarioStorage){
  usuario = usuarioStorage;
  alert("Bienvenido " + usuario);
}else{
  usuario = prompt("Ingresa tu nombre");
  localStorage.setItem("usuario", usuario);
}