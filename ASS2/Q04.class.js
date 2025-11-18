var arr = [25, 25, 17, 63, 88, 369, 15, 366, 44, 55];
var max2=arr[0];
var max1=arr[0];
for (var i = 0; i < arr.length; i++) {
  if(arr[i]>max1)
  {
    max1=arr[i];

  }
  if(arr[i]>max2&&arr[i]<max1)
  {
    max2=arr[i];
  }
}
console.log(max1);
console.log(max2);