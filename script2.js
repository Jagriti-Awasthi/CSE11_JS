var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="sanjeev soni";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));
//function
var sayHello=function(){
    alert('hello world!');
}
//array
var numberArray=[1,2,3];
var animals=new Array("cat","dog","mouse","lion");
//object
var person={
    name:'Barack Hussein Obama ll',
    age:'51',
    title:'44th President of the United States'
}
const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false");
}