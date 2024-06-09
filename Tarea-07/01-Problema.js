// Definición de la función Punto
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...'); }
}

// Función moverPunto que usa call() para cambiar propiedades y agregar método mover
function moverPunto(punto, dx, dy) {
    Punto.call(punto, punto.x + dx, punto.y + dy); // Cambia las propiedades x e y del objeto punto
    punto.mover = function(dx, dy) {
        this.x += dx;
        this.y += dy;
    };
}

// Demostración del uso de la función moverPunto y el método mover

// Crear un objeto punto
let miPunto = { x: 10, y: 20 };

// Mover el punto usando la función moverPunto
moverPunto(miPunto, 5, 7);
console.log('Después de moverPunto:', miPunto); // Salida esperada: { x: 15, y: 27, mover: [Function] }

// Usar el método mover para cambiar las coordenadas del punto
miPunto.mover(-3, -4);
console.log('Después de usar el método mover:', miPunto); // Salida esperada: { x: 12, y: 23, mover: [Function] }
