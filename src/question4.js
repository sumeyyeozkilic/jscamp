

for(let i=2; i<=1000; i++){
    let primeN=0

    for(let j=2; j<i; j++){
        if(j % i==0){
            primeN=primeN+1
            break
        }
    }
    if(primeN==0){
        console.log("The prime numbers between 1 to 1000: "+ i)
    }
}