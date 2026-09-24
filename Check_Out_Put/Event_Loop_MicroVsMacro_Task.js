console.log("start");
setTimeout(() => {
  console.log("setTime Hu mai");
}, 0);

Promise.resolve().then(() => {
  console.log("Yes I am promise ");
});

console.log("End");

/*

is code me sabse pahale synchorous task chal raha hai start and end 
phir chale ga MICRO-TASK queue jisme ki promise wala chale ga phir
MACRO TASK queue chale ga jo ki setTime out wala hai


output:-

start
End
Yes I am promise 
setTime Hu mai

*/
