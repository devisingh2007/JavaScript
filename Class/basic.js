// var num1 = 10;
// var num5;

// function f1() {
//     var num5 = 20;
//     console.log("1", num5);
//     function f2() {
//         console.log("4", num5);
//     }
// }
// console.log("2: ", num5);
// num5 = 50;
// f1();
// console.log("3: ", num5);
// f2();



var obj =  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  };
  console.log( `product id is ${obj.id} and product price is ${obj.price} from category ${obj.category} with rating ${obj.rating.rate}` );