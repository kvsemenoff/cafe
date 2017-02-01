

$(document).ready(function(){
    $('a[name=modal]').click(function(e) {
      e.preventDefault();
      var id = $(this).attr('href');
      var maskHeight = $(document).height();
      var maskWidth = $(window).width();
      $('#mask').css({'width':maskWidth,'height':maskHeight});
      $('#mask').fadeTo("slow",0.8); 
      var winH = $(window).height();
      var winW = $(window).width();
      posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement ||document.body.parentNode || document.body).scrollTop;
      // $(id).css('top',  posTop+50);
      $(id).css('left', winW/2-$(id).width()/2);
      $(id).fadeIn(500); 
    });
    $('.window .dd-close').click(function (e) {
      e.preventDefault();
      $('#mask, .window').hide();
      $('.window').hide();
    }); 

    $('#mask, .an-exit__krest').click(function () {
      $('#mask').hide();
      $('.window').hide();
    }); 
    $(".phone").mask("+ 7 (999) 999 - 99 - 99?"); 
    $(".form1").submit(function() { 
      var tel = $(this).find('input[name="phone"]');
      var empty = false;
      if (tel.val() == ""){
        empty = true;
      }
      if (empty == true){
        tel.addClass("error-input");
        tel.focus();
      }else{
        var form_data = $(this).serialize(); 
        $.ajax({
          type: "POST", 
          url: "/sendmessage.php", 
          data: form_data,
          success: function() {
            cleanTnanks(this);
          }
        });
      }
      return false;
    });

    function cleanTnanks(form){
      $('input[type="text"]').removeClass("error-input");
      $("input[type=text], textarea").val("");
      $('.window').hide();
      // $('a[href=#thanks]').trigger('click');
      location = "spasibo.php";
    };
  });
  $(function() {

    $("#started").click(function(event){
      event.preventDefault();
      var plansoffset = $("#plans").offset().top;
    // console.log(plansoffset);
    $("html, body").animate({
      scrollTop: plansoffset 
    }, 500);
  });
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
                
                  $('.section_db-head-menu2').css("display","none");
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


