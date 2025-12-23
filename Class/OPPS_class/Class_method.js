// method is a function which is defined inside the class.
// A method is associated with an object and is used to perform actions on that object.

// Example of class with methods and inheritance

class a{
    constructor(v1,v2){
        this.v1=v1;
        this.v2=v2;
    }
    method_1(){
        console.log("Hello from method 1");
    }
    method_3(){
        console.log("Hello from method 3");
    }
}

class b extends a{
    constructor(v1,v2,v3){
        super(v1,v2);
        this.v3=v3;
        
    }
    method_2(){
        console.log("Hello from method 2");
    }
}

let obj = new b("v1", "v2", "v3");
console.log(obj.v3);
console.log(obj.v1);
console.log(obj.v2);
obj.method_1();
obj.method_2();
obj.method_3();


// use static method
class c extends b{
    constructor(name,v1,v2,v3){
        super(v1,v2,v3);
        this.name=name;

    }
    static static_method(){
        console.log("Hello from static method");
    }
}
class d extends c{
    constructor(name,age){
        super(name);
        this.age=age;
    }   
}
var da=new d("Ronak","18");
d.static_method(); // calling static method without creating object
da.method_1(); // error cannot call non static method without creating object