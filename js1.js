/*alert('zhangdong');
confirm(13);
console.log('zhangdong');
*/
// prompt('zhangdong', 123);
// var obox=document.getElementById('box1');

// alert(obox);
// console.log(obox);
// var obox1=document.getElementsByClassName('box');
// alert(obox1);
// var obox2=document.getElementsByTagName('div');
// alert(obox2);
// var obox3=document.getElementsByTagName('p');
// obox3[0].innerText='<i>我擦</i>';
// alert(obox3[0].textContent);
// console.log(obox3);
// alert(this);
// obox=document.getElementById('box1');
// obox.onclick=function() {
	
// }
// var a='abc';
// alert(window.a);
// function fn(){
// 	// alert(this);
// 	var a='asd';
// }
// alert(window.fn);

var obo=window.document.getElementById('box1');
obo.onclick=function(){
	this.style.background ='red';
}
var obo1=window.document.getElementById('box1');
obo1.onmouseover=function(){
	this.style.background ='pink';
}
var obo2=window.document.getElementById('box1');
obo2.onmouseleave=function(){
	this.style.background ='yellow';
}
function changetext(id)
{
	id.innerHTML='我不好啊';
}
