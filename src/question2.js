
function friendNumbers(firstNumber, secondNumber) {
    let total=0

    for(let i=0; i<firstNumber; i++){
        if(firstNumber % i==0){
            total= total+i
        }
    }

    if(total==secondNumber){
        console.log("These numbers are friend numbers")
    }else{
        console.log("These numbers are not friend numbers")
    }
}

   friendNumbers(396,752)
   friendNumbers(220,284)