var arr = [25, 25, 17, 63, 88, 369, 15, 366, 44, 55];

var min=arr[0];
for (var i = 0; i < arr.length; i++) {
  if(arr[i]<min)
  {
    min=arr[i];
  }
}
console.log(min);