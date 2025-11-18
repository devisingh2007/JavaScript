var Income  = 55500000;
let tax;
if (Income <= 250000) {
    tax = "No tax";
    console.log(tax);
}

else if (Income <= 500000  && Income > 250000) {
    tax = (Income-250000)*(5/100);
    console.log(tax);
}
else if (Income <= 1000000   && Income > 500000 ) {
    tax = (Income-500000)*(20/100)+12500;
    console.log(tax);
}
else {
    tax = (Income-1000000)*(30/100)+125000+100000;
    console.log(tax);
}