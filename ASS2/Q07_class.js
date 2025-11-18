var arr = [25, 25, 17, 63, 88, 369, 15, 366, 44, 55];
var arr2 = [];

for (var i = 0; i < arr.length; i++) {
    arr2[i] = arr[arr.length - i];
    console.log(arr2[i]);
}
