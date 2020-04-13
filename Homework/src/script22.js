'use strict'



// // // $(document).ready(function() {

// // //     $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
// // //         $('.overlay').fadeIn(1000);
// // //         $('.modal').slideDown(1000);
// // //     });

// // //     $('.close').click(function() {
// // //         $('.overlay').fadeOut(1000);
// // //         $('.modal').slideUp(1000);
// // //     });

// // // });


// // function User (name, age) {
// //     this.name = name;
// //     //this.age = age;
// //     let userAge = age;


// //     this.say = function() {
// //         console.log(`Имя пользователя: ${this.name}, врозраст: ${userAge}`);
// //         }

// //         this.getAge = function(){
// //             return userAge;
// //         }


// //         this.setAge = function(age) {
// //             if(typeof age === 'number' && age > 0 && age <110) {
// //             userAge = age;
// //         } else {
// //             console.log('error');
// //         }
// //     }
// // }


// // let ivan = new User('Ivan', 25);
// // console.log(ivan.name);
// // console.log(ivan.age);
// // console.log(ivan.getAge());

// // // ivan.age = 30;
// // // ivan.name = 'Alex';

// // ivan.setAge(30);

// // console.log(ivan.getAge());

// // ivan.say();


// let number = 1;

// (function() {
//     let number = 2;
//     console.log(number);

//     return console.log(number + 3);
// }());

// console.log(number);

// let user = (function() {
//     let private = function() {
//         console.log('private');
//     }

//     return {
//         sayHello : function() {
//             console.log('Hello');
//         }
//     }
// }())

// console.log(user);

// console.log(user.sayHello());



// let user = (function() {
//     let private = function() {
//         console.log('private');
//     }

//     let   sayHello = function() {
//         console.log('Hello');
//     }

//     return {
//         sayHello : sayHello
//         }
//     }
// }())

// console.log(user);

// console.log(user.sayHello());


function myModule() {
    this.hello = function() {
        return 'Hello1';
    }

    this.goodbye = function() {
        return 'goodbye!';
    }
}

module.exports = myModule;
