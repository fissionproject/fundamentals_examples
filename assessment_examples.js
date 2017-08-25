//foo function
function foo (arr, num) {
  var findLength = arr.length;
  if (findLength === num) {
    return true
  }
}
foo([0,1,4], 3);



//array function
function iterate(arr) {

var arr = [1,2,3,4];

  for (var i=0; i < arr.length; i++) {
    if (i < 1) {
      console.log("first - ");
    }
    else if (i <= 2) {
      console.log("not first or last - ");
    }
    else if (i = 3){
      console.log("last");
    }
  }
}

iterate(arr);

//for loop counter
function count () {
for (i=15; i >= 0; i--) {
  console.log(i);
}
}
count();

// inner outer functions breakdown
function outer(input) {
  // 9 gets passed into this function
  // var a = 9
  var a = input;

  function inner(multiplier) {
    console.log(a * multiplier);
  }
  //return 9 * multiplier
  return inner;
}

//9 * 10
var firstResult = outer(9);
firstResult(10);


//object retrieval
var someObject = {b : "some test",
                  a : "this is A"};
console.log(someObject.a);
