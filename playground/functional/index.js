//Functional compositiion
var add10verbose = function(value) {
  return value + 10;
}

var mult5Verbose = function(value) {
  return value * 5;
}

//Less verbose

var add10 = (value) => value + 10;

var mult5 = (value) => value * 5;

// a function that adds 10 then multiplies by 5

var mult5AfterAdd10 = value => mult5(add10(value));
//functions will be evaluated  with BODMAS brackets
