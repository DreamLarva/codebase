const fs = require('fs');


// thunkify的回调流程
/*
 const readFile = thunkify(fs.readFile);
 const gen = function*() {
 var r1 = yield readFile('./test/test1.txt');
 console.log(r1.toString());
 var r2 = yield readFile('./test/test2.txt');
 console.log(r2.toString())
 };
var g = gen();
var r1 = g.next();
r1.value(function(err,data){ // r1 的回调
  if(err)throw err;
  var r2 = g.next(data);
  r2.value(function(err,data){ // r2 的回调
    if(err) throw err;
    g.next(data)
  })
});*/

// 使用thunk的自动流程管理
/*
 const gen = function*() {
 var r1 = yield readFile('./test/test1.txt');
 console.log(r1.toString());
 var r2 = yield readFile('./test/test2.txt');
 console.log(r2.toString())
 };
function run(fn){
  var gen = fn();

  function next(err,data){
    var result = gen.next(data);
    if(result.done) return;
    result.value(next)
  }
  next()
}
run(gen);*/

// 使用Promise 流程
/*{
  var readFile = function(fileName){
    return new Promise(function(resolve,reject){
      fs.readFile(fileName,function(err,data){
        if(err) return reject(err);
        resolve(data)
      })
    })
  };
  const gen = function*() {
    var r1 = yield readFile('./test/test1.txt');
    console.log(r1.toString());
    var r2 = yield readFile('./test/test2.txt');
    console.log(r2.toString())
  };
  // 手动流程
  // var g = gen();
  // g.next().value.then(function(data){
  //   g.next(data).value.then(function(data){
  //     g.next(data)
  //   })
  // });

  // 自动流程
  function run(){
    var g = gen();
    function next(data){
      var result = g.next(data);
      if(result.done) return;
      result.value.then(function(data){
        next(data)
      })
    }
    next(gen)
  }
  run()

}*/

/**
 *  使用co 流程
 *  参看 https://github.com/tj/co 库
 *  co模块自动执行 generator函数
 *  有两种执行机制可以使用
 *  1.回调函数 将一部操作包装成 Thunk函数 在回调函数中交回执行权
 *  2.Promise对象 将一部操作包装成 Promise对象用then方法交回执行权
 *
 *  co库会先将 整个generator函数作为参数 返回一个Promise对象(可以捕获错误 也能过获取最后一个return的内容)
 * */



/**
 * async 函数
 * 是generator函数的语法糖
 * async对 Generator函数的改进
 * 1.内置执行器. Generator的执行必须靠执行器,所以才有了co模块,而async函数自带执行器
 * 2.代码执行后 使用() 自动执行 最后输出结果 不用再调用next
 * 3.更好的语义. async 和await 比起 * 和 yield 语义更加清晰
 * 4.更广的适用性. co木块预定,yield命令后只能是 Thunk函数或者是Promise 对象,而async函数的await 命令后面可以是Promise对象,这比Generator函数返回值是遍历器更加方便
 * 进一步说async函数完全可以看做是由多个异步操作包装成的一个Promise对象 而await命令就是内部then的语法糖
 * */
/*{
  async function fn1() {
    // ...
  }

  // 等同于
  function fn2(args) {
    return spawn(function*() { // 执行器
      try {
        var r1 = yield readFile('./test/test1.txt');
        console.log(r1.toString());
        var r2 = yield new Promise((resolve) => {
          a // 抛出错误
          setTimeout(() => resolve("222", 1500))
        });
        console.log(r2.toString())
      }catch(e){
        console.log(e) // 捕获错误
      }
    })
  }
  fn2();

  function readFile(fileName) {
    return new Promise(function (resolve, reject) {
      fs.readFile(fileName, function (err, data) {
        if (err) return reject(err);
        resolve(data)
      })
    })
  };
  function spawn(genF){
    return new Promise(function(resolve,reject){
      var gen = genF();
      function step(nextF) {
        try {
          var next = nextF()
        } catch (e) {
          return reject(e)
        }
        if (next.done) {
          return resolve(next.value)
        }
        Promise.resolve(next.value).then(function (v) {
          step(function () {
            return gen.next(v)
          })
        }, function (e) {
          step(function () {
            return gen.throw(e) // 对generator函数抛出错误
          })
        })
      }
      step(function(){return gen.next(undefined)})
    })
  }

}*/

/*
{
  function timeout(ms) {
    return new Promise(resolve => setTimeout(function () {
      console.log(`过了${ms}毫秒`);
      resolve()
    }, ms))
  }

  async function asyncPrint(value, time) {
    await timeout(time);
    await timeout(time);
    console.log(value)
  }

  console.log("start");
  asyncPrint('hello world', 2000)
}
*/

/**
 *  注意点
 * await命令后面的Promise对象,运行结果可能是 Rejected,所以最好把await命令放在 try...catch中
 * */

/*{
  async function myFunction(){
    try{
      await someAsyncFun()
    }catch(e){
      console.log(err)
    }
  }
  // 或者
  async function myFunction() {
    await someAsyncFun().catch(function(error){
      console.log(error)
    })
  }

}*/

/**
 * async函数不能作为 非async函数的回调函数(例如使用在 .forEach .map 中)
 * 应该使用 for 循环继发执行(一个完成户执行另一个)
 * 或者 是 使用Promise.all() 并发执行(一起开始执行 知道所有的都执行完毕)
 * */
/*{
  async function dbFuc(db) {
    let docs = [{}, {}, {}];
    docs.forEach(async function (doc) {
      await db.post(doc)
    })
  }

  // dbFuc(console.log) // 报错 await 不能用在普通函数中

  // 继发执行
  async function dbFuc1(db) {
    let docs = [{a: 1}, {b: 2}, {c: 3}];
    for (let doc of docs) {
      await db(doc)
    }
  }

  dbFuc1(console.log)
}*/

// 并发执行 1
/*{
  async function dbFuc2(db) {
    let docs = [{a: 1}, {b: 2}, {c: 3}];
    let promises = docs.map((doc) => db(doc));
    let results = await Promise.all(promises);
    console.log(results)
  }

  dbFuc2(function (doc) {
    let time = Math.random() * 2000;
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log(`耗时${time}ms`);
        resolve(doc)
      }, time)
    })
  })
}*/

// 并发执行2
{
  async function dbFuc2(db) {
    let docs = [{a: 1}, {b: 2}, {c: 3}];
    let promises = docs.map((doc) => db(doc));
    let results = [];
    for(let promise of promises){
      results.push(await promise) // push 并不会因为await 延迟
      // 在都被推入后 要等最慢的 那个await 完成后才能向下执行
    }
    console.log(results)
  }

  dbFuc2(function (doc) {
    let time = Math.random() * 2000;
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log(`耗时${time}ms`);
        resolve(doc)
      }, time)
    })
  })
}















function thunkify(fn) {
  return function () {
    var args = new Array(arguments.length);
    var ctx = this;

    for (var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function (done) {
      var called;

      args.push(function () {
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
}

function isPromise(obj) {
  return !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    ((obj.constructor && obj.constructor.name === 'Promise') || typeof obj.then === 'function')
}