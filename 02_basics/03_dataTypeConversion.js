// In this we will learn how to convert a variable from one data type to another data type

let isLoggedIn = true

// convert from bool to Number data type
let numIsLoggedIn = Number(isLoggedIn) //Use the upper case while converting data type
// console.table([numIsLoggedIn,typeof(numIsLoggedIn)])

// convert string to number
let name ="Aman"
let numName = Number(name)
// console.log(numName);  //here Number conversion of String will print 'NaN'


// convert  Number to string
let number1=787
let strNum= String(number1)
// console.log(strNum)
// console.log(typeof(strNum));

// converting null to string
let var1=null
let var2= String(var1)
// console.table([var2,typeof var2])

// ***********Operations********************

let value3=3
let negValue = -value3
console.log(negValue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(4%2);
*/
let gameCounter=100
gameCounter+=1
console.log(gameCounter);

// check in log
console.log(gameCounter++);




