// Named Exports - Exporting Inline
// export const add = (a, b) => a + b;
// export const sub = (a, b) => a - b;

// =====================================================================
// =====================================================================

// Named Exports - Exporting at the End
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// export { add, sub };

// =====================================================================
// =====================================================================

// Aliasing Named Exports
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// export { add as addition, sub as subtraction };

// =====================================================================
// =====================================================================

// Default Export #1
// export default function multiply(a, b) {
//   return a * b;
// }

// =====================================================================
// =====================================================================

// Default Export #2
// function multiply(a, b) {
//   return a * b;
// }
// export default multiply;

// =====================================================================
// =====================================================================

// Default + Named Export
export const divide = (a, b) => a / b;
export default function multiply(a, b) {
  return a * b;
}

// =====================================================================
// =====================================================================

// Now Explore Yourself
/**
 * 1. Re-exporting from another module
 * Re-export all named exports, Re-export specific exports, Re-export and rename, Re-export default export
 
 * 2. Aggregating multiple modules
 
 * 3. Exporting objects inline

 * 4. Anonymous default export of values
 */ 