// const fs = require('fs');
// const path = require("path");
// const filePath = path.join(__dirname, "users.json");

/**
 * Read File Synchronously : Blocking Operation
 */
// console.log('Read File Start');

// try {
//   const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
//   console.log(data);
// } catch (err) {
//   console.log('Error reading file:', err.message);
// }

// try {
//   const data2 = fs.readFileSync(filePath);
//   console.log(data2);
// } catch (err) {
//   console.log('Error reading file:', err.message);
// }

// console.log('Read File End');

// ========================================================================
// ========================================================================
// ========================================================================

/**
 * Read File Asynchronously : Non-Blocking Operation
 * Why Read File End appears before the file content?
 * Because fs.readFile() is asynchronous — it does not block execution. It starts reading the file in the background and immediately moves on to print Read File End. Once the file is done reading, the callback runs.
 */

// console.log('Read File Start');

// fs.readFile(filePath, (err, data) => {
//   if (err) {
//     console.log('Error reading file:', err.message);
//     return;
//   }
//   console.log(data.toString());
// });

// fs.readFile(filePath, 'utf-8', (err, data) => {
//   if (err) {
//     console.log('Error reading file:', err.message);
//     return;
//   }
//   console.log('File content:\n', data);
// });

// console.log('Read File End');

// ========================================================================
// ========================================================================
// ========================================================================

/**
 * Promises API on the fs module
 * Parallel async logic
 */

// const fs = require('fs').promises;
// const path = require("path");
// const filePath = path.join(__dirname, "users.json");

// console.log('Read File Start');

// fs.readFile(filePath, 'utf-8')
//   .then(data => {
//     console.log('File Content: \n', data);
//   }).catch(err => {
//     console.log('Error reading file:', err.message);
//   });

// console.log('Read File End');

// ========================================================================
// ========================================================================
// ========================================================================

/**
 * Async/Await on the fs module
 */

const fs = require('fs').promises;
const path = require("path");
const filePath = path.join(__dirname, "users.json");

// console.log('Read File Start');
// async function readFileSequentially() {
//   try {
//     const data = await fs.readFile(filePath, 'utf8');
//     console.log('File content:\n', data);
//   } catch (err) {
//     console.log('Error reading file:', err.message);
//   }
// }
// readFileSequentially();
// console.log('Read File End');


// Sequential-style async logic
async function readFileSequentiallyWithAsyncAwait() {
  console.log('Read File Start');
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File content:\n', data);
    console.log('Read File End');
  } catch (err) {
    console.log('Error reading file:', err.message);
  }
}
readFileSequentiallyWithAsyncAwait();
