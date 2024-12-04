$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
    const carousel = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const images = document.querySelectorAll('.carousel-inner img');
    let currentIndex = 0;
    
    // Função para mover o carrossel
    function updateCarousel() {
        const offset = -currentIndex * 100; // Desloca as imagens horizontalmente
        carousel.style.transform = `translateX(${offset}%)`;
    }
    
    // Botão próximo
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });
    
    // Botão anterior
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });
    
    // Mudança automática
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 3000); // Troca a cada 3 segundos
    

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.dishh', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });


    ScrollReveal().reveal('#atracoes', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('#gastronomia', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
    ScrollReveal().reveal('#Hospedagem', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })
    ScrollReveal().reveal('#servico', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })
});