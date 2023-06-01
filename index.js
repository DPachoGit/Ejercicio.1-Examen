 /* Pasar letras a minusculas */

 function letraMinusculas(fraseMinuscula, letraMinuscula){
    letraMinuscula = letraMinuscula.toLowerCase();
    fraseMinuscula = fraseMinuscula.toLowerCase();

    return cuantasRepeticiones(fraseMinuscula, letraMinuscula)
}

 /* Contar letras */

 function cuantasRepeticiones(frase, letra) {
  
  let contador = 0;
  
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
      contador++;
    }
  } 
  return contador;
}

 /* Peticion de la frase y la letra a buscar */
 
let pedirFrase = prompt("Escribe la frase que quieras");

let pedirLetraBuscada = prompt("Escribe la letra que quieras buscar");

let repeticiones = letraMinusculas(pedirFrase, pedirLetraBuscada);

 /* Log del resultado */

console.log("La -" + pedirLetraBuscada + "- esta repetida " + repeticiones + " veces.");

