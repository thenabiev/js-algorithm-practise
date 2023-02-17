// a və b ədədləri arasında 23ə bölünən ədədləri topla

function ab(a, b){
    let t=0;
    for(n=0;n<=b;n+=23){
        if(n>=a){
            t=t+n;
        }
    }
    console.log(t)
}
ab(0, 100)