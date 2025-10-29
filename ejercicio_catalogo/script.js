const productos = [
 { 

nombre: 'Lámpara de saturno',
descripcion: 'Lámpara de saturno funcional',
precio: 250.00,
imagen: 'Imagen1.webp'
 },
 {
 nombre: 'Telescopio',
 descripcion: 'Lindo telescopio ',
 precio: 5900.00,
 imagen: 'imgagen2.webp'
 },
 {
 nombre: 'Libro de Astronomía',
 descripcion: 'Libro de Astronomía de Stephen W. Hawing',
 precio: 100.00,
 imagen: 'imagen3.webp'
 },
 {
 nombre: 'Libro sobre agujeros negros',
 descripcion: 'Libro sobre agujeros negros de Stephen W. Hawking',
 precio: 149.99,
 imagen: 'imagen4.webp'
 }
];
const catalogo = document.getElementById('catalogo');

function crearTarjetaProducto(producto)
 {
const card = document.createElement('div');
card.className = 'producto-card';
const imagen = document.createElement('img');
imagen.src = producto.imagen;
imagen.alt = producto.nombre;
const titulo = document.createElement('h2');
titulo.textContent = producto.nombre;
const descripcion = document.createElement('p');
descripcion.textContent = producto.descripcion;
const precio = document.createElement('span');
precio.className = 'precio';
precio.textContent = `$${producto.precio.toFixed(2)}`;
const boton = document.createElement('button');
boton.className = 'btn-comprar';
boton.textContent = 'Comprar';
card.appendChild(imagen);
card.appendChild(titulo);
card.appendChild(descripcion);
card.appendChild(precio);
 card.appendChild(boton);
return card;
}
function renderizarCatalogo() {
productos.forEach(producto => {
const tarjeta = crearTarjetaProducto(producto);
catalogo.appendChild(tarjeta);
});
}
window.onload = renderizarCatalogo;
