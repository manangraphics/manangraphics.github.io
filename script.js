setTimeout(function () {
    $(".loader-wrapper").delay(0).fadeOut();
    $(window).css("overflow","hidden");
    $(".loading").removeClass("loader-wrapper").fadeOut();
    $("#nav").fadeIn();
},2000);


$(function() {
// Dropdown toggle
$('.menu').click(function(){
  $(this).next('.nav-links').fadeToggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.menu') && !$(target).parents().is('.menu')) {
    $('.nav-links').fadeIn(800);
  }
});
});

function myfun(){
	if(document.getElementById("cc").checked == true){
		document.getElementById("nav").style.height = "278px";
		setTimeout(function() {
		(document.getElementById("links").style.display = "block");
		},450);
	}
	else{
		document.getElementById("nav").style.height = "105px";
		(document.getElementById("links").style.display = "none");
	}
}
function myBtn(){
	document.getElementById("nav").style.height = "105px";
	(document.getElementById("links").style.display = "none");
	setTimeout(function() {
		document.getElementById("cc").checked = false;
	},400);
}



function jump(h){
  var container = $('.screen').offset()-500, scrollTo = $('#'+h);
  // container.animate({ scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 500 }, 800);
}

// $('.slider').each(function() {
//   var $this = $(this);
//   var $group = $this.find('.slide_group');
//   var $slides = $this.find('.slide');
//   var bulletArray = [];
//   var currentIndex = 0;
//   var timeout;
  
//   function move(newIndex) {
//     var animateLeft, slideLeft;
    
//     advance();
    
//     if ($group.is(':animated') || currentIndex === newIndex) {
//       return;
//     }
    
//     bulletArray[currentIndex].removeClass('active');
//     bulletArray[newIndex].addClass('active');
    
//     if (newIndex > currentIndex) {
//       slideLeft = '100%';
//       animateLeft = '-100%';
//     } else {
//       slideLeft = '-100%';
//       animateLeft = '100%';
//     }
    
//     $slides.eq(newIndex).css({
//       display: 'block',
//       left: slideLeft
//     });
//     $group.animate({
//       left: animateLeft
//     }, function() {
//       $slides.eq(currentIndex).css({
//         display: 'none'
//       });
//       $slides.eq(newIndex).css({
//         left: 0
//       });
//       $group.css({
//         left: 0
//       });
//       currentIndex = newIndex;
//     });
//   }
  
//   function advance() {
//     clearTimeout(timeout);
//     timeout = setTimeout(function() {
//       if (currentIndex < ($slides.length - 1)) {
//         move(currentIndex + 1);
//       } else {
//         move(0);
//       }
//     }, 4000);
//   }
  
//   $('.next_btn').on('click', function() {
//     if (currentIndex < ($slides.length - 1)) {
//       move(currentIndex + 1);
//     } else {
//       move(0);
//     }
//   });
  
//   $('.previous_btn').on('click', function() {
//     if (currentIndex !== 0) {
//       move(currentIndex - 1);
//     } else {
//       move(3);
//     }
//   });
  
//   $.each($slides, function(index) {
//     var $button = $('<a class="slide_btn">&bull;</a>');
    
//     if (index === currentIndex) {
//       $button.addClass('active');
//     }
//     $button.on('click', function() {
//       move(index);
//     }).appendTo('.slide_buttons');
//     bulletArray.push($button);
//   });
  
//   advance();
// });