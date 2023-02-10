$(document).ready(function() {

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#0099cc',
        strokeWidth: 6,
        duration: 4000,
        from: { color: '#AAA' },
        to: { color: '#0099cc' },

        step: function(state,circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 110);

            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#0099cc',
        strokeWidth: 6,
        duration: 3600,
        from: { color: '#AAA' },
        to: { color: '#0099cc' },

        step: function(state,circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 52);

            circle.setText(value);
        }
    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#0099cc',
        strokeWidth: 6,
        duration: 3400,
        from: { color: '#AAA' },
        to: { color: '#0099cc' },

        step: function(state,circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 33);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#0099cc',
        strokeWidth: 6,
        duration: 4200,
        from: { color: '#AAA' },
        to: { color: '#0099cc' },

        step: function(state,circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 6574);

            circle.setText(value);
        }
    });

    // iniciando o loader quando o usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    }); 
    
    // Parallax
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/work.jpg'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.jpg'});
    }, 250);

    // Filtro do portfólio

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'web-btn') {
            eachBoxes('web', boxes)
        } else if(type == 'mobile-btn') {
            eachBoxes('mobile', boxes);
        } else if(type == 'commerce-btn') {
            eachBoxes('commerce', boxes);
        } else {
            eachBoxes('all', boxes);
        }
    });

    function eachBoxes(type, boxes) {

        if(type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            });
        }
    }

    // fancybox
    $('[data-fancybox]').fancybox({
        clickContent: 'close',
        buttons: ['close']
      })

    // scroll
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {

        $('.navbar-collapse').collapse('hide');
        let btnId = $(this).attr('id');

        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if(btnId == 'portfolio-menu') {
            scrollTo = portfolioSection;
        } else if(btnId == 'contact-menu') {
            scrollTo = contactSection; 
        } else {
            scrollTo = bannerSection;
        } 
        
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 500);
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('#navbar-links');

    $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
        var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

        if(cur_pos >= top && cur_pos <= bottom) {
            if(cur_pos <= bottom) {
                main_nav.find('a').removeClass('active');
            }
            main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }  
    });
    });

    // Back to top button
    $(window).bind('scroll', function() {
        if($(window).scrollTop() >= $('#msg-box').offset().top + $('#msg-box').outerHeight() - window.innerHeight) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    // Init AOS
    function aos_init() {
        AOS.init({
        duration: 1000,
        once: true       
        });
    }
    $(window).on('load', function() {
        aos_init();  
    });
});
