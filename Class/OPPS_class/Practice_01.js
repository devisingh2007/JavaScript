/*
Question 1 (Single Class – 3 Objects)

Create a class Student with data members name and age.
Use a parameterized constructor.
Create three Student objects in main() and print their values.


Question 2 (Two Classes)

Create two classes: Car and Owner.
Car has brand and price set through a parameterized constructor.
Owner has name set through a parameterized constructor.
In main(), create two Car objects and one Owner object, then print all values.


Question 3 ( Single Class, Multiple Objects)

Create a class Mobile with data members model and cost.
Use a parameterized constructor.
Create three Mobile objects and print their details in main().


Question 4 (Three Classes – Print All Objects in main)

Create three classes: Teacher, Subject, and Classroom.

Teacher has name (set using constructor)

Subject has title (set using constructor)

Classroom has roomNo (set using constructor)

In main(), create:
• One Teacher object
• One Subject object
• One Classroom object

Print all their values in main().*/

// Q01----------------->
console.log("<------------------------------------------------------------------------------------------------------------->");
class Student
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}

var Student_01=new Student("Ronak","18");
var Student_02=new Student("Aryan","19");
var Student_03=new Student("Abhay","20");

console.log(Student_01)
console.log(Student_02)
console.log(Student_03)
console.log("<------------------------------------------------------------------------------------------------------------->");
// <------------------

//Q02 ----------------------->

class Owner {
    constructor(Owner_name) {
        this.Owner_name=Owner_name;
    }

    method_1()
    {
        console.log("WOW! you Print method of owner")
    }
}
class car extends Owner {
    constructor(brand ,price,Owner_name) {
        super(Owner_name);
        this.brand=brand;
        this.price=price;
    }

}
var car_01=new car("BMW","50L");
var car_02=new car("Audi","60L");
var owner_01=new Owner("Ronak");

console.log(car_01);
console.log(car_02);
console.log(owner_01);

// using inheritance
var car_03=new car("Mercedes","70L","Ronak");
console.log(car_03);
car_01.method_1();
console.log("<------------------------------------------------------------------------------------------------------------->");
//<----------------------------------

//Q03 ------------------------------->
class Mobile  {
    constructor(model,cost,brand) {
        this.model=model;
        this.cost=cost;
        this.brand=brand;
    }
}
var Mobile_01=new Mobile("Galaxy","50K","Samsung");
var Mobile_02=new Mobile("iPhone","80K","Apple");
var Mobile_03=new Mobile("Pixel","60K","Google");

console.log(Mobile_01);
console.log(Mobile_02);
console.log(Mobile_03);
console.log("<------------------------------------------------------------------------------------------------------------->");
//<----------------------------------

//Q04 ------------------------------->
class Teacher {
    constructor(name) {
        this.name=name;
    }
}
class Subject {
    constructor(title) {
        this.title=title;
    }
}
class Classroom {
    constructor(roomNo) {
        this.roomNo=roomNo;
    }
}
var teacher_01=new Teacher("Mr. Aniket");
var subject_01=new Subject("Mathematics");
var classroom_01=new Classroom("714");

console.log(teacher_01);
console.log(subject_01);
console.log(classroom_01);
console.log("<------------------------------------------------------------------------------------------------------------->");

//<----------------------------------


class person{
    constructor(name)
    {
        this.name=name;  
    }
}
var obj1=new person("John Doe");