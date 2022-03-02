
/** 
 * Q1: Function This
 * Implement the following function to take an iterable (essentially a list of things) and
 * return the item in the list corresponding to the maximum value in list after applying key to each time.
*/
function max(iterable, key) {
    var maximum = iterable[0];
    for (var i in iterable) {
      var t = key(iterable[i]);
      if (t >= maximum) {
        maximum = iterable[i];
      }
    }
    return iterable;
}

/**
 * Q2: Flip It and Reverse It
Based on the previous question, in one line, write an anonymous function which, when passed as key to max would cause max to return the smallest value in the list.
 */

console.log(max([1,2,3,4,5]))