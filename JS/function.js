function  testFunction()  {
    console.log("Hello");
    console.log("World");
}
testFunction();

var  globalGreeting  =  "Good  ";
   
function  Function2()  {
         var  localGreeting  =  "Morning  ";    
         console.log("function:");
         console.log(globalGreeting);
         console.log(localGreeting);
}
   
Function2();
   
console.log("main  program:");
console.log(globalGreeting);
//console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined
