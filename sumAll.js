function sumAll(arr) {

  let i = arr[0];
  var sum = 0;

  if(arr[0] < arr[1])
  {
      while(i <= arr[1])
      {
        sum += i;
        i++;
      }
  }
  else
  {
    while(i >= arr[1])
      {
        sum += i;
        i--;
      }
  }


  console.log(sum);
  return sum;

}

sumAll([1, 4]);
