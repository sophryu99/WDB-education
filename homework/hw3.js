
/** 
 * Q1: Function This
 * Implement the following function to take an iterable (essentially a list of things) and
 * return the item in the list corresponding to the maximum value in list after applying key to each time.
*/
function max(iterable, key) {
    var maximum = -1000000
    for (var i in iterable) {
      var t = key(iterable[i]);
      if (t >= maximum) {
        maximum = iterable[i];
      }
    }
    return maximum;
}

// Functions for Q1
const normal = (n) => n
const square = (n) => n**2

/**
 * Q2: Flip It and Reverse It
Based on the previous question, in one line, write an anonymous function which, when passed as key to max would cause max to return the smallest value in the list.
 */
const reverser = (n) => -n

/**
 * Q4: Objects Gworl
 */

function changer(object, key, value) {
    var prev = object[key];
    if (Array.isArray(prev)) {
      // If the current value of the item at key is a list, append value to the list
      object[key].push(value);
    } else if (typeof prev == 'object' && prev != null) {
      object[key][key] = value;
    } else {
      object[key] = value;
    }
    console.log(object)
    return null;
}

// Q5: Promises Promises
async function promise_me(truthy) {
  const a = new Promise((resolve, reject) => {
      console.log(1)
  })
  console.log(2)
  console.log(3)
  console.log(4)
  const five = a.then(console.log(5))
  console.log(five)
  return five
}


// Test cases
console.log(max([1, 2, 3, 6, 4, 13], normal))       // Q1
console.log(max([1, 2, 3, 6, 4, 13], square))       // Q1
console.log(max([1, 2, 3, 6, 4, 13], reverser))     // Q2
console.log(changer({}, 3, 2))                      // Q4
console.log(promise_me())                           // Q5