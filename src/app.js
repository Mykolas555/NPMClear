//objektas ir i tam objektui priskiriam jo info
/*
function Person (name,email,role){
    this.name = name;
    this.email = email;
    this.role=role;
//    this.greeting = function(){
//        alert('Hi im' + this.name + '.')
    }


const userOne = new Person ('jack', 'jack@gmail.com', 'admin');

console.log(userOne)

/////////////////////////////////////////////////////////////////////////////

// kitas budas kaip galima taip padaryti
/*
const userOne = new Object();
userOne.name = 'Jonas';
userOne.syHi = function (){
    console.log(this.name)
};
console.log(userOne);
userOne.syHi();
*/

/////////////////////////////////////////////////////////////////////////

//prototipai
/*
Person.prototype.greeting= function(){
    alert('Hi im' + this.name + '.')
}
*/

//pasibaigt namie issivest User
/*
class User{ //object constructor
    constructor(name, email, role, departament){
        this.name = name;
        this.email = email;
    }
    setRole(role){ //setter
        this.role = role;
    }
    setDepartament(departament){
        this.departament = departament;
    }
    getUserProfile(){ //getter
        return[
            this.name,
            this.email
        ]
    }
    getFullUserData(){  //getter
        return[
            this.name,
            this.email,
            this.role,
            this.departament
        ]
    }
    displayUI(userData){
        //display user data in html list
        const bodyElement = document.querySelector('body');
        const displayUL = document.createElement('ul');
        for (User of userData){
            
            const displayLI = document.createElement('li');
        }
        bodyElement.appendChild(displayUL);
        displayUL.appendChild(displayLI);
        
    }
}

const userOne =  new User ('jack', 'Jack@gmail.com');
userOne.setRole ('admin');
userOne.setDepartament ('IT');
console.log(userOne.getFullUserData());
userOne.displayUI(userOne.getFullUserData());
*/

import { User } from "./class/user";
import { Student } from "./class/student";

const userOne =  new User ('jack', 'Jack@gmail.com');
userOne.setRole ('admin');
userOne.setDepartament ('IT');
console.log(userOne.getFullUserData());
userOne.displayUI(userOne.getFullUserData());

//kuriam studenta
const student = new Student('Jack', 'jack@gmail.com','Js')
console.log(student)