/// <reference path="typings/node/node.d.ts" />
import fs = require('fs');
import path = require('path');
/**
 * user
 */
class user {
    username: string;
    userage: number;
    constructor(uname: string, uage: number) {
        this.username = uname;
        this.userage = uage;
        console.log(this.username);
        console.log(this.userage);
    }
    /**
     * age
     */
    public age(): void {
        var lock = (f) => { return 1 + f };
        console.log(lock(this.userage));
    }
}
var u = new user('hello', 40);
u.age();
let isDone: boolean = true;
console.log(isDone);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${ age + 1} years old next month.`