//IMPLEMENTO UNA FUNCION QUE CALCULA EL MONTO FINAL DE FINANCIACION EN CUOTAS

const financiacion = [ {
    cuotas: 1,
    financiado: a => a
},
{
    cuotas: 3,
    financiado: a => 1.98 * a
},
{
    cuotas: 6,
    financiado: a => 3.45 * a   
},
{
    cuotas: 9,
    financiado: a => 6.88 * a   
}
]

const cuotas = financiacion.map(elemento => elemento.cuotas);

let continuar = true;

while (continuar) {

    const montoFinanciacion = parseFloat(prompt("Ingrese el monto que desea financiar: "));
    const cantidadCuotas = parseInt(prompt(`Ingrese el numero de cuotas deseadas indicando ${cuotas.join(", ")}`));
    const financiacionElegida = financiacion.find(elemento => elemento.cuotas === cantidadCuotas);

    if (financiacionElegida) {
        alert(`El precio final es: ${financiacionElegida.financiado(montoFinanciacion)} en ${cantidadCuotas} cuotas`);
    } else{
        alert(`No realizamos financiacion en ${cantidadCuotas} cuotas`); 
    }
    continuar = confirm("Si desea seguir simulando financiaciones, presione ok");
} 