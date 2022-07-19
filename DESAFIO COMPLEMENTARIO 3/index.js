//SIMULAMOS UN CARRITO DE COMPRAS DE UN SITIO WEB DE LENCERIA

const conjuntos = window.productos;

let productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

function totalDeCompra(){
  const totalDeCompra = document.getElementById("totalCarrito");
  totalDeCompra.innerHTML = productosCarrito.reduce(function (acc, current) { return acc + current.precio; }, 0);
}

totalDeCompra();

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
           Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Tu producto fue añadido al carrito. Total de productos: ${productosCarrito.push(p)}`,
            showConfirmButton: false,
            timer: 1500
          });
            localStorage.setItem("carrito", JSON.stringify(productosCarrito));
            totalDeCompra();
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



















btn.addEventListener("click", () => {
    Swal.fire({
      title: "Está seguro de agregar al carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, seguro",
      cancelButtonText: "No, no quiero",
    }).then((result) => {
      if (result.isConfirmed) {
        // let carrito = JSON.parse(localStorage.getItem("carrito"))
        // carrito.push(producto);
        // localStorage.setItem("carrito", JSON.stringify(carrito));
  
        Swal.fire({
          title: "Guardado!",
          icon: "success",
          text: "El producto se guardo",
        });
      }
    });
  });
  