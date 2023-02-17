// a və b ədədləri arasındakı ədədlərin hasili
  
function ab(a, b){
    var j=1
    for(i=a; i<=b; i++){
        j=i*j
    }
    console.log(j)
}
ab(1, 10);