

// Immediate Functions

function welcome(){

    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuday"];
    var today = new Date();
    var msg = "Welcome.Today is "+days[today.getDay()];
    return msg;
}

console.log(welcome());

// (function(){
    
// }());

// (function(){
    
// })();

(function(name){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuday"];
    var today = new Date();
    var msg = 'Welcome ' + name + ' Today is '+days[today.getDay()];
    console.log(msg);

}("Levent"));