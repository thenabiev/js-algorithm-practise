function countLetter(str){
    let arr=str.toLowerCase().split('').sort();
    console.log(arr)
    let counter=0
    for (let i=0; i<=arr.length; i++){
       if(arr[counter]==arr[i]){
        console.log(arr[i])
        counter++
       }
    }
}

countLetter("mAbbasmabmm");

