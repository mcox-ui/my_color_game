// Paso 2 : Dar Color A Las Tarjetas
// 1. Creá un Arreglo llamado colors y escribí 6 colores en formato RGB.
// ⚠️ Importante: Escribí los colores respetando esta sintaxis (con los espacios) "rgb(240, 14, 128)".
const colors = [
    "rgb(240, 14, 128)",
    "rgb(14, 240, 128)",
    "rgb(240, 14, 14)",
    "rgb(14, 14, 240)",
    "rgb(240, 240, 14)",
    "rgb(14, 240, 240)"
];

// 2. Asignale a cada cuadrado un color:
// Seleccioná todos los cuadrados usando querySelectorAll().
// Recorrelos usando un for Loop. En cada vuelta del Loop, asignale un color del Arreglo colors.
const squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}

// 3. Deberás lograr que se muestre el código RGB del color ganador.
// 3.1 Dentro del span #colorDisplay irá el código RGB del color ganador.
// 3.2 Creá la Variable pickedColor. Dale un color específico del array que acabas de crear (por ejemplo colors[3]) y su valor al texto de #colorDisplay.
// const pickedColor = colors[3];
// document.getElementById("colorDisplay").textContent = pickedColor;