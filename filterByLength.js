function filterByLength(arr, num){
    let spl;
    let result =[]
    for(let i=0; i<arr.length; i++){
     spl = arr[i].split("")
    // console.log(spl.length)
      if(spl.length >= num){
        result.push(arr[i])
      }
    }
    return result
  }
  
  console.log(filterByLength(["apple", "banana", "cherry", "date", "elderberry"], 6))