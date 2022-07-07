//SIMULAMOS UN CARRITO DE COMPRAS DE UN SITIO WEB DE LENCERIA

const conjuntos = window.productos;

let productosCarrito = [];
let continuar = true;

const container = document.getElementById("container");

const botonFiltroArmado = document.getElementById("btnArmado");
const botonFiltroSinArmar = document.getElementById("btnSinArmar");
const evento = "click";
const botonVerProductos = document.getElementById("btnVerProductos");

function imprimirConjuntos(conjuntosFiltrados) {
    container.innerHTML = "";
    for (producto of conjuntosFiltrados) {
        const p = producto;
        let item = document.createElement("div");
        item.innerHTML = `<p>Id: ${producto.id}</p>
                          <h3> Modelo: ${producto.nombre}</h3>
                          <p> Talle: ${producto.talle}</p>
                          <b> Precio: ${producto.precio}</b><br>
                          <button id="btnCarrito-${producto.id}"> Agregar al carrito </button>`
        container.appendChild(item);
        const botonCarrito = document.getElementById(`btnCarrito-${producto.id}`);
        botonCarrito.addEventListener(evento, () => {
            alert(`Se agregaron al carrito ${productosCarrito.push(p)} productos`);

            const totalDeCompra = document.getElementById("totalCarrito");
            totalDeCompra.innerHTML = productosCarrito.reduce(function (acc, current) { return acc + current.precio; }, 0);
        });
    }
}

function construirFiltro(tipo) {
    return () => {
        const conjuntosFiltrados = conjuntos.filter(elemento => elemento.conjunto === tipo);
        imprimirConjuntos(conjuntosFiltrados);
    }
}

botonFiltroArmado.addEventListener(evento, construirFiltro("armado"));

botonFiltroSinArmar.addEventListener(evento, construirFiltro("sin armar"));

botonVerProductos.addEventListener(evento, () => {
    let productosSeleccionados = productosCarrito.map((elemento, i) => `${i + 1}. ${elemento.nombre} (Talle: ${elemento.talle})`);
    alert(`Los productos agregados son: \n${productosSeleccionados.join("\n")}`);
});

