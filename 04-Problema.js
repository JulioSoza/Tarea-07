// Función para calcular la distancia euclidiana de un punto al origen
function distanciaAlOrigen(punto) {
    return Math.sqrt(punto.x * punto.x + punto.y * punto.y);
}

// Función que determina el punto más lejano del origen
function puntoMasLejano(puntos) {
    if (puntos.length === 0) {
        return null; // Manejo del caso de array vacío
    }

    // Utilizar apply() para encontrar el punto con la distancia máxima al origen
    let maxDistancia = -Infinity;
    let puntoLejano = null;

    puntos.forEach(punto => {
        let distancia = distanciaAlOrigen(punto);
        if (distancia > maxDistancia) {
            maxDistancia = distancia;
            puntoLejano = punto;
        }
    });

    return puntoLejano;
}

// Demostración del uso de la función puntoMasLejano

let puntos = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 12 },
    { x: 8, y: 15 }
];

let puntoLejano = puntoMasLejano(puntos);

if (puntoLejano) {
    console.log('El punto más lejano es:', puntoLejano);
} else {
    console.log('El array de puntos está vacío.');
}
