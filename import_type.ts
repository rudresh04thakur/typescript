import { ClassName } from './first';
import * as $ from './jquery'

//import { Component } from '@angular/core' //typescript

//var k = require('first'); //javascript 
class Person extends ClassName{
    getInfo(){
        console.log("Person Info");
    }

}
var p = new Person();
p.getInfo();
p.abc();