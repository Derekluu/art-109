//hatch codess

document.addEventListener("DOMContentLoaded", function() {
    const hatchClosed = document.getElementById("hatchclosed");
    const hatchOpen = document.getElementById("hatchopen");
    const note = document.getElementById("note");
    const reviewText = document.querySelector(".overlay-text-10");

    reviewText.style.display = "none";

    note.addEventListener("click", function() {
        note.style.display = "none";
        hatchClosed.style.display = "block";

        reviewText.style.display = "block";
    });

    hatchClosed.addEventListener("click", function() {
        hatchClosed.style.display = "none";
        hatchOpen.style.display = "block";

        reviewText.style.display = "block";
    });
});

//rope code

document.addEventListener("DOMContentLoaded", function() {
    const overlayTexts = document.querySelectorAll('.overlay-text');

    overlayTexts.forEach(function(text) {
        text.addEventListener('click', function() {
            text.classList.add('fade-out');

            text.addEventListener('transitionend', function() {
                text.remove();
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(text);
    });

    const hereText = document.querySelector('.overlay-text-2');
    const hiddenImage = document.getElementById('hidden-image');
    hereText.addEventListener('click', function() {
        hiddenImage.style.display = 'block';
        setTimeout(function() {
            hiddenImage.classList.add('visible');
        }, 10);
    });

    const hereText2 = document.querySelector('.overlay-text-3');
    const hiddenImage2 = document.getElementById('hidden-image-2');
    hereText2.addEventListener('click', function() {
        hiddenImage2.style.display = 'block';
        setTimeout(function() {
          hiddenImage2.classList.add('visible');
        }, 10); 
    });

    const hereText3 = document.querySelector('.overlay-text-4');
    const hiddenImage3 = document.getElementById('hidden-image-3');
    hereText3.addEventListener('click', function() {
        hiddenImage3.style.display = 'block';
        setTimeout(function() {
          hiddenImage3.classList.add('visible');
        }, 10); 
    });

    const hereText4 = document.querySelector('.overlay-text-5');
    const hiddenImage4 = document.getElementById('hidden-image-4');
    hereText4.addEventListener('click', function() {
        hiddenImage4.style.display = 'block';
        setTimeout(function() {
          hiddenImage4.classList.add('visible');
        }, 10); 
    });

    const hereText5 = document.querySelector('.overlay-text-6');
    const hiddenImage5 = document.getElementById('hidden-image-5');
    hereText5.addEventListener('click', function() {
        hiddenImage5.style.display = 'block';
        setTimeout(function() {
          hiddenImage5.classList.add('visible');
        }, 10); 
    });
});

//doorway codes

document.getElementById('yearInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const inputCode = event.target.value;
        const correctCode = '2004';

        if (inputCode === correctCode) {
            document.getElementById('doorClosed').style.display = 'none';
            document.getElementById('doorOpen').style.display = 'block';

            document.querySelector('.overlay-text-12').style.display = 'block';
        } else {
            alert('Incorrect code. Please try again.');
        }
    }
});