// Función que extiende el objeto punto con métodos dibujar, mover e informar
function extenderPunto(punto) {
    punto.dibujar = function() {
        console.log('Dibujando el punto en:', this.x, this.y);
    };

    punto.mover = function(dx, dy) {
        this.x += dx;
        this.y += dy;
    };

    punto.informar = function() {
        console.log(`Punto en las coordenadas: (${this.x}, ${this.y})`);
    };
}

// Función que suma puntos y agrega el método sumar
function sumarPuntos(punto1, punto2) {
    function sumar(x, y) {
        this.x += x;
        this.y += y;
    }

    sumar.apply(punto1, [punto2.x, punto2.y]);

    punto1.sumar = function(otroPunto) {
        sumar.apply(this, [otroPunto.x, otroPunto.y]);
    };
}

// Demostración del uso de la función sumarPuntos y el método sumar

// Crear dos objetos punto
let punto1 = { x: 10, y: 20 };
let punto2 = { x: 5, y: 15 };

// Extender punto1 y punto2 con los métodos necesarios
extenderPunto(punto1);
extenderPunto(punto2);

// Sumar las coordenadas de punto2 a punto1 usando sumarPuntos
sumarPuntos(punto1, punto2);

// Informar el estado actual de punto1 después de la suma
punto1.informar(); // Salida esperada: Punto en las coordenadas: (15, 35)

// Crear un tercer punto
let punto3 = { x: 3, y: 7 };
extenderPunto(punto3);

// Usar el método sumar de punto1 para sumar las coordenadas de punto3
punto1.sumar(punto3);

// Informar el estado actual de punto1 después de la segunda suma
punto1.informar(); // Salida esperada: Punto en las coordenadas: (18, 42)
