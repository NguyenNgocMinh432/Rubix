// document.onscroll=function(){
//     const scrollTop = (document.documentElement.scrollTop);
//     console.log(scrollTop);
//     const nav =document.querySelector(".nav-below");
//     if( scrollTop <=200 && scrollTop>=100){
//         nav.style.position="fixed";
//         nav.style.top="0"+"px";
//         nav.style.zIndex= "4";
       
//     }
//     else if(scrollTop==0){
//         // nav.style.position="absolute";
//         nav.style.top="60"+"px";
//         // nav.style.zIndex="4";
//     }
// }
$(document).ready(function(){
    $(".banner-top").addClass("screen");
    $(".banner-overlay").addClass("screen");

  let banner = setInterval(function(){
        $(".banner-top").removeClass("screen");
        $(".banner-overlay").removeClass("screen");
        clearInterval(banner);
    },4000);

    $("#btn-banner").click(function(){
        $(".banner-top").removeClass("screen");
        $(".banner-overlay").removeClass("screen");
    });
    $(".banner-overlay").click(function(){
        $(".banner-top").removeClass("screen");
        $(".banner-overlay").removeClass("screen");
    })
})

$(document).ready(function(){
    $(".menu li").hover(function(){
       $(this).find(".list-item").slideDown(500);
    }, function(){
        $(this).find("ul:first").slideUp(300);
    });
});

$(document).ready(function(){
    $(window).scroll(function(event){
        var pos_body = $('html, body').scrollTop();
        // console.log(pos_body);
        if(pos_body > 20){
            $('.nav-below').addClass('sticky');
           
        }
        else{
            $('.nav-below').removeClass('sticky')
        }
    })
   
})

// $(document).ready(function(){
//     // $(".categories-below-container-left").fancybox();
//     TweenMax.from(
//         $('.categories-below-container-left'),
//         2,
//         {
//             x:100,opacity:1
//         },
//         0.4
//     );
// })
$(document).ready(function(){
    $('.menu a').click(function(event){
        event.preventDefault();

        part =$(this).attr('href');
        // console.log(part);
        position =$(part).offset().top;
        $('html, body').animate({scrollTop: position},500,'easeOutQuad');
    })
})

$(document).ready(function(){
    $(window).scroll(function(event){
        var back = $('html, body').scrollTop();
        // console.log(back);
        if(back > 500){
          $('#icon').show();
        }else{
            $(".back-to-top i").hide();
        }
    });
    $(".back-to-top i").click(function(){return $("body, html").animate({scrollTop:0},1000),!1});
    // $(function(){$('[data-toggle="tooltip"]').tooltip()});
})
