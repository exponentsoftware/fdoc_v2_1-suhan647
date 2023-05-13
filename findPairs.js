function findPairs(arr, num){
    let result = []
    
    for(let i=0; i<arr.length;i++){
      for(let j=0;j<i; j++){
        if(arr[i] + arr[j] === num){
          result.push([arr[i],arr[j]])
        }
      }
    }
    return result
  }
  
  console.log(findPairs( [3, 4, 6, 8, 1, 2, 9], 10))