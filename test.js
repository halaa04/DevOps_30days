const add = require('./math.js');

const result = add(2, 2);

if (result === 4) {
  console.log("Test passed!");
} else {
  console.log("Test failed! Expected 4 but got " + result);
  process.exit(1);
}
