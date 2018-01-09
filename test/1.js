
// var start = Date.now();
// var obj = {};
// for(var i = 0; i < 1000000; i++) {
//     var time = Date.now();
//     obj[i+"_"+time] = time;
// }
// console.log(Date.now()-start)


let start = console.time();
let obj = new Map();
for (var i = 0; i< 1000000; i++) {
    var time = Date.now();
    obj.set(time,time);
}
console.timeEnd();