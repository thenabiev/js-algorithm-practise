
// Find the sum of the odd numbers between a and b
let total=0, piece=0, total2=0;

let a=33
b=1000

for (let i=a; i<=b; i+=2){
    total+=i
    if(i%3==0){
        total2+=i;
        piece++;
    }
}
var average=total2/piece;
console.log("Total sum : "+total);
console.log(average)

