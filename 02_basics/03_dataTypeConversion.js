// In this we will learn how to convert a variable from one data type to another data type

let isLoggedIn = true

// convert from bool to Number data type
let numIsLoggedIn = Number(isLoggedIn) //Use the upper case while converting data type
console.table([numIsLoggedIn,typeof(numIsLoggedIn)])

// convert string to number
let name ="Aman"
let numName = Number(name)
console.log(numName);  //here Number conversion of String will print 'NaN'


// convert  Number to string
let number1=787
let strNum= String(number1)
console.log(strNum)
console.log(typeof(strNum));

// converting null to string
let var1=null
let var2= String(var1)
console.table([var2,typeof var2])

