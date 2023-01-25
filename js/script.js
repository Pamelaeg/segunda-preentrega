const tutor = "Gaston Da Ruda"
alert("Hola " + tutor + "! En esta segunda pre entrega funciona todo en consola")
alert("Advertencia: Es breve porque era MUY largo, logre resumir como mejor me pareció")

//creo un array con objetos dentros, que son player (nombre del jugador) y estado de su usuario (activo o inactivo)

const ganadores = [
    {id: 0, player: "Antonela Galvan", status: "Activo"},
    {id: 1, player: "Dante Gutierrez", status: "Activo"},
    {id: 2, player: "Esteban Pellico", status: "Inactivo"},
    {id: 3, player: "Lorena Fabiani", status: "Inactivo"},
    {id: 4, player: "Santiago Moren", status: "Inactivo"},
    ];

    console.log(ganadores)

//primero utilizo la funcion de orden superior filter para filtrar por los usuarios activos 
let ganadoresActivos = ganadores.filter (function(player) {
    return player.status === "Activo"
})
console.log(ganadoresActivos)

//luego sorteo el ganador mediante consola con la funcion math.random para que elija aleatoriamente un numero del 0 y al 1
//le agrego math.round con la idea de que redondee al más cercano ya que van a ser numeros con decimales. 
let sorteoGanador = Math.round(Math.random()*1);

if (sorteoGanador == 0) {
    console.log("El ganador es " + ganadoresActivos[0].player);
} else if (sorteoGanador == 1) {
    console.log("El ganador es " + ganadoresActivos[1].player);
}

//resultado va a ser todo visto en consola, si apretás F5 el resultado va a cambiar y se va a redondear al mas cercano y el resultado va a ser diferente
