// document.querySelectorAll('.navbar a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);
//         window.scrollTo({
//             top: targetElement.offsetTop,
//             behavior: 'smooth'
//         });
//     });
// });

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});


const form = document.querySelector("#userinfo");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("insert.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Form data submitted successfully!");
    } else {
      console.error("Error submitting form data:", response.status);
    }
  } catch (error) {
    console.error("Error submitting form data:", error);
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".giCourses");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    gridItems.forEach(item => {
        observer.observe(item);
    });
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}

let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += n;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

