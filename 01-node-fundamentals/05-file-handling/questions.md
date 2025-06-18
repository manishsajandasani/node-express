# readFile is also async but moved to next line immediately and using promises or async/await waits for the response. What happens behind the scenes if both are running in the background?

# Node.js’s asynchronous execution model, especially the event loop and microtask vs macrotask queues

# If fs.readFile (callback) and fs.promises.readFile (Promise or await) both run in the background, why does await feel like it waits, but the callback version just skips to the next line?

# fs.readFile() — callback-based

# fs.promises.readFile() — Promise-based

# await — syntactic sugar over Promises

# Behind the Scenes — Event Loop Order (simplified): Call Stack, Microtask Queue, Macrotask Queue

# Yes, await holds execution within the async function. If you put console.log('Read File End') outside, it won't wait, because Promises are non-blocking.

# .then() vs. async/await 
| Style         | Code Waits for File?  | Output in Order    | Use Case                    |
|---------------|-----------------------|--------------------|------------------------------|
| `.then()`     | ❌ No                 | ❌ No             | Parallel async logic         |
| `async/await` | ✅ Inside async fn    | ✅ Yes (cleaner)  | Sequential-style async logic |
