let a = 0;
for (let i = 0; i < 101; i++) {
    if (a % 3 === 0 && a % 5 === 0 ) {
        console.log("FizzBuzz");
    } 
    else if (a % 3 === 0) {
        console.log("Fizz");
    } 
    else if (a % 5 === 0) {
        console.log("Buzz");
    } 
    else{
        console.log(a);
    }
    a++; 
}