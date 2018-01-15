//button
$('#nav_btn').click(function(){
  $('.nav_ul').toggle();
});


// range
$(document).on('input', '#range', function() {

  var val = $('.range').val();

  $('.range').css({'background': 
    '-webkit-linear-gradient(left, #e9be9b 0%, #e9be9b '+val+'%, #ccc '+val+'%, #ccc 100%)', 
                  'border-radius': '10px' });
  $('.image').css({'-webkit-box-shadow': 'inset 0 1px 1px rgba(0,0,0,'+val/100+'), 0 0 50px rgba(124, 25, 56,'+val/100+')'});
  $('#range_value').html( $(this).val() + '%');
});


// function range() {

// 	var val = $('.range').val();
//   // var proce = $('.proce');
//   // proce = val;

// 	$('.range').css({'background': 
// 		'-webkit-linear-gradient(left, #e9be9b 0%, #e9be9b '+val+'%, #ccc '+val+'%, #ccc 100%)', 
// 									'border-radius': '10px' });
//   $('.image').css({'-webkit-box-shadow': 'inset 0 1px 1px rgba(0,0,0,'+val/100+'), 0 0 50px rgba(124, 25, 56,'+val/100+')'});
//   $('#slider_value').html( $(this).val() );
// }

// modal
// $( document ).ready(function() {
//   $('.trigger').on('click', function() {
//     $('.modal-wrapper').toggleClass('open');
//     $('.page-wrapper').toggleClass('blur-it');
//      return false;
//   });
// });





$(function() {
  $('a[name=modal]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    $('#mask').fadeIn(1000);
    $('#mask').fadeTo("slow",0.8);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
    $(id).fadeIn(1000);
  });
  $('.window .close').click(function (e) {
    e.preventDefault();
    $('#mask, .window').hide();
  });
  $('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
  });
});


// Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }