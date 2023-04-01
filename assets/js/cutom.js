$(function(){

// 메뉴 클릭시  하위메뉴 보이기
    $('.gnb .menu-item').hover(function(){
        if($(this).find('.sub-list').length > 0){
            $(this).find('.sub-list').addClass('show')
            $('.header').addClass('on')
        }
        $(this).siblings().addClass('opa')
    },function(){
        $(this).find('.sub-list').removeClass('show')
        $('.header').removeClass('on')
        $(this).siblings().removeClass('opa')
    })


    // 모바일 메뉴 클릭시 메뉴 나오기
    $('.gnb .m-menu .btn-menu').click(function(e){
        e.preventDefault();
        
        $('.gnb').toggleClass('show');
        if($('.gnb').hasClass('show')==true){
            gsap.set('body',{overflow:'hidden'});
            menu = gsap.timeline({
                defaults: {
                    duration: 0.7,
                },
            })
            menu
            .addLabel('a')
            .to('.gnb .m-menu .btn-menu i',{'top': '50%'},'a')
            .to('.gnb .m-menu .btn-menu i',{'background': '#000'},'a')
            .to('.gnb .m-menu .m-menu-list',{yPercent:100})
            .to('.gnb h1 a',{'color':'#000'})
            .to('.gnb .m-menu .m-menu-item .title',{opacity:1})
            .addLabel('b')
            .to('.gnb .m-menu .btn-menu .bar-top',{'transform': 'rotate(45deg)'},'b')
            .to('.gnb .m-menu .btn-menu .bar-bottom',{'transform': 'rotate(-45deg)'},'b')
        }
        else{
            menu.reverse()
            gsap.set('body',{overflow:'auto',delay:0.7});
            $('.gnb .m-menu .title').removeClass('show')
            $('.gnb .m-menu .title').next().slideUp()
        }
    })

    // 모바일 메뉴 클릭시  하위메뉴 보이기
    $('.gnb .m-menu .title').click(function(e){
        e.preventDefault();
        $(this).toggleClass('show')
        $(this).next().slideToggle()

    })



    // 버튼 클릭시 유튜브


    $('.btn-play').click(function(e){
        e.preventDefault();
        $('body').addClass('hide');
        $('.video-area').addClass('on')

    })
    $('.btn-close').click(function(e){
        e.preventDefault();
        $('body').removeClass('hide');
        $('.video-area').removeClass('on')
        $("#ytvideo")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    })

    //q&a 버튼클릭시 답나오게
    $('.btn-qna').click(function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        if($(this).hasClass('on')==true){
                intro = gsap.timeline({
                    defaults: {
                        duration: 0.4,
                    }
                })
                num=$(this).find('.answer')
        
                intro
                .addLabel('a')
                .to(num, { 'margin-top': '50px'},'a')
                .to(num, { "height":'auto'},'a')
                .to(num, { 'margin-bottom': '20px'},'a')
                .to(num, {opacity: 0.6})
            }
            else{

                intro1 = gsap.timeline({
                    defaults: {
                        duration: 0.3,
                    }
                })
                num=$(this).find('.answer')
                intro1
                .addLabel('a')
                .to(num, { opacity: 0},'a')
                .to(num, { "height":'0',delay:0.4},'a')
                .to(num, { 'margin-bottom': '0',delay:0.4},'a')
                .to(num, { 'margin-top': '0'})
            }
    })

    $('[data-animation="left"]').each(function(i,a){

        gsap.to(a, {
            scrollTrigger: {
                trigger: a,
                containerAnimation: horiMotion,
                start: "0% 100%",
                end:"100% 50%",
            //    markers:true,
                scrub:1
            },
            transform: 'scale(1.1)',
        });


    })
})