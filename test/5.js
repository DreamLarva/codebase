/**
 * Created by Agent47 on 2018/5/3
 * */
"use strict";

class A{
    method1(){
        console.log("A")
    }
}

class B{
    method2(){
        console.log("B")
    }
}


class C extends A,B{
    constructor(){
        super()
    }
}

console.log(new C());