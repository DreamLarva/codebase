/**
 * @type {string} name A name to use.
 */
const name = "Joe";

// Union type:
/**
 * @type {number | string} value The value of the product.
 */
const price = 12; // or '12'

// Intersection type:
/**
 * @type {{name: string}, {age: number}}
 */
const person = {
    name: "Joe",
    age: 32
};

{
    /**
     * A person object with a name and age.
     * @typedef {Object<string, any>} Person
     * @property {string} name The name of the person.
     * @property {number} age The age of the person.
     */
    /**
     * @type {Person} person
     */
    const person = {
        name: "Joe",
        age: 32
    };
}
{
    /**
     * A person object with name, age and sayName method.
     * @typedef {Object} Person
     * @property {string} name The person's name.
     * @property {number} age The person's age.
     * @property {Function} sayName A function that alerts the person's name.
     */
    const person = {
        name: "Joe",
        age: 32,
        sayName() {
            alert(this.name);
        }
    };
}
{
    /**
     * Class to create a person object.
     */
    class Person {
        /**
         * @constructor
         * @param {string} name
         * @param {number} age
         * */
        constructor({name, age}) {
            /**
             * @property {string} name The person's name.
             */
            this.name = name;
            /**
             * @property {number} age The person's name.
             */
            this.age = age;
            /**
             * @property {Function} sayName A method to annouce the person's name.
             * @returns void
             */
            this.sayName = () => alert(this.name);
        }
    }

    const guy = new Person({
        name: "Sam",
        age: 32
    });
    guy.sayName();
}
{
    /**
     * @typedef {Object} Options The Options to use in the function createUser.
     * @property {string} firstName The user's first name.
     * @property {string} lastName The user's last name.
     * @property {number} [age] The user's age.
     */
    /**
     * @type {Options} opts
     */
    const opts = {firstName: "Joe", lastName: "Bodoni", age: 34};
}
{
    // Add custom property to node of type Element:
    const btn = document.createElement("button");
    btn.nodeValue = "A Button";
    // Will generate error that property does not exist on type Node:
    btn.isButton = true;
    // Escape expando property:
    btn["isButton"] = true;
}
{
    // This gets resolved to type `any`.
    /**
     * As Object.
     * @type {Object} obj1
     */
    // This designates a empty object literal.
    // Adding properties will generate a type error.
    /**
     * As object literal:
     * @type {{}} obj2
     */
    // Define properties in object literal
    /**
     * Object literal with properties:
     * @type {{name: string, age: number, job: string}} employee
     */
    // Define generic object.
    // This can have any number of properties of type any.
    /**
     * @type {Object<string, any>} person
     */
}
// Define generic object.
// This can have any number of properties of type any.
/**
 * @typedef {Object<string, any>} Member
 * @property {string} name The members's name.
 * @property {number} [age] The members's age.
 * @property {string} [job] The member's job.
 */
/**
 * @type {Member} Jack
 */
const Jack = {
    age: 28
}

{
    /**
     * The complete Triforce, or one or more components of the Triforce.
     * @typedef {Object} WishGranter~Triforce
     * @property {boolean} hasCourage - Indicates whether the Courage component is present.
     * @property {boolean} hasPower - Indicates whether the Power component is present.
     * @property {boolean} hasWisdom - Indicates whether the Wisdom component is present.
     */
    /**
     * A class for granting wishes, powered by the Triforce.
     * @class
     * @param {...WishGranter~Triforce} triforce - One to three {@link WishGranter~Triforce} objects
     * containing all three components of the Triforce.
     */
    function WishGranter(...triforce) {

    }
}
{
    // Generic types may also be used
    /**
     * @template T
     * @param {T} param - A generic parameter that flows through to the return type
     * @return {T}
     */
    function genericFnc(param) {
        return param
    }

    /**
     * @function
     * @name bb
     * @template T
     * @param {T} param - A generic parameter that flows through to the return type
     * @return {T[]}
     * */
    function bb(param){
        return [param,param]
    }

    const c = bb({a:1,b:3})

}
{
    // Create a button element.
    // Type will be Node.
    const btn = document.createElement('button')
    // Because type is Node, we cannot call setAttribute,
    // since this is on the Element type.
    // Performing a type cast from Node to Element fixes this:
    /** @type {Element} */(btn).setAttribute('disabled', true)
}

{
    /**
     * Props define attributes on a virtual node.
     * @typedef {Object.<string, any> | {}} Props
     * @property {Children} Props.children
     */
    /**
     * The vnode children of a virtual node.
     * @typedef {VNode[]} Children
     */
    /**
     * Define a custom type for virtual nodes:
     * @typedef {string | number | Function} Type
     * @typedef {Object.<string, any>} VNode
     * @property {Type} VNode.type
     * @property {Props} VNode.props
     * @property {Children} VNode.children
     * @property {number} [VNode.key]
     */

    /**
     * @type {Children} abc
     * */
    const abc = [{type:1,key:1}];
}
