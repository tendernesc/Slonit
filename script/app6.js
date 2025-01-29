function computerGuess(target) {
  let low = 1, high = 100;
  let attempts = 0;
  
  while (low <= high) {
      attempts++;
      let guess = Math.floor((low + high) / 2);
      console.log(`Компьютер 2: Пробую число ${guess}.`);
      
      if (guess < target) {
          console.log("Компьютер 1: Больше.");
          low = guess + 1;
      } else if (guess > target) {
          console.log("Компьютер 1: Меньше.");
          high = guess - 1;
      } else {
          console.log("Компьютер 1: Угадал!");
          break;
      }
  }
}

let targetNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Компьютер 1 загадал число: ${targetNumber}.`);

computerGuess(targetNumber);