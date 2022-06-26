function userValidator(usuario) {
   function validate(otherUsuario) {
    return usuario == otherUsuario
   }
}
/* Realizo un algoritmo de inicio de sesion, que luego de 5 ingresos incorrectos, bloquea el inicio de sesion */
let usuario = prompt("Ingrese su usuario: ");
let limite = 0;



const validator = userValidator("Marcos");
while (!validator.validate(usuario)){
    alert("Error!, ingresaste mal tu usuario");
    if (limite === 4){
        alert("Demasiados intentos de ingreso realizados");
        break;
    }
     limite++;
     usuario = prompt("Ingrese su usuario: ");
}