// Helper fn, takes in an index of a char and swap that char with the one next to it
function swap(str, idx) {

  let arr = str.split('')
  let temp = arr[idx];
  arr[idx] = arr[idx + 1];
  arr[idx + 1] = temp;
  return arr.join('');
}

function findAllPermutations(str) {

  if (str.length === 1) return [str]

  let letterCount = 0;
  let result = []

  while (letterCount < str.length) {
    let idx = 0;

    while (idx < str.length - 1) {
      str = swap(str, idx);
      result.push(str)
      idx++
    }

    letterCount++
  }

  return result
}

console.log(findAllPermutations('abcd'))


// console.log(swap('abc', 1))
// // ex. swap('abc', 0) should return 'bac'

// letter count0
// 'abc' idx = 0
// swap a with b => bac idx = 1
// swap a with c => bca idx = 2

// lettercount1
// idx = 0;
// swap b with c; => cba; idx = 1
// swap b with a => cab; idx = 2

// lettercount2
// idx = 0;
// swap c with a => acb; idx = 1
// swap c with b => abc; idx = 2 
