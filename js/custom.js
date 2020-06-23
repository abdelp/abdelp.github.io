/* HTML document is loaded. DOM is ready.
-------------------------------------------*/

function fade() {
    $('.preloader').fadeOut(1000);
}

//     /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
//     ---------------------------------------------------------------------------------*/ 

$(function() {
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
            // alert(console.log.toString());
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
            // alert(console.log.toString());
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();
});

// $(document).ready(function (e) {
//     alert(console.log.toString());
// })

// alert(console.log.toString());
// /* start preloader */
// $(window).on('load', function() {
//     alert(console.log.toString());
// 	$('.preloader').fadeOut(1000); // set duration in brackets    
// });
// /* end preloader */

// $(window).bind("load", function() {   
//     console.log('cargo2');   
//     setTimeout(function() {
//    $('.preloader').fadeOut(function() {           
//       });
//       }, 1000);            
//   });