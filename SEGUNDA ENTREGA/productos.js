const armados =
[
    {
        "nombre": "Livia",
        "precio": 1400,
        "talle": 85
    },
    {
        "nombre": "Livia",
        "precio": 1500,
        "talle": 90
    },
    {
        "nombre": "Livia",
        "precio": 1600,
        "talle": 95
    },
    {
        "nombre": "Livia",
        "precio": 1700,
        "talle": 100
    },
    {
        "nombre": "Demetria",
        "precio": 1600,
        "talle": 85
    },
    {
        "nombre": "Demetria",
        "precio": 1700,
        "talle": 95
    },
    {
        "nombre": "Demetria",
        "precio": 1750,
        "talle": 100
    },
    {
        "nombre": "Egeria",
        "precio": 1350,
        "talle": 90
    },
    {
        "nombre": "Egeria",
        "precio": 1450,
        "talle": 95
    },
    {
        "nombre": "Egeria",
        "precio": 1600,
        "talle": 100
    },
    {
        "nombre": "Clementia",
        "precio": 1600,
        "talle": 85
    },
    {
        "nombre": "Clementia",
        "precio": 1650,
        "talle": 90
    },
    {
        "nombre": "Clementia",
        "precio": 1700,
        "talle": 100
    }
].map((conjuntoActual) => ({...conjuntoActual, conjunto: 'armado'}))

const sinArmar = [
    {
        "nombre": "Hebe",
        "precio": 1300,
        "talle": 90
    },
    {
        "nombre": "Hebe",
        "precio": 1300,
        "talle": 95
    },
    {
        "nombre": "Hebe",
        "precio": 1300,
        "talle": 100
    },
    {
        "nombre": "Diana",
        "precio": 1300,
        "talle": 95
    },
    {
        "nombre": "Luna",
        "precio": 1200,
        "talle": 85
    },
    {
        "nombre": "Aura",
        "precio": 1250,
        "talle": 85
    },
    {
        "nombre": "Caronte",
        "precio": 1250,
        "talle": 90
    },
    {
        "nombre": "Caronte",
        "precio": 1250,
        "talle": 95
    },
    {
        "nombre": "Caronte",
        "precio": 1250,
        "talle": 100
    },
    {
        "nombre": "Honoria",
        "precio": 1350,
        "talle": 85
    },
    {
        "nombre": "Honoria",
        "precio": 1350,
        "talle": 90
    },
    {
        "nombre": "Honoria",
        "precio": 1350,
        "talle": 100
    }
].map(productoActual => ({...productoActual, conjunto: 'sin armar'}));

window.productos = [...armados, ...sinArmar].map((producto, id) => ({id, ...producto}))