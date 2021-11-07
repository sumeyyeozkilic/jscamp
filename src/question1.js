
function findPrime(...numbers){
    let primeNumbers = []
    let nonPrimeNumbers = []

    for(let i=0; i<numbers.length; i++){
        let primeN=0
        if(numbers[i] >=2){
            for(let p=2; p<numbers[i]; p++){
                if(numbers[i] % p==0){
                     nonPrimeNumbers.push(numbers[i])
                     primeN= primeN+1
                     break
                }
            }

            if(primeN==0){
                primeNumbers.push(numbers[i])
            }
        }
        else{
            nonPrimeNumbers.push(numbers[i])
        }
    }

    console.log(numbers + " from the numbers")
    console.log("Prime numbers: " +primeNumbers)
    console.log("NonPrime numbers: " + nonPrimeNumbers)
}

findPrime(15,17,3,9,56,84,36,41,62,29,368)