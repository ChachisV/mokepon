let botonMascota = document.querySelector("#boton-mascota");
botonMascota.addEventListener("click", seleccionarMascotaJugador)

let botonFuego = document.querySelector("#boton-fuego");
botonFuego.addEventListener("click", ataqueFuego)

let botonAgua = document.querySelector("#boton-agua");
botonAgua.addEventListener("click", ataqueAgua);

let botonHierba = document.querySelector("#boton-hierba");
botonHierba.addEventListener("click", ataqueHierba);

let botonReiniciar = document.querySelector("#boton-reiniciar");
botonReiniciar.addEventListener("click", reiniciarJuego);
let ataqueJugador 

let ataqueRival
let vidasJugador = 3
let vidasRival = 3

iniciarJuego()

function iniciarJuego(){

    let sectionSeleccionarAtaque = document.querySelector("#seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.querySelector("#reiniciar")
    sectionReiniciar.style.display = "none"


}

function seleccionarMascotaJugador(){

    let sectionSeleccionarAtaque = document.querySelector("#seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let sectionSeleccionarMascota = document.querySelector("#seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let inputChachis = document.getElementById("chachis");
    let inputBazzinga = document.getElementById("bazzinga");
    let inputAldu = document.getElementById("aldu");
    let inputAlpiste = document.getElementById("alpiste");
    let inputLui = document.getElementById("lui");
    let inputNasita = document.getElementById("nasita");
    let inputRisk = document.getElementById("risk");
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if(inputChachis.checked){
        spanMascotaJugador.innerHTML = "Chachis";
    }else if (inputBazzinga.checked){
        spanMascotaJugador.innerHTML = "Bazzinga";
    }else if (inputAldu.checked){
        spanMascotaJugador.innerHTML = "Aldu";
    }else if (inputAlpiste.checked){
        spanMascotaJugador.innerHTML = "Alpiste";
    }else if (inputLui.checked){
        spanMascotaJugador.innerHTML = "Lui";
    }else if (inputNasita.checked){
        spanMascotaJugador.innerHTML = "Nasita";
    }else if (inputRisk.checked){
        spanMascotaJugador.innerHTML = "Risk";
    }else{
        alert("Selecciona un Mokepon")
        reiniciarJuego()
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1, 7);
    let spanMascotaRival = document.getElementById("mascota-rival");

    if(mascotaAleatoria == 1){
        spanMascotaRival.innerHTML = "Chachis"
    }else if(mascotaAleatoria == 2){
        spanMascotaRival.innerHTML = "Bazzinga"
    }else if(mascotaAleatoria == 3){
        spanMascotaRival.innerHTML = "Aldu"
    }else if(mascotaAleatoria == 4){
        spanMascotaRival.innerHTML = "Alpiste"
    }else if(mascotaAleatoria == 5){
        spanMascotaRival.innerHTML = "Lui"
    }else if(mascotaAleatoria == 6){
        spanMascotaRival.innerHTML = "Nasita"
    }else{
        spanMascotaRival.innerHTML = "Risk"
    }

}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    
    ataqueEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    
    ataqueEnemigo()
}

function ataqueHierba(){
    ataqueJugador = "HIERBA"
    
    ataqueEnemigo()
}



function ataqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);

    if(ataqueAleatorio == 1){
        ataqueRival = "FUEGO"
        
    }else if(ataqueAleatorio == 2){
        ataqueRival = "AGUA"
        
    }else{
        ataqueRival = "HIERBA"
        
    }

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasRival = document.getElementById("vidas-rival")

    if(ataqueRival == ataqueJugador){
        crearMensaje(", EMPATE 🖖")
        
    } else if(ataqueJugador == "FUEGO" && ataqueRival == "HIERBA"){
       crearMensaje(", GANASTE!! 🥳")
       vidasRival--
       spanVidasRival.innerHTML = vidasRival
    } else if(ataqueJugador == "AGUA" && ataqueRival == "FUEGO"){
        crearMensaje(", GANASTE!! 🥳")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
    } else if(ataqueJugador == "HIERBA" && ataqueRival == "AGUA"){
        crearMensaje(", GANASTE!! 🥳")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
    } else {
        crearMensaje(", PERDISTE 😿")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasRival == 0){
        crearMensajeFinal("Ganaste! SIUUUUUUUUUUU")
    }else if(vidasJugador == 0){
        crearMensajeFinal("No tienes vidas, EFE")
    }
}

function crearMensaje(resultadoCombate){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")

    parrafo.innerHTML = "Tu mascota atacó con "+ ataqueJugador +", la mascota del enemigo ataco con "+ ataqueRival + resultadoCombate 
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    let sectionReiniciar = document.querySelector("#reiniciar")
    sectionReiniciar.style.display = "block"

    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.querySelector("#boton-fuego");
    botonFuego.disabled = true

    let botonAgua = document.querySelector("#boton-agua");
    botonAgua.disabled = true

    let botonHierba = document.querySelector("#boton-hierba");
    botonHierba.disabled = true
}

function reiniciarJuego(){
    location.reload()
}



function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}


