 // Factorial

 function fact(num){
     num=prompt("Add number");
     let def=1;
     if(num>1){
         let factorial;
         for(let i=1; i<=num; i++){
             def*=i;
         }
         console.log(def)
     }
     else{
         console.log("1 factorial = 1")
     }
 }
 fact(5);