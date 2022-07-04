//SIMULAMOS UN CARRITO DE COMPRAS DE UN SITIO WEB DE LENCERIA

const conjuntos = window.productos;

let productosCarrito = [];
let continuar = true;

while (continuar) {
    const seleccionConjunto = prompt("Ingrese el conjunto deseado, armado o sin armar: ").toLocaleLowerCase();

    if (seleccionConjunto === "armado" || seleccionConjunto === "sin armar") { 
        const conjuntosFiltrados = conjuntos.filter(elemento => elemento.conjunto === seleccionConjunto);
        const conjuntosAMostrar= conjuntosFiltrados.map(elemento => `${elemento.id}) Linea: ${elemento.nombre} Talle: ${elemento.talle} Precio: ${elemento.precio}`);
        const idElegido = parseInt(prompt (`Por favor indique el numero del conjunto con el correspondiente talle que desea agregar al carrito, los conjuntos que ofrecemos son los siguientes:\n ${conjuntosAMostrar.join("\n")}`));

        let productosAgregados = productosCarrito.push(conjuntos.find(elemento => elemento.id === idElegido));

        alert(`Se agregaron al carrito ${productosAgregados} productos`);
    } else{
        alert(`El producto elegido ${seleccionConjunto} no se encuentra a la venta. `);
    }

    continuar = confirm("Si desea seguir comprando, presione ok");
}

let totalDeCompra = productosCarrito.reduce(function(acc, current){ return acc + current.precio; }, 0);
let  productosSeleccionados = productosCarrito.map((elemento, i) => `${i + 1}. ${elemento.nombre} (Talle: ${elemento.talle})`);
alert(`El total de la compra es ${totalDeCompra}, por los productos\n${productosSeleccionados.join("\n")}`);