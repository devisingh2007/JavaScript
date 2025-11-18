
var obj1 =
{

    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": function(a,b){
            console.log(a+b);
           
        },
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": function name(age)
        {
            console.log("hello")
            console.log(age)

        }

    }
}
obj1.company.name(25,25);
console.log(obj1.company.bs(25));