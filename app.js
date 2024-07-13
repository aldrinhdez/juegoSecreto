let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//la función recibe los parametros, y se le asignan a las variables, con el fin de hacer un codigo escalable
// y reducir las lineas de codigo 
function asignarTextoElemento(elemento, texto){
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
    return; // esto es una buena practica
}

//Aquí estamos declarando la función
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);//este obtiene el elemto por sus id
    console.log(intentos);
    //console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){// el triple igual'===', evalua si el igual en valor hy en tipo de dato
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);//Operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled'); // Con este atributo se puede quitar el atributo disabled llamndolo desde su 'ID'

    } else{
        // El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   /* let valorCaja = document.querySelector('#valorUsuario');// el '#' simboliza el id del elemento 
    valorCaja.value = '';*/ //esta es una forma pero para reducirlo es de la siguiente manera

    document.querySelector('#ValorUsuario').value = ""; // De esta manera se acorta el código
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Preguntar si ya sortemaos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else{ // en caso de que todavia falten numeros se sigue jugando
        // Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto'); // Aqui encapsulamos el código para que sea una mejor practica y llamar a los mensaje inciales al reiniciar el juego
    asignarTextoElemento('p', `Indica el número del 1 al ${numeroMaximo}`);
    // generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto(); // aqui ya no se inicializa la varibale, solo se llama a una nueva invocación del método
    //Inicializar el numero de intentos
    intentos = 1;
}

function reiniciarJuego(){
    //necesitamos primero limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros
    condicionesIniciales();
     //Deshabilitar el boton de nuevo jueg
     document.querySelector('#reiniciar').setAttribute('disable', 'true'); // agrega el disable al elemento reiniciar es decir el boton de nuevo juego
}

//Estamos llamando a la función:
condicionesIniciales();