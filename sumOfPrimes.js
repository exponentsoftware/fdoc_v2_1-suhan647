function sumOfPrimes(num){
    let primenumbers = []
    let sum =0
    
    for(let i=2; i<num; i++){
      let prime = true
      
      for(let j=2; j<i;j++){
        if(i % j === 0){
          prime = false
        }
      } 
      if(prime){
        primenumbers.push(i)
      }
    }
     for (let i=0; i<primenumbers.length;i++){
       sum += primenumbers[i]
     }
     return sum
  }
  
  console.log(sumOfPrimes(10))