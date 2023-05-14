function findNthLargest(arr,n){

    // let a = arr.sort((a, b) => a-b)

    for(let i=0; i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
        if(arr[j] > arr[j+1]){
          let temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
      }
    }
    return arr[n-1]
  }
  
  const arr = [3, 1, 7, 4, 5];
  console.log(findNthLargest(arr, 1));