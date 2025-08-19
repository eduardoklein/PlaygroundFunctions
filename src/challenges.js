// Desafio 1 - Crie a função compareTrue

function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

const input1 = document.getElementById('first-input');
const input2 = document.getElementById('second-input');
const botao = document.getElementById('compareBtn');
const resultadoP = document.getElementById('result');

const errorMessage =
  'Somente True ou False são aceitos como input. Por favor, tente novamente';

botao.addEventListener('click', (event) => {
  event.preventDefault();
  const firstStringValue = input1.value.toLowerCase();
  const secondStringValue = input2.value.toLowerCase();

  const isInput1Valid =
    firstStringValue === 'true' || firstStringValue === 'false';
  const isInput2Valid =
    secondStringValue === 'true' || secondStringValue === 'false';

  if (!isInput1Valid || !isInput2Valid) {
    resultP.textContent = errorMessage;
    return;
  }

  // Converte as strings válidas para booleanos
  const value1Boolean = firstStringValue === 'true';
  const value2Boolean = secondStringValue === 'true';

  // Chama a função compareTrue com os valores booleanos
  const functionResult = compareTrue(value1Boolean, value2Boolean);

  // Exibe o resultado na tag <p>
  resultP.textContent = `O resultado da comparação é: ${functionResult}`;
});

// Desafio 2 - Crie a função splitSentence

function splitSentence(sentence) {
  return sentence.split(' ');
}

// https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20splits,string%20is%20split%20between%20words.

// Desafio 3 - Crie a função concatName

function concatName(arrayDeStrings) {
  return `${arrayDeStrings[arrayDeStrings.length - 1]}, ${arrayDeStrings[0]}`;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 5 - Crie a função highestCount

function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  let contador = 0;

  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] > maiorNumero) {
      maiorNumero = arrayNumeros[index];
    }
  }
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function calcRectangleArea(base, height) {
  return base * height;
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(
      base,
      height
    )}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(
      base,
      height
    )}`;
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// https://stackoverflow.com/questions/5574144/positive-number-to-negative-number-in-javascript

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(numeros) {
  const arrayFizzBuzz = [];
  for (let index = 0; index < numeros.length; ++index) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      arrayFizzBuzz[index] = 'fizzBuzz';
    } else {
      if (numeros[index] % 3 === 0) {
        arrayFizzBuzz[index] = 'fizz';
      } else if (numeros[index] % 5 === 0) {
        arrayFizzBuzz[index] = 'buzz';
      } else {
        arrayFizzBuzz[index] = 'bug!';
      }
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9 - Crie a função encode e a função decode

function encode(fraseParaCodificar) {
  return fraseParaCodificar
    .replaceAll('a', '1')
    .replaceAll('e', '2')
    .replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');
}

function decode(fraseParaDecodificar) {
  return fraseParaDecodificar
    .replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
}

// https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

// Desafio 10 - Crie a função techList

function techList(arrayTech, stringTech) {
  const arrayDeObjetos = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    arrayDeObjetos.push({ name: stringTech, tech: arrayTech.sort()[index] });
  }
  return arrayDeObjetos;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
