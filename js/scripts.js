// On page load, do this
$(document).ready(function(){
  
var msg0 = 'Too great of an ultimatum. Take no action or try again.';
var msg1 = 'I think you are missing some things. Add more blocks and retry.';
var msg2 = 'something 3';
var msg3 = 'something 4';
var msg4 = 'something 5';
var msg5 = 'something 6';
var msg6 = 'something 7';
var msg7 = 'something 8';
var msg8 = 'something 9';

console.log( msg0, msg1, msg2, msg3 );



// 2. Get random number
// returns 0 to 'limit'
var limit = 4;
var numRand = Math.floor(Math.random()*limit);


// 3. if random number 0, show first message, etc. 

$('h1.factor').text( eval('msg' + numRand) );

});