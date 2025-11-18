var arr = [25,- 25, 0,0,0,0,- 63, 88, -369, 15, 366, -44, 55];

var negative = 0;
var positive = 0;
var zero=0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >0) {
        positive++;
    }
    else if (arr[i] <0) {
        negative++;
    }
    else{
        zero++;
    }
}
console.log("total number of positive is :" + positive);
console.log("total number of negative is :" + negative);
console.log("total number of zer0 is :" + zero);