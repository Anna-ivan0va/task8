function data (a){

  if ( typeof a == "number" ) {
    console.log("число")
   }
  
  else if ( typeof a == "string" ) {
    console.log("строка")
    }
  
  else if ( typeof a == "boolean" ){
   console.log ("логический тип")
  }
  
  else {
   console.log ("Тип данных не определён")
  }

 }

data (4);