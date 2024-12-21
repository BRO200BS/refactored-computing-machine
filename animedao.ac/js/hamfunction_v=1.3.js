$(document).ready(function () {
        
     $('.mask').click(function () {
        $('.login-popup').fadeOut();
        $('.mask').fadeOut();
        if (document.getElementById('iframe-trailer')) {
            $('.modal-body').fadeOut();
            $('#iframe-trailer').attr('src', "");
        }
     });
     
      
      $('.add_ads .add_ads_items_close').click(function () {
            $(this).parent().parent().fadeOut();
      });
    
            
    $('.navbar-nav li:not(.user)').each(function () {
        var href = $(this).find('a').attr('href');
        var current_url = window.location.protocol + '//' + window.location.hostname + window.location.pathname;

        if(current_url === href){
            $('.menu_top li').removeClass('active');
            $(this).addClass('active');
        }
    });
    
    $('.menu_user .account').click(function (e) {
        $('.nav_down_up').toggle();
    }); 
    
    $('.fa-bars').click(function(){ 
        slideMenu = $('nav.menu_top');
        if (slideMenu.is(':hidden')) {
            $('#off_light').addClass('show');
            $(slideMenu).addClass('show');
            $('body').addClass('show');
        }else{
            $('#off_light').removeClass('show');
            $(slideMenu).removeClass('show');
            $('body').removeClass('show');
        }
    }); 
    
    $('#off_light').click(function(){ 
            $('#off_light').removeClass('show');
            $(slideMenu).removeClass('show');
            $('body').removeClass('show');
    }); 
    
    $('#view_more_episodes').click(function(e){ 
        e.preventDefault();
        var id = (this).rel;
        var str = $(this).attr( "str-alias" );
        $('.drama_info_episodes_next').stop(true,true).load(base_url + '/load-episode.html?id=' + id + '&str='+str); 
        loadDing('load_episode');
    }); 
    
    $('a.view_all').click(function(e){ 
        e.preventDefault();
        $('.season_movies .bottom ul.list_ep').addClass('fix');
        $(this).hide();
    }); 
    
    $('.anime_muti_link li a').click(function (e) {
        e.preventDefault();
        
        var id = (this).rel;
        var link = $(this).attr('data-video');
        if ($(this).hasClass("active")) {
             return false;
        }else{
            $(".play-video iframe").attr('src',link);
            $('html,body').animate({
                scrollTop: $("#videocontent").offset().top
            }, 1000);
        }
        $('.anime_muti_link li').removeClass('active');
        $(this).parent().addClass('active');
        //document.getElementById('load_video').innerHTML = "<div class='vjs-loading-spinner'></div>";
    });
    
    $('a.click_comment').click(function(e) {
			e.preventDefault();
            $(".share a").removeClass("active");
			$('html,body').animate({scrollTop: $('.comment').offset().top}, 1200);	
    });
    $('a.click_info').click(function(e) {
			e.preventDefault();
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            }else{
                 $(this).addClass("active");
            }
			$("#load_info").toggle();
			
    });

    $('.specialButton').click(function(e){e.preventDefault();$('#disqus_thread').toggle();if($('#disqus_thread').is(':hidden')){$('.specialButton .txt').text('Show')}else{$('.specialButton .txt').text('Hide')}});
    
    $('.infoclick li').click(function(e) {
        e.preventDefault();
        var elm = '.tab-content .tab-pane';
        var id = $(this).attr('data-id');
        $(".nav-tabs li").removeClass("active");
        $(".nav-tabs li."+id).addClass('active');

        $(elm).removeClass("in");
        $(elm).removeClass("active");
        $(elm+"."+id).addClass("in");
        $(elm+"."+id).addClass("active");
    });        
});
function loadDing(str){
    document.getElementById(str).innerHTML = "<img src='" + base_url + "/img/load/ajax-loader_1.gif' />";
}
function freload() {
    location.reload(true);
}
function loadItenms(obj,id){ 
    var elm = '.tab-content .tab-pane';
    $("#laoding").show();
    if ($.trim($(elm+"."+id).html()).length > 0 ){$("#laoding").hide();}

    $(".nav-tabs li").removeClass("active");
    $(".nav-tabs li."+id).addClass('active');

    $(elm).removeClass("in");
    $(elm).removeClass("active");
    $(elm+"."+id).addClass("in");
    $(elm+"."+id).addClass("active");

    $(elm+"."+id).is(":empty")&&$.ajax({url:base_url+id+'.html',type:'GET',success:function(data){if(data!='0'){var dataString=JSON.stringify(data);$(elm+"."+id).html(data);$("#laoding").hide()}}})
}
function ajaxBookmark(id,url, callback){$.ajax({dataType:'json',type:'get',async:!1,data:{id:id,_csrf:$("meta[name=csrf-token]").attr('content')},url:url,success:function(response){callback(response)}})}
jQuery(window).on('load',function() {

            var opacity  = function(){
                var scrollTop = $(window).scrollTop();
                if(scrollTop > 200)
                    opacity = 1;
                else if(scrollTop >  10 && scrollTop <  200)
                    opacity = scrollTop/ 200;
                else
                    opacity = 0;
                $("#scroll-top").css("opacity", opacity);
            };
            
            $("#scroll-top").click(function() {
                $("html,body").animate({ scrollTop : 0 }, "slow");
                return false;
            });
            $(window).bind("scroll", null, opacity);
            opacity();
            
});