// Desafio 1 - Crie a função compareTrue

function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(sentence) {
  return sentence.split(' ');
}

// https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20splits,string%20is%20split%20between%20words.

// Desafio 3 - Crie a função concatName

function concatName(arrayDeStrings){
  return `${arrayDeStrings[arrayDeStrings.length-1]}, ${arrayDeStrings[0]}`
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

function calcTriangleArea(base, height){
  return (base*height)/2;
}

function calcRectangleArea(base, height){
  return base*height;
}

function calcAllAreas(base, height, form){
  if (form === 'triângulo'){
    let areaT = (base*height)/2;
    return `O valor da área do triângulo é de: ${areaT}`;
  }else if (form === 'retângulo'){
    let areaR = base*height;
    return `O valor da área do retângulo é de: ${areaR}`;
  }else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
}

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
