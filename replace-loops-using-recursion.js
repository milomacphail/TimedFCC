function sum(arr, num) {  
  if(num <= 0) 
  { 
  return arr[0];
    } else {
      return sum(arr, num-1) + arr[num];
}