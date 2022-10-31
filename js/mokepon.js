const sectionSeleccionarAtaque = document.querySelector("#seleccionar-ataque")
const sectionReiniciar = document.querySelector("#reiniciar")
const botonMascota = document.querySelector("#boton-mascota")
const botonReiniciar = document.querySelector("#boton-reiniciar")

const sectionSeleccionarMascota = document.querySelector("#seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaRival = document.getElementById("mascota-rival");

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasRival = document.getElementById("vidas-rival")

const resultado = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelRival = document.getElementById("ataques-del-rival")
const contenedorTarjetas = document.getElementById("cards-container")
const contenedorBotones = document.getElementById("contenedor-botones")


let mokepones =[]
let ataqueJugador 
let ataqueRival =[]
let ataqueAleatorio
let opcionDeMokepones
let inputChachis 
let inputBazzinga 
let inputAldu 
let inputAlpiste 
let inputLui 
let inputNasita 
let inputRisk 
let inputVallejo 
let mascotaJugador 
let ataquesMokepon
let botonFuego 
let botonAgua 
let botonHierba
let botones = []
let ataquePlayer =[]
let ataquesMokeponRival = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasRival = 0
let vidasJugador = 3
let vidasRival = 3


class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
    }
}

let chachis = new Mokepon("Chachis", "../assets/chacheleon.png", 5)

let bazzinga = new Mokepon("Bazzinga", "../assets/bazzinorlax.png", 5)

let aldu = new Mokepon("Aldu", "../assets/aldupuff.png", 5)

let alpiste = new Mokepon("Alpiste", "../assets/alpisduck.png", 5)

let lui = new Mokepon("Lui", "../assets/luiggecutor.png", 5)

let nasita = new Mokepon("Nasita", "../assets/nasichu.png", 5)

let risk = new Mokepon("Risk", "../assets/risknemite.png", 5)

let vallejo = new Mokepon("Vallejo", "../assets/goldllejo.png", 5)



chachis.ataques.push(
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}

)

bazzinga.ataques.push(
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"},
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}

)

aldu.ataques.push(
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"},
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}

)

alpiste.ataques.push(
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}, 
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}, 
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}

)

lui.ataques.push(
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}, 
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}, 
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}

)

nasita.ataques.push(
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}

)

risk.ataques.push(
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}
)

vallejo.ataques.push(
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"},
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}

)


mokepones.push(chachis, bazzinga, aldu, alpiste, lui, nasita, risk, vallejo)

iniciarJuego()

function iniciarJuego(){  
    sectionSeleccionarAtaque.style.display = "none"   
    sectionReiniciar.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputChachis = document.getElementById("Chachis");
        inputBazzinga = document.getElementById("Bazzinga");
        inputAldu = document.getElementById("Aldu");
        inputAlpiste = document.getElementById("Alpiste");
        inputLui = document.getElementById("Lui");
        inputNasita = document.getElementById("Nasita");
        inputRisk = document.getElementById("Risk");
        inputVallejo = document.getElementById("Vallejo");
    })

    botonMascota.addEventListener("click", seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener("click", reiniciarJuego);
    
}

function seleccionarMascotaJugador(){
    sectionSeleccionarAtaque.style.display = "flex"    
    sectionSeleccionarMascota.style.display = "none"

    if(inputChachis.checked){
        spanMascotaJugador.innerHTML = inputChachis.id
        mascotaJugador = inputChachis.id
        
    }else if (inputBazzinga.checked){
        spanMascotaJugador.innerHTML = inputBazzinga.id
        mascotaJugador = inputBazzinga.id
    }else if (inputAldu.checked){
        spanMascotaJugador.innerHTML = inputAldu.id
        mascotaJugador = inputAldu.id
    }else if (inputAlpiste.checked){
        spanMascotaJugador.innerHTML = inputAlpiste.id
        mascotaJugador = inputAlpiste.id
    }else if (inputLui.checked){
        spanMascotaJugador.innerHTML = inputLui.id
        mascotaJugador = inputLui.id
    }else if (inputNasita.checked){
        spanMascotaJugador.innerHTML = inputNasita.id
        mascotaJugador = inputNasita.id
    }else if (inputRisk.checked){
        spanMascotaJugador.innerHTML = inputRisk.id
        mascotaJugador = inputRisk.id
    }else if (inputVallejo.checked){
        spanMascotaJugador.innerHTML = inputVallejo.id
        mascotaJugador = inputVallejo.id
    }else{
        alert("Selecciona un Mokepon")
        reiniciarJuego()
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
        
    }
    
    mostrarAtaques(ataques)
}


function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque botonAtaque">${ataque.nombre}</button>
        `
        contenedorBotones.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonHierba = document.getElementById("boton-hierba")
    botones = document.querySelectorAll(".botonAtaque") 
 
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e)=>{
            if(e.target.textContent === "🔥"){
                ataquePlayer.push("FUEGO")
                console.log(ataquePlayer)
                boton.style.background = "#810000"
                boton.disabled = true  
            } else if (e.target.textContent === "💧"){
                ataquePlayer.push("AGUA")
                console.log(ataquePlayer)
                boton.style.background = "#810000"
                boton.disabled = true  
            } else {
                ataquePlayer.push("HIERBA")
                console.log(ataquePlayer)
                boton.style.background = "#810000"
                boton.disabled = true  
            }
            ataqueEnemigo()
        })
    })
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1);    

    spanMascotaRival.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponRival = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
    
}


function ataqueEnemigo(){
    ataqueAleatorio = aleatorio(0, ataquesMokeponRival.length -1);

    

    if(!ataqueRival.includes(ataquesMokeponRival[ataqueAleatorio])){
        ataqueRival.push(ataquesMokeponRival[ataqueAleatorio].ataque)
        console.log(ataqueRival)
    }else{
        ataqueEnemigo()
    }
    iniciarPelea()
   
}



function iniciarPelea(){
    if (ataquePlayer.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo){
    indexAtaqueJugador = ataquePlayer[jugador]
    indexAtaqueEnemigo = ataqueRival[enemigo]
}

function combate(){
    
    for (let i = 0; i < ataquePlayer.length; i++) {
        if(ataquePlayer[i] === ataqueRival[i]){
            indexAmbosOponente(i, i)
            crearMensaje("EMPATE 🖖")
        }else if (ataquePlayer[i] === "FUEGO" && ataqueRival[i] ==="HIERBA"){
            indexAmbosOponente(i, i)
            crearMensaje("GANASTE 🤩")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataquePlayer[i] === "AGUA" && ataqueRival[i] ==="FUEGO"){
            indexAmbosOponente(i, i)
            crearMensaje("GANASTE 🤩")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if (ataquePlayer[i] === "HIERBA" && ataqueRival[i] ==="AGUA"){
            indexAmbosOponente(i, i)
            crearMensaje("GANASTE 🤩")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        }else {
            indexAmbosOponente(i, i)
            crearMensaje("PERDISTE 😓")
            victoriasRival ++
            spanVidasRival.innerHTML = victoriasRival
        }
        
    }

    revisarVidas()
}

function revisarVidas(){
    if(victoriasJugador === victoriasRival ){
        crearMensajeFinal("EMPATE CHICOOSSSSS")
    }else if(victoriasJugador > victoriasRival){
        crearMensajeFinal("Ganaste! SIUUUUUUUUUUU")        
    }else{
        crearMensajeFinal("Perdiste mi Rey , EFE")
    }
}

function crearMensaje(resultadoCombate){
    

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelRival = document.createElement("p")
    
    resultado.innerHTML = resultadoCombate
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelRival.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelRival.appendChild(nuevoAtaqueDelRival)
}

function crearMensajeFinal(resultadoFinal){
    let resultado = document.getElementById("resultado")

    resultado.innerHTML = resultadoFinal    
    sectionReiniciar.style.display = "block"

}
    
function reiniciarJuego(){
    location.reload()
}



function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}