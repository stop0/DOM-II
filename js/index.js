// Your code goes here
let col = document.getElementsByClassName('nav-link')


for (var i = 0 ; i < col.length; i++) {

col[i].addEventListener("click", function (event) {   
    event.target.style.color = "orange";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500)
})
}

//////
let key = document.getElementsByTagName('body')
key[0].addEventListener("keydown", function (event){
    event.target.style.backgroundColor ="powderblue"


    setTimeout(function() {
        event.target.style.backgroundColor = "";
      }, 500)
})


////

let wheel = document.getElementsByClassName("logo-heading")

wheel[0].addEventListener("wheel", function (){
    this.style.fontSize = "10px";
})


/////

window.addEventListener('load', () => {
    alert('page is loaded');
  });

//////

window.addEventListener('resize', function(){
    console.log('1')
  });


///////



const select = document.getElementsByClassName('btn');
select[0].addEventListener('select', function logSelection (event){
  event.console.log("You selected the btn")
});


/////////


const card = document.getElementsByTagName('img');

card[0].addEventListener('dblclick', function (e) {
  card[0].style.width  = ('100px');
});








/////////

document.addEventListener("load", function(event){
    event.preventDefault()
  });