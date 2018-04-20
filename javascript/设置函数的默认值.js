/**
 * Created by Agent47 on 2018/4/12
 * */
"use strict";

/**
 * @function 设置默认值
 * @param   {String}                defaultSign     默认显示的内容
 * @param   {*}                     dependency      判断值 或者函数 如果没有显示值的时候 判断成功 返回的是 判断值
 * @param   {*}                     [showValue]     显示值 如果判断值 为真 返回的值
 * @example ("defaultSign",false) => 返回 "defaultSign"
 * @example ("defaultSign",false,"content") => 返回 "defaultSign"
 * @example ("defaultSign",()=>可能报错的内容,"content") => 返回 "defaultSign"
 * @example ("defaultSign",()=>false,"content") => 返回 "defaultSign"
 * @example ("defaultSign",()=>true,"content") => 返回 "content"
 * @example ("defaultSign",()=>"content","content") => 返回 "content"
 * @example ("defaultSign","content") => 返回 "content"
 * */
function setDefault(defaultSign, dependency, showValue) {
    try {

        if (typeof dependency === "function") {

            dependency = dependency();
        }

        return dependency ? showValue || dependency : defaultSign

    } catch (e) {
        return defaultSign
    }

}


// * @example ("defaultSign",false) => 返回 "defaultSign"
// * @example ("defaultSign",false,"content") => 返回 "defaultSign"
// * @example ("defaultSign",()=>可能报错的内容,"content") => 返回 "defaultSign"
// * @example ("defaultSign",()=>false,"content") => 返回 "defaultSign"
// * @example ("defaultSign",()=>true,"content") => 返回 "content"
// * @example ("defaultSign",()=>"content","content") => 返回 "content"
// * @example ("defaultSign","content") => 返回 "content"

const {equal} = require('assert');


equal(setDefault("defaultSign", null), "defaultSign");
equal(setDefault("defaultSign", null, "content"), "defaultSign");
equal(setDefault("defaultSign", () => a.a, "content"), "defaultSign");
equal(setDefault("defaultSign", () => null, "content"), "defaultSign");
equal(setDefault("defaultSign", () => true, "content"), "content");
equal(setDefault("defaultSign", () => "content"), "content");