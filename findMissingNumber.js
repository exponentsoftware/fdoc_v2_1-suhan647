function findMissingNumber(arr){
    let length = arr.length+1
    let expectsum = 0;
    let originalsum= 0
    
    for(let i=1; i<=length;i++){
      expectsum += i
    }
    
    for(let j=0;j<arr.length; j++){
      originalsum += arr[j]
    }
    return expectsum - originalsum 
  }
  
  console.log(findMissingNumber([1,2,3,5,6,7,8,9,10]))
  