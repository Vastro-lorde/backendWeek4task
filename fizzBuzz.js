let a = 0;
let fizzBuzz = 0;
let buzz = 0;
let fizz = 0;
for (let i = 0; i < 101; i++) {
    if (a % 3 === 0 && a % 5 === 0 ) {
        console.log("FizzBuzz");
        fizzBuzz++;
    } 
    else if (a % 3 === 0) {
        console.log("Fizz");
        fizz++;
    } 
    else if (a % 5 === 0) {
        console.log("Buzz");
        buzz++;
    } 
    else{
        console.log(a);
    }
    a++; 
}
console.log(`There are ${fizzBuzz} FizzBuzz from 0 to 100`);
console.log(`There are ${fizz} Fizz from 0 to 100`);
console.log(`There are ${buzz} Buzz from 0 to 100`);