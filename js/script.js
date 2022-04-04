
// color switch

  let themeToggler = document.querySelector('.theme_toggle_btn');

  themeToggler.onclick = () =>{

  themeToggler.classList.toggle('active');

  if(themeToggler.classList.contains('active')){
      document.body.classList.add('active');
  }else{
      document.body.classList.remove('active');
  }

}
// fruit_slider slider

$('.fruit_slider_wrap').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: ".fs_prev",
  nextArrow: ".fs_next",
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
// count down 

var countDownDate = new Date("may 1, 2022 10:17:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo1").innerHTML = days + "<br>" + "Days";
  document.getElementById("demo2").innerHTML = hours + "<br>" +"Hour";
  document.getElementById("demo3").innerHTML = minutes + "<br>" +"min";
  document.getElementById("demo4").innerHTML = seconds + "<br>" +"sec";

  // If the count down is finished, write some text
  if (days===0 && hours===0 && minutes===0 && seconds===0) {
    clearInterval(x);
    document.getElementById("demo1").innerHTML = "EXPIRED";
  }
}, 1000);
