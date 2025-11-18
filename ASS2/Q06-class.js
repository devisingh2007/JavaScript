var arr = [25, 25, 17, 63, 88, 369, 15, 366, 44, 55];

var odd = 0;
var even = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even++;
    }
    else if (arr[i] % 2 == 1) {
        odd++;
    }
}
console.log("total number of even is :" + even);
console.log("total number of odd is :" + odd);