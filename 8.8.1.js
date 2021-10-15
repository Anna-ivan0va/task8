
let arr = [1, 3, 5, 2, 0, 0, null, zero];

var odd = 0;
var even = 0;
var zero = 0;
var theRest = 0;

for (i = 0 ; i < arr.length; i++) {
  if (arr[i] % 2 == 0 && arr[i] != 0) {
    even++;
  }
  else if (arr[i] % 2 != 0) {
    odd++;
  }
   else if (arr[i] === 0) {
    zero++;
  }
  else {
    theRest++;
  }
}

console.log(even);
console.log(odd);
console.log(zero);
console.log(theRest++);
