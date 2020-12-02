/* 
Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz”.
*/

const FizzBuzz = (number) => {
  console.log("Finding Fizzes Buzzes and of course Fizzbuzzes");

  for (let n = 1; n <= number; n++) {
    switch (true) {
      case (n % 15 === 0):
        console.log("FizzBuzz");
        break;
      case (n % 3 === 0):
        console.log("Fizz");
        break;
      case (n % 5 === 0):
        console.log("Buzz");
        break;
      default:
        console.log(n);
        break;
    }
  }
};

FizzBuzz(100);
