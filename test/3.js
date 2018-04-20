/**
 * @function 设置默认值
 * @param   {String}                defaultSign     默认显示的内容
 * @param   {Function|!Function}    dependency      判断值 或者函数 如果没有显示值的时候 判断成功 返回的是 判断值
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


    if (typeof dependency === "function") {

        try {
            dependency = dependency();
        } catch (e) {
            return defaultSign
        }

    }

    return dependency ? showValue || dependency : defaultSign

}


