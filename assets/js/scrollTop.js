// //Get the button:
// const mybutton = document.getElementById("scrollTop");

// // When the user scrolls down 20px from the top of the document, show the button
// // window.onscroll = function() {scrollFunction()};
// window.addEventListener('scroll', scrollFunction);

// function scrollFunction() {
//   if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener('click', topFunction);

// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $('#scrollTop').fadeIn();
    } else {
        $('#scrollTop').fadeOut();
    }
});

$("#scrollTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });