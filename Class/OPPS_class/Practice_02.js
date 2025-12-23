/*
Question 1: Single Inheritance (JavaScript)

Create a class Person with a constructor that accepts name.
Create a method showName() to print the name.

Create a class Student that inherits from Person.
Add a property rollNo using constructor and create a method showDetails() to print name and rollNo.

Create one object of Student and call both methods.


Question 2: Multilevel Inheritance (JavaScript)

Create a class User with a constructor that accepts username and a method showUsername().

Create a class Employee that inherits from User.
Its constructor should accept username and employeeId and have a method showEmployeeId().

Create a class Manager that inherits from Employee.
Its constructor should accept username, employeeId, and department and have a method showManagerDetails() to print all details.

Create one object of Manager and call all methods.
*/

const { use } = require("react");

// Q01----------------->
console.log("<------------------------------------------------------------------------------------------------------------->");
class Person
{
    constructor(name1)
    {
        this.name1=name1;
    }
    showName()
    {
        console.log(this.name1)
    }
}

class Student extends Person
{
    constructor(name1,rollNo)
    {
        super(name1);
        this.rollNo=rollNo;
    }
    showDetails()
    {
        console.log(this.name1,this.rollNo);
    }
    
}

let st_01= new Student("ronak",25);

console.log(st_01);
st_01.showName();
st_01.showDetails();


console.log("<------------------------------------------------------------------------------------------------------------->");
// Q02----------------->

class username{
    constructor(username)
    {
        this.username=username;

    }
    showUsername()
    {
console.log(this.username); 
    }
}

class Employee extends username
{
    constructor(username,employeeId)
    {
        super(username)
        this.employeeId=employeeId;
    }
    showEmployeeId()
    {
console.log(this.username,this.employeeId);
    }
}
class Manager extends Employee
{
 constructor(username,employeeId,department)
 {
    super(username,employeeId)
    this.department=department;
 }
 showManagerDetails()
 {
    console.log(this.username,this.employeeId,this.department);
 
 }
}

let obj=new Manager("")