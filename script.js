$(document).ready(function() {
    // Sticky navbar on scroll
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up on scroll-up button click
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
        // Remove smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Apply smooth scroll on menu items click
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle navbar menu visibility
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing Text Animation Script (inside $(document).ready)
    var typed = new Typed(".typing-2", {
        strings: ["Java Developer", "Spring Boot Expert", "Full Stack Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Contact form submission with Formspree
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset(); // Reset the form
            } else {
                throw new Error('Failed to send message');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send message. Please try again later.');
        });
    });
});
