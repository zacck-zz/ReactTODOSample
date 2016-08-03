function add(a,b) {
  return a+b;
}

console.log(add(3,1));

//call a function with an array
var toAdd = [9,5];
//spread operator comes out before an array and
//it spreads out its values as individual args
console.log(add(...toAdd));


var groupA = ['jen', 'cory'];
var groupB = ['Vikram'];

var final = [...groupB, 3, ...groupA];

console.log(final);


//Challenge
var person = ['Andrew', 25];
var personTwo  = ['Zacck', 26];

//HI Andrew you are 25
function greeting(name, age) {
  return 'Hi ' + name+' you are '+age;
}

console.log(greeting(...person));
console.log(greeting(...personTwo));

var names = ['Mike', 'Ben'];

var finale = ['Zacck',...names];

finale.forEach((value) => {
  console.log('Hi '+value);
});
