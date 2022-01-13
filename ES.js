// ES6

// video1
//Create Variable
// var , let


// var
// -Function Scope
// can be redeclare
// Undefined wehn Accesing a varaibale Before its Declared
// Create Properties in the Window Object


// let
//-block Scope
//Cannot Be ReDeclare
//ReferenceError when Accesing a variable Before Its Declared
//Does Not Create Properties in the Window Object


// const
// -Block Scope
// -Cannot Be ReDecalare
// ReferenceError When Accessing a variable before its Declared
// Does not create Properties in the window Object

// var osama = 1;
// var ahmed = 2;

// console.log(window.osama);
// console.log(window.ahmed);
// console.log(window);


// console.log(x);//undefined
// var x = 1;

// console.log(y);//ES.js:37 Uncaught ReferenceError: Cannot access 'y' before initialization
// let y = 2;

// let x =1;
// x = 2; //assign
// console.log(x);


// var x = 1;
// var x = 2;//Redeclare
// console.log(x);




// function lettest() {
//     let x =1 ;
//     if (true) {
//         let x = 2;
//         console.log(`Inside If Condition ` + x);//2 block scope
//     }
//     console.log(x);//1
//     return `Done`
// }
// console.log(lettest());



// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2;
//         console.log(x);//2 function scope
//     }
//     console.log(x);//2
//     return `Done`
// }
// console.log(varTest());
// fina nehna nektob kaza sater men belfunction abel el return
// li mamnu3 ykun ger sater wehed



// video3

// const
// -Block Scope
// -Cannot Be ReDecalare
// ReferenceError When Accessing a variable before its Declared
// Does not create Properties in the window Object


// const SETTINGS = 1;
// console.log(SETTINGS);


// const SETTINGS = 1;
// var SETTINGS = 2;//error
// console.log(SETTINGS);


// const SETTINGS = 1;
// if (true) {
//     const SETTINGS = 2;
//     console.log(SETTINGS);//2 cz of block scope
// }
// console.log(SETTINGS);//1


// const SETTINGS = [];
// SETTINGS.push('HTML', 'CSS', 'JS');
// console.log(SETTINGS);
//fina na3mul push fia bas mafina ne5la2 wahde jdide bi
//zet et esem


//Array
// const SETTINGS = [];
// SETTINGS = ['Osama'];//Uncaught TypeError: Assignment to constant variable.
// console.log(SETTINGS);


//Object
// const SETTINGS = {
//     'name': 'Osama',
//     'age': 36
// };
// SETTINGS.name = 'Ahmed';
// console.log(SETTINGS);



// const SETTINGS = {
//     'name': 'Osama',
//     'age': 36
// };
// SETTINGS = {
//     'color': 'red'
// };
// console.log(SETTINGS); //ES.js:134 Uncaught TypeError: Assignment to constant variable.



//Object.freeze(esem el object)
// const SETTINGS = {
//     'name' :'Osama',
//     'age' : 36
// };
// Object.freeze(SETTINGS);
// SETTINGS.name = 'Sayed';
// console.log(SETTINGS);


//video4
//
// Arrow Function

//syntax 1
// function test() {
//     return 2;
// }
// console.log(test());


// //syntax 2
// let test = function () {
//     return 2;
// }
// console.log(test());
//////////////////////////////


//Regular Function with No parameters
// let regular = function () {
//     return 2;
// }


//Arrow FUnction with No parameters

// let arrowTestOne = () => 2;
// let arrowTestTwo = _ => 2; // same as li fo2


// //Regular Function with One Parameter
// let regularTestTwo = function(param) {
//     return param * 2;
// }


// //Arrow Function With One parameter
// let arrowTestThree = (param) => param * 2;
// let arrowTestFour = param => param * 2;


// //Regular Function With Multiple parameters
// let regularTestThree = function(param1, param2) {
//     return param1 * param2;
// }


// //Arrow Function With Multiple Parameters

// let arrowTestFive = (param1, param2) => param1 * param2;

// console.log(arrowTestFive(10, 30));




// video5
// Arrow Function And This Value
// bel regular function
// this btmasel el object li neda el function li enta 3amela
//el object heda momken ykun window , fa2ses , document
//
//regular fonction
// let test = function () {
//     document.getElementById('show').innerHTML = this;

// }
//Window Object Called the function
// window.onload = test;
//bas el window yen3emelo load lah ynede el function degre


//hon el this huwe el button li nede el function yaane el button
// document.getElementById('button').addEventListener('click', test);








//arrow function

// let test = () => document.getElementById('show').innerHTML = this; //mossera 3a heda li2an el this hon
// bte5od el value taba3 el enclosing context yaane (el mu7tawa li hye demno)
//
// yaane ma 3aanda her own this scope metel el bel regular function


// window.onload = test;
// document.getElementById('button').addEventListener('click', test);




// Object
// age ka property  age  = 0
//every function has its own this hayda adiman bas hala2 ma3 wujud el arrow
// function tgayar el wade3 w saret el this bte5od value
// taba3 el curly braces li hya fi.






// hayda example tene adim 3n regular function ma3 this
// so hon awal this ma adra tusal la tene this li2an kell this hye teb3a lal
// scope taba3ha..he adiman bas el arrow function hamdella hallet el mechkle
//

// function Person() {
//     this.age = 0;         //own this

//     setInterval(function() {
//         this.age++;  //own this la hal mahal
//         console.log(this.age);
//     }, 1000);
// }

// let user = new Person();
// so el ess bada 7all..






// n7allet hik abel wujud el arrow function
// shufo tahetttttttttttttttt

// function Person() {
//    let that = this;
// this.age = 0;

//     setInterval(function() {
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }

// let user = new Person();


//////////////////////////////////////////
//baad ma sar fi arrow function hon serna adrin nuwsol el this bi baadon
// btesta5dem el this value taba3 el mu7tawa li hya demno
// yaane ma 3anda this la wahda metel li bel regular



// function Person() {
//     this.age = 0;

//     setInterval(() => {
//         this.age++;
//         console.log(this.age);
//     }, 1000);
// }

// let user = new Person();






///////////////////////
// video6
// Template Literals  `${}`

//adiman
// const theKind = "Male";
// let oldWay = "hello its me" + (theKind === "Male" ? 'Mr' : 'Mrs') + "Osama \n" +
//     "I am" + theKind + "\n" +
//     "I am From el zero web School \n" +
//     "I love all my followers";
// console.log(oldWay);



// hadisan
// new way
// const theKind = "Male";

// let newWay = `Hello its Me ${theKind === "Male" ? 'Mr' : "Mrs"} Osama
// Iam ${theKind}
// Iam From Elzero Web School
// I love All My Followers `;

// console.log(newWay);

//fakhomeeee

// let username = "Osama",
//     age = 36;

// const myHtmlmarkUp =
//     `
// <div class = "card">
// <h2 class= "name">${username}</h2>
// <span class = "age">${age}</span>
// </div>
// `;
// document.body.innerHTML = myHtmlmarkUp;



// video7
// spread operator ...

//old
// let arrayOne = [1, 2, 3],
//     arrayTwo = [4, 5];

// console.log(arrayOne.concat(arrayTwo));

// //es6
// let allArrays = [...arrayOne, ...arrayTwo];
// console.log(allArrays);




//
// function sum(x, y, z) {
//     return x + y + z;
// }
// console.log(sum(2, 2, 2));




// function sum(x, y, z) {
//     return x + y + z;
// }
// const myNumbers = [1, 2, 3];
// console.log(sum(...myNumbers));




// let arrayOne = [1, 2, 3],
//     arrayTwo = [4, 5],
//     customArray = [1, 2, 3, ...arrayTwo, 6, 7];

// console.log(customArray);



// let arrayOne = [1, 2, 3];
// arrayTwo = arrayOne;

// arrayTwo.push(4);// rah heda el mastul 3amal push bel tnen
// console.log(arrayOne);
// console.log(arrayTwo);



//kif btsir azbat?

// let arrayOne = [1, 2, 3],
//     arrayTwo = [...arrayOne];// bi sabab he lah tentaba3 bas bel arraytwo

// arrayTwo.push(4);

// console.log(arrayOne);
// console.log(arrayTwo);


// let arrayOne = [1, 2, 3, 100, -10, 500];
// console.log(Math.min(...arrayOne));


// const circle = {
//     radius: 10
// }

// const ColoredCircle = {
//     ...circle,// bi fateta lal object
//     color: 'black',
// }
// console.log(ColoredCircle);




// const circle = {
//     raduis: 10
// };

// const clonedCircle = { ...circle };
// console.log(clonedCircle);


// const circle = {
//     radius: 10,
//     style: {
//         color: "blue"
//     }
// };

// const clonedCircle = {
//     ...circle
// }

// clonedCircle.style = "red";
// console.log(clonedCircle);


// merging Object using spread Opertors
// const circle = {
//     radius: 10,

// };

// const style = {
//     back: 'red',
// };
// const clonedCircle = {
//     ...circle,
//     ...style
// }

// console.log(clonedCircle);


// let arrayOne = ["hello", 2, 3],
//     arrayTwo = [4, 5];
// let arr = [...arrayOne]
// console.log(arr);
// console.log(...arrayOne);




// video8
//Default parameters

// Before ES6


// function showMyInfo(username, role, theme) {
//     username = username === undefined ? 'Default username' : username;
//     role = role === undefined ? 'Defalut role' : role;
//     theme = theme === undefined ? 'Defalut theme' : theme;
//     return `hello ${username}, Your role Is: ${role} , Website theme Is: ${theme}`;
// }

// console.log(showMyInfo());
// console.log(showMyInfo('osama'));
// console.log(showMyInfo('osama', "admin"));
// console.log(showMyInfo('osama', 'admin', 'black'));


/////////////////////////////////////////////////
// meth1 bel if else
//     username = username === undefined ? 'Default username' : username;
//     role = role === undefined ? 'Defalut role' : role;
//     theme = theme === undefined ? 'Defalut theme' : theme;
//////////////////////////////////////////////////////


/////////////////////////////////////////////////////
//meth2 bel if else
// esma truthy Falthy pattern // w hye tari2et kitebe lal if else
// username = username || 'Default User';
// role = role || 'Default Role';
// theme = theme || 'Default Theme';
//////////////////////////////////////////////////










// after Es6
//
// function showMyInfo(username = "Default User", role = "Deafult Role", theme = "Deafulte theme") {
//     return `hello ${username}, Your role Is: ${role} , Website theme Is: ${theme}`;
// }

// console.log(showMyInfo());
// console.log(showMyInfo('osama'));
// console.log(showMyInfo('osama', "admin"));
// console.log(showMyInfo('osama', 'admin', 'black'));



// video9
// Rest Parameter

// function showInfo(a, b, c, ...myParams) {
//     // lama nkun ma mna3ref 3adad el parameters yalle momken yenkatab
//     // mnesta3mnel Rest parameters (...a)
//     console.log('param a ', a);
//     console.log('param b ', b);
//     console.log('param c ', c);
//     console.log('Param myParams', myParams);
//     return `Console output Done`;



// }

// console.log(showInfo('One', 'two', 'three', 'four', 'five', 'six', 'seven'));



// example2

// function addAll(...myParams) {
//     let myNumber = 0;//decalre
//     for (const myParam of myParams) {
//         myNumber = myNumber + myParam;
//     }
//     return myNumber;//jaweb
// }

// console.log(addAll(1));
// console.log(addAll(1, 2, 3));
// console.log(addAll(1, 2, 10, 50, 100));




//////////////////////////////////////////////////
//syntax
//     for (const myParam of myParams) {
//         myNumber = myNumber + myParam;
//     }
///////////////////////////////////////////



////////////////////////////////////////////////
//     for (const myParam of myParams) myNumber += myParam;
///////////////////////////////////////////







// video10
//startWith , endsWith

// startsWith => string.startsWith(search String , position= 0)
// let x = 'video - learn how to learn';
// console.log(x.startsWith('video'));


// endsWith => string.endsWith(search String , End Position = string.length)
// let x = 'video - learn how to learn';
// console.log(x.endsWith('ow', 17));
// console.log('video - learn how'.length);




//////////////////////////////////////////////
// video11
// New StringMethos , Includes , Repeat

// includes => String.includes(Search String , Position = 0);

// let x = 'elzero web school';
// console.log(x.includes('eb', 8));

//repeats=> String.repeat(count)

// let x = 'ELzero Web School';
// console.log(x.repeat(4));



// video12
//Distructuring object part 1
//before
// var user = {
//     name: 'osama',
//     gender: 'Male',
//     age: 36,
//     city: 'cairo',
//     website: 'elzero'
// };

// var u = user.name,
//     g = user.gender,
//     a = user.age;

// console.log(`myName Is: ${u}, Iam ${g} ,my age Is: ${a}`);














// es6
//Destcructring after es6
// const user = {
//     name: 'osama',
//     gender: 'male',
//     age: 36,
//     city: 'cairo',
//     website: 'elzero',
//     theme: 'red'
// };

// const { name, gender, age, theme = 'default' } = user;
//or
// ({ name, gender, age, theme = 'default' } = user);


// console.log(`My name Is ${name} ,iam ${gender} , My age is: ${age}
// , my Theme color Is : ${theme}`);



//video 13
// Destructuring

//meth1
// const user = {
//     name: 'Osama',
//     gender: 'Male',
//     age: 35,
//     city: 'Cairo',
//     website: 'elzero',
//     theme: 'Default',
// };

// const { name: theName, gender: theGender, age: theAge, theme: theTheme = "Default" } = user;
// console.log(`myName Is: ${theName},
//  iam ${theGender} ,myage is : ${theAge}, my theme color is ${theTheme}
// `);


//////////////////////////////////
//meth2


// const user = {
//     name: 'Osama',
//     gender: 'Male',
//     age: 35,
//     city: 'Cairo',
//     website: 'elzero',
//     theme: 'Default',
//     langs: {
//         html: '70%',
//         css: '80%',
//         js: "10%"
//     }
// };

/////////////////////////////////////////
//before es6
// const { name, gender, langs } = user;
// console.log(`myName Is: ${name},iam a ${gender} my languages is ${langs.html}`);
////////////////////////////////////////////////////////



/////////////////////////////////////////////
//    after es6
//    const { name, gender, langs: { html, css, js } } = user; // nested
//      console.log(`${name},${gender}, ${html}`);
////////////////////////////////////////////


/////////////////////////////////////
//after es6
//    const { name, gender, langs: { html, css, python ='10%'} } = user;
//      console.log(`${name},${gender}, ${html} ${python}`);
///////////////////////////////////////////////


//////////////////////////////////////////////////////////
// after es6
// const { html, css, js } = user.langs;
// console.log(`${html} ${css} ${js}`);
//////////////////////////////////////////////////////////////







//video14
//skipping
// el destructuring bi 5allik testagne 3an el index
//  console.log(food[3]);  // btestagne 3an he el kitebe
//
// const food = ["burger", "pizza", "chicken"];

// const [a, b, c] = food;
// console.log(`${a} ${b} ${c}`);




// let one = "Default",
//     two = "Default",
//     three = "Default";

// const food = ["burger", "pizza", "chicken"];

// [one, two, three] = food;
// console.log(`${one} ${two} ${three}`);
////////////////////////////////////////////////////////


//skipping
// const food = ["bugerr", "pizza", "chicken", "meat", "rice"];
// const [one, , , four] = food;
// console.log(`${one} ${four}`);







//video15
// Destructuring array part 2
//


//meth1
// const food = ["burger", "pizza", "chicken", ["apple", "banana", "mango"]];

// const [one, two, three, [fr1, fr2, fr3]] = food;

// console.log(`${one} ${two} ${three} ${fr1} ${fr2} ${fr3}`);



// meth2
//sprading
// const food = ["burger", "pizza", "chicken", "apple", "banana", "mango"];

// const [one, two, three, ...otherFood] = food;

// console.log(`${one} ${two} ${three} ${otherFood }`);


//video 16
// Destructuring array old methods
//old way
// var book = "video",
//     video = "book";

//     //coppy first into stash
// var stash = book;// video
// // swapping variables
// book = video; //
// //get book value from stash
// video = stash;

// console.log(`book is ${book} and video is ${video}`);


//new way

// var book = "video",
//     video = "book";

// [book, video] = [video, book];

// console.log(`book is ${book} and video is ${video}`);



//video17
// const user = {
//     username: "osama",
//     city: "cairo",
//     skills: {
//         html: "80%",
//         css: '85%',
//         js: { one: "vueJs", two: "Reatjs", three: "angular" }
//     }
// };

// const { username, city, skills: { html, css, js: { one, two, three } } } = user;
// console.log(`${username} ${one} ${three}`);


//video18
// const user = {
//     username: "osama",
//     city: "cairo",
//     skills: {
//         html: "80%",
//         css: '85%',
//         js: ["vueJs", "Reatjs", "angular"]
//     }
// };
//before Destructuring
// function showmyInfo(user) {
//     console.log(`${user.username} i live ${user.city}`);
//     console.log(`${user.skills.html} ${user.skills.css}`);
//     console.log(`${user.skills.js[0]}`);
// }
// showmyInfo(user);


// after
// const { username, city, skills: { html, css, js: [one, two, three] } } = user;

// function showmyInfo(user) {
//     console.log(`${username} i live ${city}`);
//     console.log(`${html} ${css}`);
//     console.log(`${one}`);
// }
// showmyInfo(user);

//video 20
// Iterbale (set) (btemna3 takrar)

// let myArray = [1, 2, 3, 4, 4, 4, 5, 2];
// let myBooks = new Set(myArray);

// console.log(myArray);
// console.log(myBooks);
// console.log(...myBooks);
// console.log([...myBooks]);