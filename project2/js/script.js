//hatch code

document.addEventListener("DOMContentLoaded", function() {
    const hatchClosed = document.getElementById("hatchclosed");
    const hatchOpen = document.getElementById("hatchopen");
    const note = document.getElementById("note");
    const reviewText = document.querySelector(".overlay-text-10");

    // Initially hide the review text
    reviewText.style.display = "none";

    note.addEventListener("click", function() {
        // Hide the closed hatch and show the open hatch
        note.style.display = "none";
        hatchClosed.style.display = "block";

        // Show the review text after the hatch is open
        reviewText.style.display = "block";
    });

    // Add click event listener to hatchClosed image
    hatchClosed.addEventListener("click", function() {
        // Hide the closed hatch and show the open hatch
        hatchClosed.style.display = "none";
        hatchOpen.style.display = "block";

        // Show the review text after the hatch is open
        reviewText.style.display = "block";
    });
});

//rope code

document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class 'overlay-text'
    const overlayTexts = document.querySelectorAll('.overlay-text');

    // Add a click event listener to each element
    overlayTexts.forEach(function(text) {
        text.addEventListener('click', function() {
            // Add the 'fade-out' class to start the fading process
            text.classList.add('fade-out');

            // Once the fade-out transition ends, remove the element
            text.addEventListener('transitionend', function() {
                text.remove();
            });
        });

        // Set up the Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add fade-in class when the text is in view
                    entry.target.classList.add('fade-in');
                    // Stop observing once the text has faded in
                    observer.unobserve(entry.target);
                }
            });
        });

        // Start observing the overlay text
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

//doorway code

document.addEventListener("DOMContentLoaded", function() {
    const yearInput = document.getElementById("yearInput");

    // Add event listener for the 'Enter' key
    yearInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission if inside a form
            
            // Check if the value entered is '2004'
            if (yearInput.value === "2004") {
                // Redirect to the next page (replace 'nextpage.html' with your actual page)
                window.location.href = "index.html";
            } else {
                // Optionally, show an error message or feedback
                alert("Incorrect year! Please enter '2004'.");
            }
        }
    });
});