/*Write an if/else statement for the following requirements:
- If student gets 80 or higher: console log  You did a good job
- If students get 70 or above: console log Keep trying
- If students get 60 or above: console log ehhhh
- If students get 55 or above: console log Not to good
- Any grade lower than 55 is Bad Grade But You'll Get Em Next Time*/

let grade = 10;

if(grade >= 80){
    console.log("You did a good job");
}
else if(grade >= 70){
    console.log("Keep trying");
} 
else if(grade >= 60){
    console.log("ehhhh");
} 
else if(grade >= 55){
    console.log("Not too good");
} 
else{
    console.log("Bad Grade But You\'ll Get Em Next Time")
}
