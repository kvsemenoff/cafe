

$(document).ready(function(){

 $("#js-nav a").click(function(e){
     e.preventDefault();
     var currentBlock = $(this).attr("href");
     currentBlockoffset = $(currentBlock).offset().top;
     $("html, body").animate({
      scrollTop: currentBlockoffset -90
     }, 500);
    });


 $(".burger-img").on("click", function(){
        $('.section_db-head-menu2').slideToggle(500);
 });

             

$(document).on("scroll", function(){
var scroll = $(document).scrollTop();



if(scroll > 500){
    
                  $('.section_db-head-menu').css("display","block");   
              

}
else{
    $('.section_db-head-menu').css("display","none");
}
   });





    


    $('.az-select').each(function(){
        var select = $(this);    
        var option = select.find('select option');
        var str = '<div class="az-options">';
        select.find('option').each(function(){
            str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
        });
        str+= '</div>';
        select.html(select.html() + str);

        select.find('select').mousedown(function(){
            return false;
        });
        select.mouseup(function(){
            select.find('select').focus();
        });
        select.find('.az-options div[data-val]').click(function(){
            select.find('select').val($(this).attr('data-val'));
        });
        select.find('select').focusout(function(){
            if(!select.is(':hover')){
                select.find('.az-options').slideUp(0);
                select.removeClass('az-select-focus');
            }
        });
    });

    $(".az-select").click(function(){
        $(this).find('.az-options').slideToggle(0);
        $(this).toggleClass('az-select-focus');
    });



    var owl2 = $("#df-demo");
    owl2.owlCarousel({
        loop:true,
        nav:true, 
        autoplay:false,
        smartSpeed:1000,
        margin:150,
        center: true,     
        navText:['<span class="df-left"></span>','<span class="df-right"></span>'],
        responsive:{
            0:{
              items:1
          },
          768:{
            items:1
          },      
          
          1248:{
              items:2
          }
      }
  });


 });


