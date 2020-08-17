$(document).ready(function(){

  // snb - click

  var snb = $('.snb li');
  var fullpage = $('#fullpage > section');

  $(snb).click(function(){
    var idx = $(this).index();
    var article = fullpage.eq(idx);
    var articleTop = article.offset().top;

    // click - scroll animate
    $('html,body').stop().animate({scrollTop : articleTop},3000);

    // click - active class settings
    $(this).addClass('active').siblings().removeClass();
  });

  $(window).scroll(function(){

    var scrollTop = $(this).scrollTop();

    var scroll1 = $('#about').offset().top - 700;
    var scroll2 = $('#Service').offset().top - 700;
    var scroll3 = $('#Portfolio').offset().top - 700;
    var scroll4 = $('#contact').offset().top - 700;

    if(scrollTop >= scroll4){
      snb.eq(3).addClass('active').siblings().removeClass();
    } else if (scrollTop >= scroll3){
      snb.eq(2).addClass('active').siblings().removeClass();
    } else if (scrollTop >= scroll2){
      snb.eq(1).addClass('active').siblings().removeClass();
    } else {
      snb.eq(0).addClass('active').siblings().removeClass();
    };
  });

  $('#ham_btn').click(function(){
    $('#gnb').toggleClass('zIndex');
  })
});