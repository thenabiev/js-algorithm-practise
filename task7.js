
var addTwoNumbers = function(l1, l2) {
    var req1=Number(l1.toString().split('').reverse().join(''));
    var req2=Number(l2.toString().split('').reverse().join(''));
    var req3=req1+req2;

    let req4= req3.toString().split('').reverse();
    let arr=[]
    for(i=0; i<req4.length; i++){
        arr.push(Number(req4[i]))
    }
    console.log(arr)

    return arr
};

addTwoNumbers(234, 162)
