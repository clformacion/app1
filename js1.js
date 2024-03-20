/*
🌱 '🍎 🐍 🧱 🎉




*/ 

alert("felicidades" + '🎉🎉🎉🎉 🍎🍎🍎🍎 ');


let num = Number(prompt("Ingrese un número: ")); // entrada
let n  //número a adivinar
let intentos = 1

n = Math.ceil(Math.random() * 100)

while( num !== n ){
    if( num > n){
        //nueva entrada
        num = Number(prompt("Ingrese un número menor: "));
        intentos++;
    }else{
        //nueva entrada
        num = Number(prompt("Ingrese un número mayor: "));
        intentos++;
    }
}
console.log(`Acertaste..! en ${intentos} intentos`)