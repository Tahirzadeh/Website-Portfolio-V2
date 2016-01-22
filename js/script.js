/*Allows smooth scrolling to a link*/
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });
});

/*Typing Animation */
$(function(){
    $(".typed").typed({
        strings: ["Programming", "Design", "Story Writing", "Video Games", "Learning", "Soccer"],
        typeSpeed: 60,
        loop: true
    });
});

/*Fades in texts*/
$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
            $('.fadein :first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo('.fadein');},
        1000);
});

/*Scroll Spy*/
$('body').scrollspy({ target: '#spy', offset:80});

$(function(){
    $('.fade').fadeIn('1500');
});


$(".btn").mouseup(function(){
    $(this).blur();
});


particlesJS();

/*Interesting way for text to reveal itself*/
/*
 $(function() {
 $(".about").hide().show(3000)
 });
 */