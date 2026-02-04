const numero = "15";
const numInt = parseInt(numero);

let risposta = "";

if (numInt % 2 === 0) {
  risposta = "pari";
} else {
  risposta = "dispari";
}

console.log(risposta);
