//selecting with id 
const result= document.getElementById("para");
console.log(result);
//next method
result.innerHTML="Hello Everyone";
console.log(result);
result.title="myname";
console.log(result);
//selecting with class
const x=document.getElementsByClassName("p1");
console.log(x);
x[1].innerHTML="AWASTHI";
x[0].innerHTML="JAGRITI";
//selecting with tag
const result3=document.getElementsByTagName("p");
result3[2].innerHTML="THIS IS A PET";
result3[1].style.color="blue";
result3[1].innerText="my paragraph";
//queryselector
const test=document.querySelector("ul li:nth-child(3)");
test.style.backgroundColor="green";
test.style.padding="10px";
//queryselectorall
const test2=document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor="green";
    test2[x].style.margin="10px";
    test2[x].style.color="blue";
}