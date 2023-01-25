

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

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let jugadorId = null
let enemigoId = null
let mokepones =[]
let mokeponesEnemigos = []
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
let mascotaJugadorObjeto
let ataquesMokepon
let botonFuego 
let botonAgua 
let botonHierba
let botones = []
let ataquePlayer =[]
let ataqueRival =[]
let ataquesMokeponRival = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasRival = 0
let vidasJugador = 3
let vidasRival = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "../assets/mokemap.png"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 700

if (anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}


alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos



class Mokepon{
    constructor(nombre, foto, vida,fotoMapa, id = null){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
        this.ancho = 40 
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }

}

let chachis = new Mokepon("Chachis", "../assets/chacheleon.png", 5, "../assets/chacheleon.png")

let bazzinga = new Mokepon("Bazzinga", "../assets/bazzinorlax.png", 5, "../assets/bazzinorlax.png")

let aldu = new Mokepon("Aldu", "../assets/aldupuff.png", 5, "../assets/aldupuff.png")

let alpiste = new Mokepon("Alpiste", "../assets/alpisduck.png", 5, "../assets/alpisduck.png")

let lui = new Mokepon("Lui", "../assets/luiggecutor.png", 5, "../assets/luiggecutor.png")

let nasita = new Mokepon("Nasita", "../assets/nasichu.png", 5, "../assets/nasichu.png")

let risk = new Mokepon("Risk", "../assets/risknemite.png", 5, "../assets/risknemite.png")

let vallejo = new Mokepon("Vallejo", "../assets/goldllejo.png", 5, "../assets/goldllejo.png")





const fuegoAtaques = [
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}

]

const hierbaAtaques = [
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"},
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}
]

const aguaAtaques = [
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}, 
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}, 
    {nombre: "💧", id: "boton-agua", ataque: "AGUA"}, 
    {nombre: "🍃", id: "boton-hierba", ataque: "HIERBA"}, 
    {nombre: "🔥", id: "boton-fuego", ataque: "FUEGO"}
]

chachis.ataques.push(...fuegoAtaques)

bazzinga.ataques.push(...hierbaAtaques)

aldu.ataques.push(...hierbaAtaques)

alpiste.ataques.push(...aguaAtaques)

lui.ataques.push(...aguaAtaques)

nasita.ataques.push(...fuegoAtaques)

risk.ataques.push(...fuegoAtaques)

vallejo.ataques.push(...hierbaAtaques)


mokepones.push(chachis, bazzinga, aldu, alpiste, lui, nasita, risk, vallejo)

iniciarJuego()

function iniciarJuego(){  
    sectionSeleccionarAtaque.style.display = "none"   
    sectionReiniciar.style.display = "none"
    sectionVerMapa.style.display = "none"

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
    
    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function(res){
            
            if(res.ok){
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMascotaJugador(){
 
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

    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
    
}

function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    } )
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
            if(ataquePlayer.length === 5) {
                enviarAtaques()
            }
           
        })
    })
    
}


function enviarAtaques(){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
        method: "post", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            ataques: ataquePlayer
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
    .then(function(res){
        if(res.ok){
            res.json()
            .then(function({ataques}){
                if (ataques.length === 5){
                    ataqueRival = ataques
                    combate()
                }
            })
        }
    })
}

function seleccionarMascotaEnemigo(rival){
    spanMascotaRival.innerHTML = rival.nombre
    ataquesMokeponRival = rival.ataques
    secuenciaAtaque()
    
}


function ataqueEnemigo(){
    ataqueAleatorio = aleatorio(0, ataquesMokeponRival.length -1);

    

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueRival.push("FUEGO")
    }else if(ataqueAleatorio == 2 || ataqueAleatorio == 4) {
        ataqueRival.push("AGUA")
    }else {        
        ataqueRival.push("HIERBA")
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
    clearInterval(intervalo)
    
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

function pintarCanvas(){

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.clientWidth, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function(mokepon){
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
    
    function enviarPosicion(x,y){
        fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`,{ 
        method: "post", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
        .then(function(res){
            if (res.ok){
                res.json()
                .then(function({enemigos}){
                    console.log(enemigos)
                    
                    mokeponesEnemigos = enemigos.map(function(enemigo){
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if (mokeponNombre === "Chachis" ){
                            mokeponEnemigo = new Mokepon("Chachis", "../assets/chacheleon.png", 5, "../assets/chacheleon.png" , enemigo.id)
                        }else if(mokeponNombre === "Bazzinga"){
                            mokeponEnemigo = new Mokepon("Bazzinga", "../assets/bazzinorlax.png", 5, "../assets/bazzinorlax.png", enemigo.id)
                        }else if ( mokeponNombre === "Aldu"){
                            mokeponEnemigo = new Mokepon("Aldu", "../assets/aldupuff.png", 5, "../assets/aldupuff.png", enemigo.id)
                        }else if ( mokeponNombre === "Alpiste"){
                            mokeponEnemigo = new Mokepon("Alpiste", "../assets/alpisduck.png", 5, "../assets/alpisduck.png", enemigo.id)
                        }else if(mokeponNombre === "Lui"){
                            mokeponEnemigo = new Mokepon("Lui", "../assets/luiggecutor.png", 5, "../assets/luiggecutor.png", enemigo.id )
                        }else if ( mokeponNombre === "Nasita"){
                            mokeponEnemigo = new Mokepon("Nasita", "../assets/nasichu.png", 5, "../assets/nasichu.png", enemigo.id)
                        }else if ( mokeponNombre === "Risk"){
                            mokeponEnemigo = new Mokepon("Risk", "../assets/risknemite.png", 5, "../assets/risknemite.png", enemigo.id)
                        }else if (mokeponNombre === "Vallejo") {
                            mokeponEnemigo = new Mokepon("Vallejo", "../assets/goldllejo.png", 5, "../assets/goldllejo.png", enemigo.id)
                        }

                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y

                        return mokeponEnemigo
                    })              
                  
                })
            }
        })
    }

    
}

function moverDerecha(){    
    mascotaJugadorObjeto.velocidadX =  5
    
}

function moverIzquierda(){    
    mascotaJugadorObjeto.velocidadX =  - 5
    
}

function moverAbajo(){    
    mascotaJugadorObjeto.velocidadY =  + 5
    
}

function moverArriba(){    
    mascotaJugadorObjeto.velocidadY =  - 5
    
}

function detenerMovimiento(){    
    mascotaJugadorObjeto.velocidadX = 0 
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()
            break

        default:
            break;
    }
}

function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
        
    }
}

function revisarColision(rival){
    const arribaRival = rival.y + 15
    const abajoRival = rival.y + rival.alto - 15
    const derechaRival = rival.x + rival.ancho  -15
    const izquierdaRival = rival.x + 15

    const arribaMascota = 
        mascotaJugadorObjeto.y + 15
    const abajoMascota = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto -15
    const derechaMascota = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho -15
    const izquierdaMascota = 
        mascotaJugadorObjeto.x + 15

    if(
        abajoMascota < arribaRival || 
        arribaMascota > abajoRival ||
        derechaMascota < izquierdaRival ||
        izquierdaMascota > derechaRival
    ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("Se detecto una colision");

    enemigoId = rival.id
    sectionSeleccionarAtaque.style.display = "flex"   
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(rival)
    // alert(rival.nombre + " salvaje aparece")
}