'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

 // Invoke each function in the tasks array
 // Define a callback as the first parameter of each function
// Each callback takes in a 'result' parameter
// Create an array with each result in order
// Pass in that array as the 1st argument of the callback parameter


var asyncMap = function(tasks, callback) {
    var results = [];

    var recursiveCaller = (n) => {
        if (tasks[n] !== undefined) {
            tasks[n](result => {
                results.push(result);
                recursiveCaller(n+1);
            });
        } else {
            callback(results);
        }
    }

    recursiveCaller(0);
};

//  asyncMap([
//   function(cb){
//     setTimeout(function(){
//       cb('one');
//     }, 200);
//   },
//   function(cb){
//     setTimeout(function(){
//       cb('two');
//     }, 100);
//   }
//  ],
//   function(results){
//     // the results array will equal ['one','two'] even though
//     // the second function had a shorter timeout.
//     console.log(results); // ['one', 'two']
//  });