// Función extenderPunto
function extenderPunto(punto) {
    // Método dibujar
    punto.dibujar = function() {
        console.log('Dibujando el punto en:', this.x, this.y);
    };

    // Método mover
    punto.mover = function(dx, dy) {
        this.x += dx;
        this.y += dy;
    };

    // Método informar
    punto.informar = function() {
        console.log(`Punto en las coordenadas: (${this.x}, ${this.y})`);
    };
}

// Demostración del uso de la función extenderPunto

// Crear un objeto punto
let miPunto = { x: 10, y: 20 };

// Extender el punto con los nuevos métodos
extenderPunto(miPunto);

// Usar el método dibujar
miPunto.dibujar(); // Salida esperada: Dibujando el punto en: 10 20

// Usar el método mover
miPunto.mover(5, -5);
miPunto.informar(); // Salida esperada: Punto en las coordenadas: (15, 15)

// Usar el método informar nuevamente después de mover el punto
miPunto.mover(-3, 4);
miPunto.informar(); // Salida esperada: Punto en las coordenadas: (12, 19)
