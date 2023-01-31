// Desafio 1 - Crie a função compareTrue

function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(sentence) {
  return sentence.split(' ');
}

// https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20splits,string%20is%20split%20between%20words.

// Desafio 3 - Crie a função concatName

function concatName(arrayDeStrings){
  let lastTransfer = arrayDeStrings.length - 1;

  primeiraString = arrayDeStrings[0];

  ultimaString = arrayDeStrings[lastTransfer];
  
  const arrayAlterado = `${ultimaString}, ${primeiraString}`;

  return (arrayAlterado);
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties){
  return (wins *3 + ties);
}

// Desafio 5 - Crie a função highestCount

function highestCount(arrayNumeros){
  let maiorNumero = arrayNumeros[0];
  let contador = 0;

  for (index = 0; index <= arrayNumeros.length; ++index){
    if (arrayNumeros[index] > maiorNumero){
      maiorNumero = arrayNumeros[index];
    }
  }
  for (index = 0; index <=arrayNumeros.length; ++index){
    if (arrayNumeros[index] === maiorNumero){
      ++contador;
    }
  }
  return contador;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
