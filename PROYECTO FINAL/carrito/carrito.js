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
        item.classList.add('col-sm-12','col-md-6');
        item.innerHTML = `<div class="card mt-2">
        <img class="card-img-top" src="../img/${producto.imagen}.jpg" alt="Imagen conjunto">
        <div class="card-body">
          <h5 class="card-title">Modelo: ${producto.nombre}</h5>
          <p> Talle: ${producto.talle}</p>
          <b> Precio: $${producto.precio}</b>
          <button class="botones" id="btnCarrito-${producto.id}"> Quitar producto </button>
        </div>
      </div>`
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