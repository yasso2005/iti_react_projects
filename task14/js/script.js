/* 1- array جديدة بنفس الطول 
2-find()
3- Array جديدة بالعناصر الي حققت الشرط
4- undifined
5-arrays
true or false :
1-false
2-true
3-true
4-true 
5- false
 complete:
1-foreach
2-filter()
3-find()
4-toUpperCase()
*/
// no.4
 const fruits = ["Apple","Banana","Orange"];
for (const fruit of fruits) {
    console.log(fruit);
}
for (let fruit in fruits) {
     console.log(fruits[fruit]);
}
fruits.forEach(( fruit,index ) => {console.log(`${index} -> ${ fruit}`);} );
//no.5
function sum(a,b){
    return a+b;
}
let sum1 =(a,b)=>a+b;

const user = {
    fullname:"Mostafa",
    age:25
};
const { fullname,age}=user;
console.log(`name: ${fullname},
 age: ${age}`);

   console.log(`hello ${fullname}`)

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arrs =[...arr1,...arr2]
console.log(arrs)
//no.6
const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];
const name= students.map(student => student.name);
console.log(name);
const grades= students.filter(student => student.degree >=60);
console.log(grades);
const student= students.find(student => student.degree >90);
console.log(student);
students.forEach(student => {
    console.log(student.name);
});