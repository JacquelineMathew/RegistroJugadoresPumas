// recuperar los datos de las cajas de texto
const txtNumero= document.getElementById("no_numero");
const txtNombre= document.getElementById("nombre");
const optPosicion= document.getElementById("posicion");
const txtGoles= document.getElementById("goles");
const btnGuardar= document.getElementById("btn_guardar");

//Recuperar el cuerpo de la tabla
const tablaJugadores = document.querySelector("#tabla_jugadores tbody");

btnGuardar.addEventListener("click", function (e) {
    e.preventDefault();
    const jugador ={
        no_numero: txtNumero.value,
        nombre: txtNombre.value.toUpperCase(),
        posicion: optPosicion.value.toUpperCase(),
        goles:Number(txtGoles.value)
    }
    insertarJugadoresTabla(jugador);
});

function insertarJugadoresTabla(jugador) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
             <img src="img/${jugador.no_numero}.jpg"
             alt="" width="100" height="100">
        </td>
        <td>${jugador.no_numero}</td>
        <td>${jugador.nombre}</td>
        <td>${jugador.posicion}</td>
        <td>${jugador.goles}</td>
    
    `;
    tablaJugadores.appendChild(row);
}