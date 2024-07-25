const arr = [2,3,4,5,8,6];

function findSum(arr){
   let sum = 0;
   for (let i = 0; i< arr.length; i++){
      sum = sum+arr[i];
   }
   return sum;
}

console.log(findSum(arr));

// using reduce function

const output = arr.reduce((acc,curr)=>{
   acc= acc+curr;
   return acc;
},0)   // 0 is a inetial value for acc

console.log(output);

// find max value in arr

const maxValue = arr.reduce((max,curr)=>{
   if(max < curr){
      max = curr;
   }
   return max
},0)

console.log(maxValue);