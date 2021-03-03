$(document).ready(function(){
    $('#menu').click(function(){
        $('nav ul').slideToggle(500);
    })   
  });
AOS.init();
const arr=['bg.jpg','bg1.jpeg','bg2.jpg'];
const page = document.querySelector('.headerpage');
setInterval(()=>{
const rand = Math.floor(Math.random() * arr.length);
page.style.backgroundImage = 'url("lux-images/person/'+arr[rand]+'")';
},5000)