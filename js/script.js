$(function(){
  
 $(".js-drawer").on("click",function(e){
  e.preventDefault();
  let targetClass = $(this).attr("data-target");
  $("." + targetClass).toggleClass("is-checked");
  return false;
 });

 //smoothscroll
 $('a[href^="#"]').click(function(){
  let speed = 300;
  let header = jQuery(".header").innerHeight();
  let id = jQuery(this).attr("href");
  let target = jQuery('#' == id ? "html" : id);
  let position = jQuery(target).offset().top - header;
  $("html,body").animate({
    scrollTop:position//-$('#js-header").outerHeight()
  },
  speed
  );
  return false;
});

//wow

 new WOW().init()

 //google-form
 let $form = $( '#js-form' )
 $form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp()
        $( '#js-success').slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp()
        $( '#js-error').slideDown()      }
    } 
    
  });
  return false;
}); 


})