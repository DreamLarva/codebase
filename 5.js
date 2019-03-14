/**
 * Created by Agent47 on 2018/1/17
 * */
"use strict";

// Promise.resolve(1)
//     .then(function (data) {
//         return Promise.reject(false)
//     })
//
//     .then(()=>console.log("123123"))
//     .catch(console.log)


/**
 * @class
 */
function Requester() {}

/**
 * Send a request.
 * @param {abc} cb - The callback that handles the response.
 */
Requester.prototype.send = function(cb) {
    // code

};

new Requester(2);

/**
 * Enum for tri-state values.
 * @name abc
 * @readonly
 * @enum {number}
 */
var triState = {
    /** The true value */
    TRUE: 1,
    FALSE: -1,
    /** @type {boolean} */
    MAYBE: true
};
console.log(2)
