$(document).ready(function(){
  $(".icon").click(function(){
   $("#menu1").toggleClass('active1');
    
  });
});

var i = 0;
var txt = 'I am a web developer';
var speed = 200;

function typeWriter() {
  if(i==txt.length) 
    {i=0; document.getElementById("demo").innerHTML='';}
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var x=document.getElementById("demo").innerHTML;
x=typeWriter();
