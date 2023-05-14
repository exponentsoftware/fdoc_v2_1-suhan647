function findMaximumSubarray(arr){
    let max = 0
   for(let i=0; i<arr.length;i++){
     for(let j= i+1; j<arr.length;j++){
       if(arr[i] + arr[j]  > max){
         max = arr[i] + arr[j]
       }
     }
   }
   return max
 }
 
 const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
 console.log(findMaximumSubarray(arr));