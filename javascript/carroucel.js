
            let slideIndex = 0;

            function cambiarSlide(n) {
                const items = document.querySelectorAll('.carrusel-item');
                slideIndex += n;

                if (slideIndex >= items.length) {
                    slideIndex = 0;
                }
                if (slideIndex < 0) {
                    slideIndex = items.length - 1;
                }

                const offset = -slideIndex * 100;
                document.querySelector('.carrusel-container').style.transform = `translateX(${offset}%)`;
            }
