/**
 * Created by Agent47 on 2018/4/19
 * */
"use strict";

/**
 *  循环一次
 * */
function divideArray(array, divisor) {
    const len = array.length;
    if (len < divisor) {
        throw new Error("待分组的数组 length 不能小于除数")
    }

    let mod = len % divisor;
    if (mod === 0) {
        // 刚好整除
        const piece = len / divisor;
        return array.reduce(function (pre, cur) {
            const lastArray = pre[pre.length - 1];
            lastArray.length < piece ?
                lastArray.push(cur) :
                pre.push([cur]);

            return pre
        }, [[]])
    } else {
        // 不能整除
        // 就将模分散到每个 结果中
        const piece = (len - mod) / divisor;
        return array.reduce(function (pre, cur) {
            const lastArray = pre[pre.length - 1];
            lastArray.length < piece ?
                lastArray.push(cur) :
                lastArray.length === piece && mod !== 0 ?
                    lastArray.push(cur) && mod-- :
                    pre.push([cur]);

            return pre
        }, [[]])
    }

}

function divideArray2(array, divisor) {
    const len = array.length;
    if (len < divisor) {
        throw new Error("待分组的数组 length 不能小于除数")
    }
    let mod = len % divisor;
    if (mod === 0) {
        // 刚好整除
        const piece = len / divisor,
            result = [];
        for (let i = 0; i < piece; i++) {

            result.push(array.slice(
                i * piece,
                (i + 1) * piece
            ))
        }
        return result

    }

}


const test = [...new Array(100)];

console.time("test")
console.log(divideArray2(test, 2))
console.timeEnd("test")