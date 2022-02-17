$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 20){
          $(".navbar").addClass("sticky");
       }else{
          $(".navbar").removeClass("sticky")
      }
    })
});
// toggle menu\navbar scrip

$('.menu-btn').click(function(){
   $('.navbar .menu').toggleClass("active");
   $('.menu-btn i').toggleClass("active");
})


//Get the button:
mybutton = document.getElementById("myBtn");

//When someone scrolls down 20px from top = show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the button is clicked, go to top (home page)
function topFunction() {
  document.documentElement.scrollTop = 0; 
}

//Typing animation scroll
var typed = new Typed(".typing",{
   strings: ["Junior Web Developer.", "Freelancer.", "Designer.",],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true 
});

var typed = new Typed(".typing-2",{
  strings: ["Junior Web Developer.", "Freelancer.", "Designer.",],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true 
});


