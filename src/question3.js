
for(let i=1; i<=1000; i++){
    let total=0
    for(let j=1; j<=i; j++){
        if(i%k==0){
            total=total+j 
        }
    }
    if(i*2==total){
       console.log("The perfect numbers: "+i)
}

}

