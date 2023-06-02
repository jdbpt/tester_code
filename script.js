// // let x = 15;
// let y = "yes";
// let z= "no";


// // const midgar = ["Cloud", "Tifa", "Yuffie", "Vincent Valentine"];
// // let names = "";

// // midgar.forEach(character => {
// //     names += character+" ";
// //     console.log(character);
// // });

// // console.log(names);

// // if(midgar.includes("Cloud")){
// //     console.log("Sephiroth attacks");
// // }

// let x = 42;
// let a = 70;

// if(x === 42  && a === 70){
//     let sum = x + a;
//     console.log(sum);
// }

// console.log(x, y, z);

// x = 10;

// let age = 17;

// if (age >= 18){
//     //do this
//     console.log("access granted");

// } 
// else{
//     //do that
//     console.log("access denied");
// }

// age = 25;

// if (age >= 18){
//     //do this
//     console.log("Your age is: " + age.toString() + "-access granted");

// } 
// else{
//     //do that
//     console.log("access denied");
// }

// let pieces_wood = 30;

// if(pieces_wood >= 30){
//     console.log("Fullsize Treehouse Can Be Constructed");

// }else if (pieces_wood >= 20){
//     console.log("A door can be constructed");
// }
// else {
//     console.log("How about making a birdhouse? Or drawing one?")
// }


/** Write an if statement with a username and password
 * The username is admin, the password is pass614
 * if they are strictly equal, then grant access,
 * else deny access
*/

// let username = "admin";
// let password = "Pass614";

// if(username === "admin" , password === "Pass614"){
//     console.log("Access Granted");
// }else{
//     console.log("Access Denied");
// }

let num = -1;

if(num >= 0 && num >= 100){
    if(num !== 100){
        console.log("Number is positive and greater than 100");
    } else{
        console.log("Number is 100");
    }
    
} else if ( num >= 0 && num < 100){
    if(num !== 0){
        console.log("Number is positive but not greater than 100");
    } else{
        console.log("Number is zero and not greater than 100");
    }
    //console.log("Number is positive or zero but not greater than 100");
} else if (num < 0) {
    console.log("Negative number");
} else{
    console.log("Not a number");
}





