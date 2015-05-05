// On page load, do this
$(document).ready(function(){
  
var msg0 = 'Too great of an ultimatum. Take not action or try again.';
var msg1 = 'I think you are missing some things. Add more blocks and retry.';
var msg2 = 'Hola!';
var msg3 = 'Hello, kitten';

console.log( msg0, msg1, msg2, msg3 );



// 2. Get random number
// returns 0 to 'limit'
var limit = 4;
var numRand = Math.floor(Math.random()*limit);


// 3. if random number 0, show first message, etc. 

$('h1.factor').text( eval('msg' + numRand) );

});