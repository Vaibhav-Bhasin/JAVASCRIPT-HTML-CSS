//alert("hello");
// comment//
/* multiple
line 
comment
*/


var foo1 = "five";
var foo2 = 5;
//alert(foo1+foo2);
var foo3 = true;
//alert(foo3);
// arrays list
foo4 = [5, 'five', '5']
//alert(foo4[2])

// operators//
/*
==
!=
>=
<=
<
>
===(identical to)
!==(nonidentical to)
*/


//alert(1==1);
/*
alert(1 != "1");
alert(1 !== "1");
// ===  also check the data type along with the value
// Mathematical op
var a = 2;
alert(a);
a++;
alert(a)
// a+= 1
a--;
alert(a); 
*/
/*
// if else elif
if (2==3)
{
alert("Its true");
}
else if(2==3)
{
alert("okay");
}
else{
alert("Its FAlse");
}
// loops //
for( var i = 0; i <= foo4.length; i++)
{
alert(i);
}
*/
/*
// functions //
alert(4);
confirm("Okay?");
prompt("What is this?");
var a = Date();
alert(a);
*/
// setTimeout(Date(),5000);
var b = parseInt("123");
//alert(b);


function vaibhav(arr)
{
//alert(arr.length);
}


vaibhav([1,2,3,4,5]);


function addition(a,b)
{
return a+b;
//alert("haha")
}

//alert(addition(8,9));





var foo = "value"; //local variable
foo = "vaibhav"; //global variable
//alert(foo);




function doubt(num)
{
total = num+num;
return total;
}
var total = 10;
var number = doubt(20)
//alert(total);


// Events //
function myFunction()
{
alert("You just clickedthe webpage");
}

//window.addEventListner = ("click", myFunction());
//DOM(Document Object Module)
// button that changes to dark theme and buton that 
function change_theme()
{
comment("Do you want to change to dark theme");
}
//window.addEventListner = ("click", change_theme());
function light()
{
var x = document.getElementsByTagName("h1")[0].innerHTML;
console.log(x);
var y = document.getElementById("footer").innerHTML;
console.log(y);
var w = document.getElementsByClassName("intro")[0].innerHTML;
console.log(w);
document.getElementsByClassName("intro")[0].style.color="red";
document.getElementsByClassName("intro")[0].style.backgroundColor="black";
}
function dark (){
document.body.style.backgroundColor="black";
document.body.style.color="white";
var newH = document.createElement("h");

var myText = document.createTextNode("This is Gothem");
var d = document.getElementById("myDiv");
newH.appendChild(myText);
d.appendChild(newH);
}
function light (){
document.body.style.backgroundColor="white";
document.body.style.color="black";

var s = document.getElementsByTagName("a")[0]
s.setAttribute("href","www.facebook.com");
var m = s.getAttribute("href");
console.log(m);
s.innerHTML = m;
}

// add in
