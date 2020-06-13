$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

$(document).ready(function () {

   $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.text').toggleClass('addMargin');
        $('#sidebarCollapse').toggleClass('addMargin');
    });

});

$(document).ready(function () {

  $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
  });

});

var score= document.querySelector("#score")
var duration= document.querySelector("#duration")
score.textContent= localStorage.getItem("resultValue")
duration.textContent= localStorage.getItem("timeTaken")

