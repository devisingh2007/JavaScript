var arr = [2, 34, 21, 45, 35, 92, 39];

var oddSum = 0;
var evensum = 0;
var avrege;
var totalOddnum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evensum = evensum + arr[i];
    }
    else if (arr[i] % 2 == 1) {
        oddSum = oddSum + arr[i];
        totalOddnum++;
    }
}
console.log("sum  of all even  number is :" + evensum);
avrege = oddSum / totalOddnum;
console.log("avrege of odd number  is :" + avrege);