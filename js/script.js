$(function(){

    $('.header_list_signup').hover(
      function(){
            
            $(this).find('.header_list_close_li').stop().slideDown(150);   
            // $(this).css('background-color','#D4F1F8');
            $(this).addClass('header_list_signup_hov');
            // $(this).toggle();
            $('.header_list_lastchild').css('background-color','#2498B3');

            $(this).find('.header_list_close_li').hover(
                function(){
                  // $(this).parents('.header_list_signup').css('background-color','white');
                  $(this).parents('.header_list_signup').removeClass('header_list_signup_hov');
                },
                function(){
                  // $(this).parents('.header_list_signup').css('background-color','D4F1F8');
                  $(this).parents('.header_list_signup').addClass('header_list_signup_hov');
                });
    },
    function(){
      $(this).find('.header_list_close_li').stop().slideUp(0);
      // $(this).css('background-color','white');
      $(this).removeClass('header_list_signup_hov');
      $('.header_list_lastchild').css('background-color','#2498B3');
    });

    // ↓ハンバーガーメニュー
    $('button').click(function(){

      var ham_open = $('.p-hamburgar-line').hasClass('p-hamburgar-open');
  
      if(ham_open){
          
          $('.p-hamburgar-line').addClass('p-hamburgar-close');
          $('.p-hamburgar-line').removeClass('p-hamburgar-open');
          $('.header_list').slideUp(150);
          $('.p-hamburgar').css('background-color','white');

      } else{    
          $('.p-hamburgar-line').addClass('p-hamburgar-open');
          $('.p-hamburgar-line').removeClass('p-hamburgar-close');
          $('.header_list').slideDown(150);
          $('.p-hamburgar').css('background-color','#2498B3');
          }
  
      });

      // ↓ヘッダーリストの+と-
      // ↓clickをhoverに変更している
      $('.header_list_signup_dec').hover(
        function(){        
          // var list_dec = $('.header_list_signup_dec').hasClass('dec');
          // if(list_dec){
            
            $(this).addClass('dec_-');
            $(this).removeClass('dec');

          // }else{
            // $(this).removeClass('dec_-');
            // $(this).addClass('dec');
          // }
        },
        function(){
          $(this).addClass('dec');
          $(this).removeClass('dec_-');

        

      });
      
});
