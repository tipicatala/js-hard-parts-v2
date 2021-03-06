// CHALLENGE 1
function createFunction() {
  function printHello() {
    console.log('hello')
  }
  
  return printHello
}

const function1 = createFunction();
// function1(); // => 'hello'

// CHALLENGE 2
function createFunctionPrinter(input) {
  function newFunc () { console.log(input) }
  return newFunc
}

const printSample = createFunctionPrinter('sample');
// printSample(); // => 'sample'
const printHello = createFunctionPrinter('hello');
// printHello(); // => 'hello'

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  const addBy = x;
  
  function adding(cur){
    return cur + addBy;
  }
  
  return adding;
}

const addByTwo = addByX(2);
// console.log(addByTwo(3))


// CHALLENGE 4
function once(func) {
  let count = 0
  let firstVal = 0
  
  function newF(val) {
    count++;
    
    if (count === 1) {
      firstVal = func(val)
    }
    
    return firstVal
  }
  
  return newF
}

const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(times, func) {
  let count = 0

  function newFunc() {
    count++;
    
    if (count === times) return func()
  }
  
  return newFunc
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 7
function rollCall(names) {
  let count = 0
  
  function func() {
    console.log(names[count] || 'Everyone accounted for')
    count++
  }
  
  return func
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
  const obj = {}
  
  function funcWithPassword(arg){
    if (arg !== magicWord){
      obj[arg]= func(arg)
      return func(arg)
    } return obj
  }
  
  return funcWithPassword
}

const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 19
function blackjack(array) {
  let count = 0

  function dealer(num1, num2) {
    let sum = num1 + num2
    let isBust = false
    let isFirstTime = true
    
    function player() {
      if (count === 0 || isFirstTime){
        isFirstTime = false
        count++
        return sum
      }
       let result = sum + array[count - 1]
       if (result <= 21) {
          count++
         	sum = result
          return result
        }
      
     	 if (!isBust) {
        // count++
        isBust = true
        return 'bust'
      } return 'you are done!' 
      // sum = sum + array[count - 2] 
    }
    
    return player
  }
  
  return dealer
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!

