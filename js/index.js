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















/////////

col[0].addEventListener("click", function(event){
    event.preventDefault()
  });
  