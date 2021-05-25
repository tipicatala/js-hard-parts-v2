/* CHALLENGE 2 */
function delayedGreet() {
  setTimeout(() => console.log('welcome'), 3000)
}
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */
function helloGoodbye() {
  console.log('hello')
  setTimeout(() => console.log('goodbye'), 2000)
}
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */
function brokenRecord() {
  setInterval(()=> console.log('hi again'), 1000)
}
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */
function limitedRepeat() {
  const id = setInterval(()=> console.log('hi for now'), 1000)
  setTimeout(() => clearInterval(id), 5000);
}
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */
function everyXsecsForYsecs(func, interval, duration) {
  const id = setInterval(func, interval)
  setTimeout(() => clearInterval(id), duration)
}

function theEnd() {
  console.log('This is the end!');
}
// everyXsecsForYsecs(theEnd, 2000, 5000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */
function delayCounter(target, wait) {
  let counter = 0
  function count() {
    if (target === counter) return counter
    setTimeout(() => console.log(count()), wait)
    return counter++
  }
  
  return count
}

const countLogger = delayCounter(3, 1000)
// countLogger();


/* CHALLENGE 8 */
function promised() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
	})
}
const createPromise = promised();
// createPromise.then(() => console.log('wait for it...')); 


/* CHALLENGE 10 */
const debounce = (callback, interval) => {
  let timerStart = new Date().getTime();
  let isFirstTime = true
  
  return () => {
    if (isFirstTime) {
      isFirstTime = false
      return callback()
    }
    
    const invocationTime = new Date().getTime();    
    if (invocationTime - timerStart > interval) {
      timerStart = new Date().getTime();
      return callback();
    }
    timerStart = new Date().getTime();
  };
};

// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'