var unit = 250;
let bill;
if (unit <= 100) {
    bill = unit * 5;
    console.log(bill);
}

else if (unit <= 300 && unit > 100) {
    bill = (500) + ((unit - 100) * 7);
    console.log(bill);
}
else {
    bill = (unit - 300) * 10 + 1400 + 500;
    console.log(bill);
}