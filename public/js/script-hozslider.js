$(document).ready(function(){

      $('.offerItemTitle').click(function(){

        $(this).parents('.offerslide').children('.offerItem').removeClass('active');
        $(this).parents('.offerslide').children('.offerItem').children('.offerItemTitle').removeClass('hide');
        $(this).parent('.offerItem').addClass('active');
        $(this).addClass('hide');

      });



  });