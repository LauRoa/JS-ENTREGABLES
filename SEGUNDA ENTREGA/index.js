//SIMULAMOS UN CARRITO DE COMPRAS DE UN SITIO WEB DE LENCERIA
async function app() {
  const conjuntos = await fetch('./productos.json').then(res => res.json());
  document.getElementById('contentApp').innerHTML = `<h2> Gracias por visitar nuestro e-commerce<span id="nombreUsuario"></span></div>
  </h2>
  
  <p>Seleccione el tipo de conjuntos que desea visualizar</p>

  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4 col-md-4">
        <div  >
          <button class="botones" id="btnArmado">
              CONJUNTO ARMADO
          </button>
          <button class="botones" id="btnSinArmar">
              CONJUNTO SIN ARMAR
          </button>
      </div>
      <div>
          <div>TOTAL DE COMPRA $: <span id="totalCarrito"></span></div>
          <div> <button class="botones" id="btnVerProductos"> VER PRODUCTOS AGREGADOS</button></div>
      </div>
      <div id="container"></div>
      </div>
    </div>
  </div>
`

  let productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function totalDeCompra() {
    const totalDeCompra = document.getElementById("totalCarrito");
    totalDeCompra.innerHTML = productosCarrito.reduce((acc, current) => {
      const { precio } = current;
      return acc + precio;
    }, 0);
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
      item.innerHTML = `<h3> Modelo: ${producto.nombre}</h3>
                          <p> Talle: ${producto.talle}</p>
                          <b> Precio: ${producto.precio}</b><br>
                          <img class="imagenProductos" src="../img/${producto.imagen}.jpg">
                          <button class="botones" id="btnCarrito-${producto.id}"> Agregar al carrito </button>`
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
      const conjuntosFiltrados = conjuntos.filter(({ conjunto }) => conjunto === tipo);
      imprimirConjuntos(conjuntosFiltrados);
    }
  }

  botonFiltroArmado.addEventListener(evento, construirFiltro("armado"));

  botonFiltroSinArmar.addEventListener(evento, construirFiltro("sin armar"));

  botonVerProductos.addEventListener(evento, () => {
    let productosSeleccionados = productosCarrito.map(({ nombre, talle }, i) => `${i + 1}. ${nombre} (Talle: ${talle})`);
    alert(`Los productos agregados son: \n${productosSeleccionados.join("\n")}`);
  });

  const nombreUsuario = document.getElementById("nombreUsuario");
  nombreUsuario.innerHTML = sessionStorage.getItem("usuario") ? ', ' + sessionStorage.getItem("usuario") : '';
}
app().then(() => console.log('Cargó bien la app'))
.catch(e => {
  console.error('Ocurrió un error al cargar la app');
  throw e;
});