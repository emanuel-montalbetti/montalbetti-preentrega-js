const productos = [
    {nombre: "Tibieras", precio: "40000", marca: "Venum", composicion: "Ecocuero"},
    {nombre: "Guantes box", precio: "55500", marca: "Cleto Reyes", composicion: "Cuero Vacuno"},
    {nombre: "Guantes MMA", precio: "29999", marca: "Everlast", composicion: "Ecocuero"},
    {nombre: "Bucal", precio: "5399", marca: "Everlast", composicion: "Poliuretano"},
    {nombre: "Vendas", precio: "4000", marca: "Adidas", composicion: "Algodon y Poliamida"},
    {nombre: "Cabezal", precio: "25999", marca: "Cleto Reyes", composicion: "Cuero Vacuno"},
    {nombre: "Soga", precio: "2000", marca: "Everlast", composicion: "Acero"},
    {nombre: "Heavybag", precio: "43500", marca: "Venum", composicion: "Ecocuero"},
    {nombre: "waterbag", precio: "68900", marca: "Aqua Boxing", composicion: "pvc"}
];

const itemFactura = {nombre: " ", cantidad: " ", subtotal: " "};
const detalleFactura = [];

let cantidad;
let total = 0;
let opcion;
let agregar;

alert("Bienvenido a nuestro carrito, presione aceptar para comenzar");

do {
    const listaStringProductos = productos.map(
        (product, index) => `
                        ${index + 1}: ${product.nombre} precio: ${product.precio}
    `);
    opcion = parseInt(
        prompt("Que producto desea elegir?" + "\n" + listaStringProductos.join('\n')));

    if (opcion <= 0 || opcion <= productos.length) {
    cantidad = parseInt(prompt("Ingrese la cantidad que desea"));} 
    else {prompt("Ingrese una opcion valida"+ "\n" + listaStringProductos.join('\n'))};
    
    detalleFactura.push({
        nombre: productos[opcion-1].nombre, 
        precioUnitario: productos[opcion-1].precio, 
        cantidad, 
        subtotal: productos[opcion - 1].precio*cantidad}); 

    agregar = prompt("Deseas agregar mas productos al carrito? si/no");

    
    }while (agregar == "si")


total = detalleFactura.reduce((acc, itemFactura) => acc + itemFactura.precioUnitario*itemFactura.cantidad, 0);

alert("El total a pagar de su compra es de: $" + total)