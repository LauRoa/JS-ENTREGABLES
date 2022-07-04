//SIMULAMOS UN CARRITO DE COMPRAS DE UN SITIO WEB DE LENCERIA

const conjuntos = [
    {id: 0, conjunto: "armado", nombre: "Livia", precio: 1400, talle: 85},
    {id: 1, conjunto: "armado", nombre: "Livia", precio: 1500, talle: 90},
    {id: 2, conjunto: "armado", nombre: "Livia", precio: 1600, talle: 95},
    {id: 3, conjunto: "armado", nombre: "Livia", precio: 1700, talle: 100},
    {id: 4, conjunto: "armado", nombre: "Demetria", precio: 1600, talle: 85},
    {id: 5, conjunto: "armado", nombre: "Demetria", precio: 1700, talle: 95},
    {id: 6, conjunto: "armado", nombre: "Demetria", precio: 1750, talle: 100},
    {id: 7, conjunto: "armado", nombre: "Egeria", precio: 1350, talle: 90},
    {id: 8, conjunto: "armado", nombre: "Egeria", precio: 1450, talle: 95},
    {id: 9, conjunto: "armado", nombre: "Egeria", precio: 1600, talle: 100},
    {id: 10, conjunto: "armado", nombre: "Clementia", precio: 1600, talle: 85},
    {id: 11, conjunto: "armado", nombre: "Clementia", precio: 1650, talle: 90},
    {id: 12, conjunto: "armado", nombre: "Clementia", precio: 1700, talle: 100},
    {id: 13, conjunto: "sin armar", nombre: "Hebe", precio: 1300, talle: 90},
    {id: 14, conjunto: "sin armar", nombre: "Hebe", precio: 1300, talle: 95},
    {id: 15, conjunto: "sin armar", nombre: "Hebe", precio: 1300, talle: 100},
    {id: 16, conjunto: "sin armar", nombre: "Diana", precio: 1300, talle: 95},
    {id: 17, conjunto: "sin armar", nombre: "Luna", precio: 1200, talle: 85},
    {id: 18, conjunto: "sin armar", nombre: "Aura", precio: 1250, talle: 85},
    {id: 19, conjunto: "sin armar", nombre: "Caronte", precio: 1250, talle: 90},
    {id: 20, conjunto: "sin armar", nombre: "Caronte", precio: 1250, talle: 95},
    {id: 21, conjunto: "sin armar", nombre: "Caronte", precio: 1250, talle: 100},
    {id: 22, conjunto: "sin armar", nombre: "Honoria", precio: 1350, talle: 85},
    {id: 23, conjunto: "sin armar", nombre: "Honoria", precio: 1350, talle: 90},
    {id: 24, conjunto: "sin armar", nombre: "Honoria", precio: 1350, talle: 100}
]

let productosCarrito = [];
let continuar = true;

while (continuar) {
    const seleccionConjunto = prompt("Ingrese el conjunto deseado, armado o sin armar: ").toLocaleLowerCase();

    if (seleccionConjunto === "armado" || seleccionConjunto === "sin armar") { 
        const conjuntosFiltrados = conjuntos.filter(elemento => elemento.conjunto === seleccionConjunto);
        const conjuntosAMostrar= conjuntosFiltrados.map(elemento => `${elemento.id}) Linea: ${elemento.nombre}) Talle: ${elemento.talle}) Precio: ${elemento.precio}`);
        const idElegido = parseInt(prompt (`Por favor indique el numero del conjunto con el correspondiente talle que desea agregar al carrito, los conjuntos que ofrecemos son los siguientes:\n ${conjuntosAMostrar.join("\n")}`));

        let productosAgregados = productosCarrito.push(conjuntos.find(elemento => elemento.id === idElegido));

        alert(`Se agregaron al carrito ${productosAgregados} productos`);
    } else{
        alert(`El producto elegido ${seleccionConjunto} no se encuentra a la venta. `);
    }

    continuar = confirm("Si desea seguir comprando, presione ok");
}

let totalDeCompra = productosCarrito.reduce(function(acc, current){ return acc + current.precio; }, 0);
let  productosSeleccionados = productosCarrito.map(elemento => (elemento.nombre));
let  tallesSeleccionados = productosCarrito.map(elemento => (elemento.talle));
alert(`El total de la compra es ${totalDeCompra}, por los productos ${productosSeleccionados} de talles ${tallesSeleccionados}, respectivamente`);