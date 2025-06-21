const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, 'logs.txt');

// Synchronous
fs.writeFileSync(filePath, "Hey there!! How are you?");

// Asynchronous
fs.writeFile(filePath, "Hey there!! I am Manish.", (err) => {
  if (err) {
    console.log('Error while writing to file asynchronously:', err);
  }
  if (!err) {
    console.log("Asynchronous writing file operation - Success");
  }
});

// Asynchronous with Promises (then/catch)
fsPromises.writeFile(filePath, "Udi Baba!!")
  .then()
  .catch((err) => {
    console.log(err);
  });

// Asynchronous with Promises (Async/Await) [IIFE Version]
(
  async function () {
    try {
      console.log('Write - Async/Await - Start');
      await fsPromises.writeFile(filePath, "Jhurmurri Natak Wali!");
      console.log('Write - Async/Await - End');
    } catch (err) {
      console.error('Error:', err);
    }
  }
)();