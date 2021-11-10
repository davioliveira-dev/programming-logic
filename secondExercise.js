const getHighestAndLowestValue = (...numbers) => {
  const highest = Math.max(...numbers);
  const lowest = Math.min(...numbers);
  console.log("O menor número é:", highest);
  console.log("O maior número é:", lowest);
  return false;
};

getHighestAndLowestValue(3, 14, 5, 6, 7, 8, 9, 2, 50, 33);

const printFactorial = (number) => {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial = factorial * i;
  }
  console.log(`O fatorial de ${number} é:`, factorial);
};

printFactorial(3);

const fibonacci = (number) => {
  const sequence = [0, 1];
  for (var i = 0; i < number - 2; i++) {
    sequence.push(sequence[i] + sequence[i + 1]);
  }
  const result = [...new Set(sequence)];
  console.log("A sequência de fibonacci é", result.toString());
};

fibonacci(13);

const isPrimeNumber = (...numbers) => {
  const isPrime = (num) => {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const primeNumbers = numbers.filter(isPrime);

  console.log("Os números primos são", primeNumbers.toString());
};

isPrimeNumber(2, 4, 6, 9, 11, 32, 37, 41);

const getHighestAndLowestAge = (...birthDates) => {
  const ages = birthDates.map((birthDate) => {
    const splitDate = birthDate.split("/");
    const year = splitDate[2]
    const age = 2021 - year;
    return age
  });
  const highestAndLowestAge = ages.sort((a, b) => a - b);
  const lastIndex = highestAndLowestAge.length - 1;
  console.log("A maior idade é:", highestAndLowestAge[0]);
  console.log("A menor idade é:", highestAndLowestAge[lastIndex]);
};

getHighestAndLowestAge(
  "17/04/1973", "20/04/1977", "25/01/2002", 
  "27/05/1985", "23/03/1983", "03/11/1986", 
  "22/05/1983", "02/04/1996", "20/03/2014", "19/10/2003"
);


// começar questão 7

