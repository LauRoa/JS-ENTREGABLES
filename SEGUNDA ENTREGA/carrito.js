//SIMULAMOS UN CARRITO DE COMPRAS DE UN SITIO WEB DE LENCERIA

const conjuntos = window.productos;

let productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

function totalDeCompra(){
  const totalDeCompra = document.getElementById("totalCarrito");
  totalDeCompra.innerHTML = productosCarrito.reduce(function (acc, current) { return acc + current.precio; }, 0);
}

totalDeCompra();

const container = document.getElementById("container");

const evento = "click";

function imprimirCarrito() {
    container.innerHTML = "";
    for (producto of productosCarrito) {
        const p = producto;
        let item = document.createElement("div");
        item.innerHTML = `<p>Id: ${producto.id}</p>
                          <h3> Modelo: ${producto.nombre}</h3>
                          <p> Talle: ${producto.talle}</p>
                          <b> Precio: ${producto.precio}</b><br>
                          <button id="btnCarrito-${producto.id}"> Quitar producto </button>`
        container.appendChild(item);
        const botonCarrito = document.getElementById(`btnCarrito-${producto.id}`);
        botonCarrito.addEventListener(evento, () => {
          const conjuntosFiltrados = productosCarrito.filter(elemento => elemento.id != p.id);
           Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Tu producto fue eliminado del carrito.`,
            showConfirmButton: false,
            timer: 1500
          });
            localStorage.setItem("carrito", JSON.stringify(conjuntosFiltrados));
            totalDeCompra();
        });
    }
}
imprimirCarrito()

const botonVaciarCarrito = document.getElementById(`btnVaciarCarrito`);
botonVaciarCarrito.addEventListener(evento, () => {
  localStorage.clear();
  productosCarrito =  JSON.parse(localStorage.getItem("carrito")) || [];
  totalDeCompra();
  imprimirCarrito();
});