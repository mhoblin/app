// On page load, do this
$(document).ready(function(){
  
var msg0 = 'Too great of an ultimatum. Take no action or try again.';
var msg1 = 'I think you are missing some things. Add more blocks and retry.';
var msg2 = 'One of your blocks is on the wrong side. Move it and try again.';
var msg3 = 'Exchange the largest block on the left with the smallest block on the right and try again.';
var msg4 = 'You are on suicidal watch. Add another block to "reasons to leave" and try again.';
var msg5 = 'Your abuser apologized and agrees to go to counceling. Add a block to reasons to stay.';
var msg6 = 'something 7';
var msg7 = 'something 8';
var msg8 = 'something 9';

console.log( msg0, msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8 );



// 2. Get random number
// returns 0 to 'limit'
var limit = 9;
var numRand = Math.floor(Math.random()*limit);

// 3. if random number 0, show first message, etc. 

$('h2.factor').text( eval('msg' + numRand) );

});