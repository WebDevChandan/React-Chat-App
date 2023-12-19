// -------------------------------------------------------------------		Class in JS		-------------------------------------------------------------------
//Student Class	i.e. Parent Class (in reference of Player Class)
// class Students{
	//constructor() is the pre-defined method of class 'Students', & properties are assigned in it but not user-defined methods, which will be called automatically by the JavaScript without calling it manually. It accepts parameters.
	// constructor(name, age, rollNo){						//Accepting Parameters
		// this.myName= name;								//Here, this keyword is referring to the Students class as the current context. .myName is the key storing the value of name.
		// this.Age= age;
		// this.myRollNo= rollNo;
	// }
	
	//This is Instance Methods, means any child class can easily inherit instance method under their class but cannot Static Methods. To create static method, we just have to add a static keyword before defining any method.
	 // bioData(){
		// console.log(`Hi I am a class method & this is my name: ${this.myName}, My Age: ${this.Age} & my Rollno: ${this.myRollNo}.  My favorite GAME is ${this.myGame} `);		
	// }

// }

// Player Class i.e. Child Class or Derived Class (after using extends or say inherit Students class it becomes child class)
// class Players extends Students{			//using extends keyword we can inherit the properties & methods of parent Class.
//	Now in order to add some new Properties to the existing properties of parent class, we have to declare that property  inside super constructor using super() method.
	// constructor(name, age, rollNo, game){						//passing new parameter, to add new properties. 
		// super(name, age, rollNo);			//passing parameter of parent class to access their properties.
		// this.myGame= game;
	// }
	 // playerBioData(){
		 // super.bioData();			//to get the access of parent class's method using new method in new drived class
	 // }
// }

// let obj1 = new Players('Chandan', 21, 01, 'Cricket');					//Here, we're calling class Students & Passing arguments by creating an instance of class Students using new keyword.
// let obj2 = new Players('Amar', 35, 09, 'Football');					//We can create multiple Objects using a single class.
// console.log(obj1);
// obj1.bioData();
// obj2.bioData();
// obj1.playerBioData();




// -----------------------		Object, Constructor & Inheritance in JS Before ES6 -----------------------------------------------------

// let bioData = {
	// myName: {
		// firstName: "Chandan",
		// lastName: "Kumar"
	// },
	// age: 20,
	// Branch: "CSFE",
	// message:function(){
		// document.write(`Hey!, My name is ${bioData.name}, My Age is ${bioData.age} and My Branch is ${bioData.Branch}.`);
	// }
// }
// console.log(bioData.myName.lastName);


//_________CONSTRUCTOR FUNCTION_________ (In the place of Classes before ES6). The same thing use it as Classes after ES6
// function Person(first, last, a){													//Standardized Naming Convention of constructor Funciton
// this.firstName = first;															//this refer to the current context. Here, it's Constructor Function "Person()"
// this.lastName = last;
// this.Age = a;
// this.sayHi = function(){
	// alert('hi');
// }

////If we want to change the age.
// this.changeAge = function(newAge){
	// this.Age = newAge;
// }
// }
// let person1 = new Person("Chandan", "Kumar", 21);										//Creating new Object of Constructor Function "Person()". This is called Person constructor .
////If we want to change the age of person1
// person1.changeAge(18);																	

// let person2 = new Person("Amar", "Prasad", 28);

// console.log(person1);
// console.log(person2);


//_________PROTOTYPE IN JAVASCRIPT_________ 
//All the in-built Methods & Properties of Object are stored in Object's Prototype by JavaScript Engine. This is called OBJECT PROTOTYPE which automatically connected with every Object.
// let person1 = new Object();														//Empty Object using Object() Constructor

// function Person(first, last, a){													
	// this.firstName = first;															
	// this.lastName = last;
	// this.Age = a;
// }
//// But when we create an Object using function Constructor, it creates its own Prototype i.e. called CONSTRUCTOR PROTOTYPE (Prototye of Constructor function "Person()"). Moreover, Constructor Prototype consist Object Prototype in it but Constructor Prototye doesn't consist any pre-built Method or Properties of Object, which means Constructor Prototype automatically created by us (User-Defined Prototype) which connected to their User-Defined Objects where as Object Prototype created by JavaScript Engine (Pre-Defined Prototype) which connected to Constructor Prototype. 
// let person2 = new Person("Chandan", "Kumar", 21);									//Object created using Function Constructor

// console.log(person1);
// console.log(person2);

const original_array = [1, 4, 9, 14, 15];
const newArray = original_array.filter((curr_elment, index, array)=>{
	 return curr_elment>9;
});
console.log(newArray );



//_________INHERITANCE using CONSTRUCTOR FUNCTION_________ 
// function Creature(ls){
	// this.lifeSpan = ls;
// }

// function Person(first, last, a){													
	// this.firstName = first;															
	// this.lastName = last;
	// this.Age = a;
// }
////Here, Properties & Methods of Constructor Function "Person()" get copied & pasted to both Object. But the same get Method which is getting copied to Both the Object and ultimately Violating DRY concept of Opps. So, to avoid this we're going to move methods in constructor Prototype and further it connected to the respective Object of Constructor function.
// Person.prototype.fullName = function(){
	// console.log(this.firstName + " " + this.lastName);
// }

// Creature.prototype.breath = function(){
	// console.log('breating....');
// }

////Inheriting method "breath" of creature to person
// Person.prototype.__proto__ = Creature.prototype;

// let person1 = new Person("Chandan", "Kumar", 21);
// let creature = new Creature(100);

// console.log(person1);
// console.log(person1.breath());
// console.log(creature)
// console.log(creature.breath())


// -----------------------------------------------------		Object, Class and Constructor & Inheritance in JS AFTER ES6 -----------------------------------------------------

//_________OBJECT in ES6_________
// let bioData = {};																		//One way of creating blank Object
//// let bioData = new Object();															//Anotother way of creating blank Object using Object constructor.

// bioData.firstName = "Chandan";															//Creating Property and assigning values to it.

// bioData.message = ()=>{																	//Creating Method and assigning a function to it.
	// document.write(`Hey!, My name is ${bioData.name}, My Age is ${bioData.age}
// and My Branch is ${bioData.Branch}.`);

// }

// bioData.message();



//_________CLASS_________ (Introduced in ES6 to Replace Constructor function which was using before ES6)
// class Person{											//Class is similar to Constructor Function used before ES6
	
	////constructor() method (call automatically as Object created)
	// constructor(n, a){										//pre-defined constructor function, Introduced in ES6 which will automatically get called as its class's  Object created.
		// this.name = n;
		// this.Age = a;
		////declaration of method() under constructor funciton will get copied in multiple Objects of class but not get copied outside constructor function.
	// }
	
	////prototype() method (because it automatically get attached with the prototype of Class Object). It get called with the Object of Class
	// sayHi(){											//After ES6, All method under the Class wll automatically get into the Prototype of Constructor Object ie. (Here, Class Object)
		// console.log('hi..');
	// }
	
	////static() method (It get call using Class). It will stick with the class
	// static sayHello(){
		// console.log('Hello...');
	// }
	
	////static Property. It will stick with the class
	// static sProperty = "something";
	
// }
////As No. of Objects created EQUAL to No. of constructor() function will call. 
// let person1 = new Person('Chandan', 21);

// console.log(person1);
// console.log(person1.sayHi());
// console.log(Person.sayHello());
// console.log(Person.sProperty);



//_________INHERITANCE_________ 
// class emp{
	// constructor(n){
		// this.Name = n;
	// }
	
	// msg(){
		// console.log('Hi...');
	// }
// }

// class Mng extends emp{
	// constructor(p, d){
		// super(p);
		// this.Department = d;
	// }
	
	// msg(){
		// console.log('Helloo...');
	// }
	
	// info(){
	// this.msg();
		// console.log(this.Name + " is a manager of department of " + this.Department);
	// }
// }

// class Admin extends Mng{
	
// }

// let manager = new Mng("Chandan", "Web Development.");
// console.log(manager); 
// console.log(manager.info()); 

// let admin = new Admin("King", "DSA.");
// console.log(admin); 


//_________PUBLIC CLASS Vs PRIVATE CLASS_________ 
// class emp{
//	properties or methods defined under constructor function can be directly called via Object. So we can say that these Properties or Methods are public. We've to use "#" to make them private, which can't be directly access/called via Object.
	// #Name = "";										//Firstly we've to declare in order to start making private Property.
	// constructor(n){
		// this.#Name = n;								//Private Property
	// }
	
	// #getInfo(){										//Private method
		// console.log(this.#Name);
	// }
	
	// pubMethod(){
		// this.#getInfo();
	// }
// }

// let Emp1 = new emp("Chandan");
// console.log(Emp1.pubMethod());							//Calling public Name property.


//_________MIXIN_________ 
// let userFullMethod = {
// 	sayHi(){
// 		console.log('Hi...');
// 	},
// 	sayBye(){
// 		console.log('Bye...');
// 	}
// }

// class user{
// 	constructor(){
// 		this.Name = "Chandan";
// 	}
// }
// class admin extends user{
	
// }
// Object.assign(admin.prototype, userFullMethod);

// let Admin = new admin();

// console.log(Admin.sayHi());