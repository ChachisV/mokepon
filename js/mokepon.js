const sectionSeleccionarAtaque = document.querySelector("#seleccionar-ataque")
const sectionReiniciar = document.querySelector("#reiniciar")
const botonMascota = document.querySelector("#boton-mascota")
const botonFuego = document.querySelector("#boton-fuego")
const botonAgua = document.querySelector("#boton-agua")
const botonHierba = document.querySelector("#boton-hierba")
const botonReiniciar = document.querySelector("#boton-reiniciar")

const sectionSeleccionarMascota = document.querySelector("#seleccionar-mascota")
const inputChachis = document.getElementById("chachis");
const inputBazzinga = document.getElementById("bazzinga");
const inputAldu = document.getElementById("aldu");
const inputAlpiste = document.getElementById("alpiste");
const inputLui = document.getElementById("lui");
const inputNasita = document.getElementById("nasita");
const inputRisk = document.getElementById("risk");
const inputVallejo = document.getElementById("vallejo");
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaRival = document.getElementById("mascota-rival");

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasRival = document.getElementById("vidas-rival")

const resultado = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelRival = document.getElementById("ataques-del-rival")

let ataqueJugador 
let ataqueRival
let vidasJugador = 3
let vidasRival = 3

iniciarJuego()

function iniciarJuego(){  
    sectionSeleccionarAtaque.style.display = "none"   
    sectionReiniciar.style.display = "none"
    botonMascota.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua);
    botonHierba.addEventListener("click", ataqueHierba);
    botonReiniciar.addEventListener("click", reiniciarJuego);
    
}

function seleccionarMascotaJugador(){
    sectionSeleccionarAtaque.style.display = "flex"    
    sectionSeleccionarMascota.style.display = "none"

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
    }else if (inputVallejo.checked){
        spanMascotaJugador.innerHTML = "Vallejo";
    }else{
        alert("Selecciona un Mokepon")
        reiniciarJuego()
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1, 8);
    

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
    }else if(mascotaAleatoria == 7){
        spanMascotaRival.innerHTML = "Risk"
    }else{
        spanMascotaRival.innerHTML = "Vallejo"
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
    

    if(ataqueRival == ataqueJugador){
        crearMensaje("EMPATE 🖖")
        
    } else if(ataqueJugador == "FUEGO" && ataqueRival == "HIERBA"){
       crearMensaje("GANASTE!! 🥳")
       vidasRival--
       spanVidasRival.innerHTML = vidasRival
    } else if(ataqueJugador == "AGUA" && ataqueRival == "FUEGO"){
        crearMensaje("GANASTE!! 🥳")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
    } else if(ataqueJugador == "HIERBA" && ataqueRival == "AGUA"){
        crearMensaje("GANASTE!! 🥳")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
    } else {
        crearMensaje("PERDISTE 😿")
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
    

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelRival = document.createElement("p")
    
    resultado.innerHTML = resultadoCombate
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelRival.innerHTML = ataqueRival

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelRival.appendChild(nuevoAtaqueDelRival)
}

function crearMensajeFinal(resultadoFinal){
    let resultado = document.getElementById("resultado")

    resultado.innerHTML = resultadoFinal    
    sectionReiniciar.style.display = "block"
    
    botonFuego.disabled = true    
    botonAgua.disabled = true    
    botonHierba.disabled = true
}

function reiniciarJuego(){
    location.reload()
}



function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}


