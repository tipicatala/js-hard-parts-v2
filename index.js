//returnig function
function createFunction () {
  function multiply (num) {
    return num + 2
  }

  return multiply
}

const generated = createFunction()
// console.log(generated(3))

//memorization
function outer(){
  const outerMemory = []

  function addObj(num){
    outerMemory.push({ val: num })
    console.log(outerMemory)
  }

  console.log(outerMemory)
  return addObj
}

const newFunc = outer()
newFunc(3)
newFunc(4)
outer()