var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
var scroll = $("#scroll");
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            scroll.fadeIn();             
        } else { 
            scroll.fadeOut(); 
        } 
    }); 
    scroll.click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
    $(window).on("scroll", function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight < 0.034) {
            // when scroll to bottom of the page
            scroll.css("bottom",119);
            
        }else{
           scroll.css("bottom",0);
        }
    });
    
});

