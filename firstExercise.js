const calculateVolume = (circumradius) => {
  const elevatedCircumRadius = Math.pow(circumradius, 3);
  const volume = (4 * Math.PI * elevatedCircumRadius) / 3;
  console.log("The volume of the esphere is ", volume.toFixed(3));
  return;
};

// calculateVolume(3);

const isOdd = (number) => number % 2 === 0
// console.log("O número 3 é par?", isOdd(3));
// console.log("O número 2 é par?", isOdd(2));

const getHighestValue = (...numbers) => {
  const hightestValue = Math.max(...numbers);
  return console.log("O maior valor é:", hightestValue);
}

// getHighestValue(1, 10, 30, 3);

const difference = (number1, number2) => {
  const diff = number1 - number2;
  return console.log("A diferença entre os dois é", diff);
}

// difference(53, 12);

const sqrtAndPlus = (number1, number2, number3) => {
  const sqrtResult = Math.sqrt(number1);
  const result = sqrtResult + number2 + number3
  return console.log("Resultado", result.toFixed(3));
};

// sqrtAndPlus(3.5, 2.3, 4.5);

const getMonthByNumber = (number) => {
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const index = number - 1;
  if (index < 0 || index > 11) {
    return console.log("Mês inválido");
  }
  return console.log("O mês escolhido é", monthNames[index]);
}

// getMonthByNumber(13);
// getMonthByNumber(10);


const getConcept = (average) => {
  if (average <= 4.9) {
    return console.log("Aluno conceito D");
  } else if (average >= 5 & average <= 6.9) {
    return console.log("Aluno conceito C");
  } else if (average >= 7.0 && average <= 8.9) {
    return console.log("Aluno conceito B");
  } else {
    return console.log("Aluno conceito A");
  }
}

// getConcept(9.2);
// getConcept(8.9);
// getConcept(6.5);
// getConcept(0.3);

const peformOperation = (char, number1, number2) => {
  switch (char) {
    case '+': 
      console.log("A soma é", number1 + number2)
      break;
    case '-': 
      console.log("A diferença é", number1 - number2)
      break;
    case '/': 
      console.log("A divisão é", number1 / number2)
      break;
    case '*': 
      console.log("A divisão é", number1 * number2)
      break;
    default: console.log("Operação inválida")
  }
}
peformOperation("X", 4, 3)
peformOperation("+", 4, 3)
peformOperation("-", 4, 3)
peformOperation("/", 4, 3)
peformOperation("*", 4, 3)

