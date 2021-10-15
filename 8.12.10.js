function number(a) {
  var b = 0
  var a = prompt("Введите число", '')
  for (let i = 0; i < 1000; i++)
    
  if (a % i === 0 && a < 1000) {
     b = b + 1
   }
  
  if ((b == 2 || a === 1 || a === 0) && a < 1000) {
    console.log('простое')
  }
  
  else if (a > 1000) {
    console.log('данные неверны')
  }
  
  else {
    console.log('составное')
  }
  
}  
  

number();