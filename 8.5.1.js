function number(){
  

var a = prompt ('Введи число')

a++
a--
  
if (typeof a == "number" && ! isNaN(a)) {
   
   if (a % 2 === 0) {
     console.log("четное")
   } 
  
   else {
      console.log("нечетное")
    }
}
  
  else {
  console.log ("Упс, кажется, вы ошиблись")
  }
 }

number();