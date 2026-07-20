var response = "HELLO";
window.alert(response);
// it shows A message on website page
console.log(response);
// it shows on console itself

var user = { name: "alice", age: 30 };
console.log(`user:${user.name} age: ${user.age}`);
//`` best for  concatenation called"template literals"
var username = "viola";
var age = 20;
console.log("username:" + username + " " + "age:" + age);
// traditonal concatenation
console.log("hello!,\n welcome");
console.log("hello!,\t welcome");///t creates a space 
console.log(`hello!,
     welcome`);
// unlike traditional  /n and /t  aren't needed  with template literals


// ways to write important comments
/*
      * Important Comment
    ! Warning Comment (wrong input)
    ?  asking questions 
    TODO: reminder to add something to code 
 */
// *javascript is case sensitive

// data types:
//* typeof used to return the data type of input

// primitive data types
var firstname = "yasmine"; //string
var myage = 20; //number
var isgraduated = false; // boolean
var jobsalary = null; //null
var jobtitle = undefined; //undefined
var networth = 9999999999999999; //bigint
//non primitive data types
var user = {
  fullname: "yasmine abdelfafize",
  age: 20,
  salary: 30000,
  gender: "female",
  job: "developer",
  faculty: {
    record: 4.0,
    major: {
      majorname: "cs",
    },
  },
}; // object
function getavg(num1, num2) {
  // declartion function  in hoisting it gets pushed up to the top of the page  when files are getting rendered
  var result = (num1 + num2) / 2;
  console.log(result);
}
getavg(10, 20);
// console.log (result);  won't print anything cause it is undefined beyond the function scope
var getsum = function (num1, num2) {
  // expression function
  // expression function don't get pushed to the top of the page like declartion function in hoisting process
  var sum = num1 + num2;
  return sum;
};
console.log(getsum(2, 3));
(function () {
  // self invoked function
  console.log(`hello`);
})();
(function () {
  // self invoked nested function
  function getsum(num1, num2) {
    var sum = num1 + num2;
    return sum;
  }
  console.log(getsum(1, 0));
})();
// functions

var names = ["viola", "layla", "yasmine"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]); // arrays

//*loops
for (var i = 0; i <= 3; i++) {
    console.log(`${i}`);
   console.log(`hello!`);
}
// !warning (for(;;) website will crash )
// !warning (for(var i=0;i<=3;) infinity loop website crash)
// ! warning (for (var i=0;;i++))
var i = 2;
do {
   console.log(`${i}`);// do while
   i++;
} while (i <= 6);
 var i =0;
  while(i<=2)// while loop
  {
     console.log(`${i}`); 
     i++
  }
//! warning (  it is ${i} not $[i])
// some variable calculations 
   var num1=2;
   var num2=3;
   var result = num1+num2;
   var  sqrtvalue =Math.sqrt(result); // calculates square root the number  wont show the value of the square root unlees stord in a different variable
  console.log(sqrtvalue);

   var num = "10";
   var numm="1.5";
   var realnum= parseInt(num); // change the numbers inserted as strings to numbers
   var realnumm=parseFloat(numm);// change to float
   console.log (realnum);
   console.log(realnumm);

   // text:
    var text ="life is good";
    console.log (text.length); // *shows length of string including any spacing
    console.log ( text.toUpperCase());
    console.log (text.indexOf("good"));// shows position where the first letter start
    console.log(text.charAt(6)); // shows the letter of index""
    console.log(text.slice(4,7));
     
    // arithmetic operators 
    /*
    + addition 
    - subtraction
   "*" multiplication 
    / division
    % modulus 
    ++ increment 
    -- decrement */

     // comparoison operators 
     /*
     < less than 
     > greater than 
     => greater or equal
     <= smaller or equal 
     =  assign value
     == non strict  checking values not datatype
     === strict checking value and datatype
     ! warning != non strict non equal 
    ! warning !== strict non equal  */

    /*
    logical operators 
     and return the first false value
     or return the first true value 
     not negation of value */
    //! nan = not a number 
     
    //* ternary operator
     var op= true;
     var res =op? " if true": "if false";
     console.log( res);

     // if condition :
     var salary =30000;
      if (salary > 20000) { // control flow 
        console.log(`rich`);
       } else {
        console.log(`poor`);}

         //* windows.prompt () used to  add input while runnin website 






