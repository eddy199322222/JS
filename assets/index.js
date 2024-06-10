const precio = 400000;


const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;


const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const btnIncrementar = document.querySelector(".btn-incrementar");
const btnDecrementar = document.querySelector(".btn-decrementar");


let cantidad = 0;
let total = 0;


function actualizarValores() {
    cantidadSpan.innerHTML = cantidad;
    total = cantidad * precio;
    valorTotalSpan.innerHTML = total;
}


btnIncrementar.addEventListener("click", () => {
    cantidad++;
    actualizarValores();
});


btnDecrementar.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        actualizarValores();
    }
});


actualizarValores();
