//callback function

function sum (a,b,callback){
    console.log(a+b);
    callback();
}
function sayhello(){
    console.log("hello");
}
function saygoodbye(){
    console.log("bye");
}

let a = 10;
let b = 21;

sum(a,b,saygoodbye);


 // try and ctch

try {
    console.log(a);
    
} catch (error) {
    console.log("there is a erorr");
    
}
console.log("hello");
console.log("bye");
console.log(a);
console.log("hello");

