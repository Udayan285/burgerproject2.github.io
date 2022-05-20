$(function(){
   let navbar= $('.navbar');
   let offsetvalue =navbar.offset().top
   
  $(window).scroll(function(){
    
   let srcTop =$(window).scrollTop();
   //if else..

   if(srcTop > offsetvalue){
       navbar.addClass('menufixed')
   }else{
    navbar.removeClass('menufixed')
   }
    

   //back to top btn scrl
   if(srcTop > 500){
    $('.btnn').fadeIn();
   }
   else{
    $('.btnn').fadeOut();  
   }


  })
  //back to top btn
  $('.btnn').click(function(){
      $('html,body').animate({
          scrollTop:0,
      },4000);
  })

  //serach btn work here..

  $('#hiin').click(function(){
   $('.inputt').fadeToggle(300);
  })
 
  $('.ban_slider').click();



  $('.demo').ripples();
});