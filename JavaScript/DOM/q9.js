// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Synchronous statements execute first.
// Promise.then() schedules a microtask.
// setTimeout() schedules a macrotask.
// After synchronous execution, microtasks run before macrotasks.


