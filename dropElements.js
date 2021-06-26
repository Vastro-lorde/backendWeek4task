// let a = ["Cabbage", "Turnip", "Radish", "Carrot"]
// let b = (n) => {n = 1}
// function dropElements(arr,b){
//     arr.splice(c,n)
// }



function dropElements(arr, func) {
    // drop them elements.
    let Lennn = arr.length;
    for (let i = 0; i < Lennn; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    console.log(arr);
  }
  
  // test here
  dropElements([1, 2, 3, 4, 5, 6, 7, 8, 9], function(n) {
    return n >= 5;
  });
  