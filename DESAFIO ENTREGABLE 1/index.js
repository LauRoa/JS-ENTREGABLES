//IMPLEMENTO UNA FUNCION QUE CALCULA EL MONTO FINAL DE FINANCIACION EN CUOTAS

const financiacion3Cuotas = (a, b) => a * (1 + b);
const financiacion6Cuotas = (a, b) => a * (1 + 2.5 * b);
const financiacion9Cuotas = (a, b) => a * (1 + 6 * b);

const tasaConFinanciacion = 0.98;


let totalFinanciado;

let funcionSeguirSimulando = (a) => {
    if (a == "SI") {
        montoFinanciacion = parseFloat(prompt("Ingrese el monto que desea financiar: "));
        cantidadCuotas = parseInt(prompt("Ingrese el numero de cuotas deseadas 1, 3, 6 o 9: "))
    }
    else if (a == "NO") {
        alert("Usted ha finalizado la simulación de financiacion, muchas gracias!");
    }
    else {
        alert("Error, ingreso un valor incorrecto. Ingrese SI o NO");
    }
}
let continuar = true;

while (continuar) {

    let montoFinanciacion = parseFloat(prompt("Ingrese el monto que desea financiar: "));
    let cantidadCuotas = parseInt(prompt("Ingrese el numero de cuotas deseadas 1, 3, 6 o 9: "));

    switch (cantidadCuotas) {
        case 1:
            alert(`El precio total sin financiacion es: ${montoFinanciacion}`);
            break;
        case 3:
            totalFinanciado = financiacion3Cuotas(montoFinanciacion, tasaConFinanciacion);
            alert(`El precio total con financiacion en ${cantidadCuotas} CUOTAS es ${totalFinanciado}`)
            break;
        case 6:
            totalFinanciado = financiacion6Cuotas(montoFinanciacion, tasaConFinanciacion);
            alert(`El precio total con financiacion en ${cantidadCuotas} CUOTAS es: ${totalFinanciado}`)
            break;
        case 9:
            totalFinanciado = financiacion9Cuotas(montoFinanciacion, tasaConFinanciacion);
            alert(`El precio total con financiacion en ${cantidadCuotas} CUOTAS es: ${totalFinanciado}`)
            break;
        default:
            alert(`Erorr, eligio una opcion incorrecta de financiacion. Saludos`);
    }

    continuar = confirm("Si desea seguir simulando financiaciones, presione ok");

}