var text1 = document.getElementById("text1");
var input1 = document.getElementById("input1");
var send1 = document.getElementById("send1");
var name1 = document.getElementById("name1");

var text2 = document.getElementById("text2");
var input2 = document.getElementById("input2");
var send2 = document.getElementById("send2");
var name2 = document.getElementById("name2");

send1.addEventListener('click',clickOne, false);
send2.addEventListener('click',clickTwo, false);

function clickOne(){
  var span1 = document.createElement('span');
  var span2 = document.createElement('span');
  span1.className="person1";
  span2.className="person1";
  text1.appendChild(span1);
  text2.appendChild(span2);
  span1.textContent= name1.value+' says '+input1.value;
  span2.textContent=  name1.value+' says '+input1.value;

  input1.value ="";

  console.log('click');



}
function clickTwo(){
  var span1 = document.createElement('span');
  var span2 = document.createElement('span');
  span1.className="person2";
  span2.className="person2";
  text1.appendChild(span1);
  text2.appendChild(span2);
  span1.textContent= name2.value+' says '+input2.value;
  span2.textContent= name2.value+' says '+input2.value;

  input2.value ="";

  console.log('click');



}
