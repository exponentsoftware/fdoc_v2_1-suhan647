function longestIncreasingSubsequence(arr){
  
    let result = []
    for(let i=0; i<arr.length;i++){
      let flag = true
      for(let j=0; j<i;j++){
        if(arr[i] < arr[j]){
         flag = false
        }
      }
      if(flag){
        result.push(arr[i])
      }
    }
    return result
  }
  
  console.log(longestIncreasingSubsequence([1, 4, 2, 5, 3]));