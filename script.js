const navs = document.querySelectorAll(".nav-list li");
const cube = document.querySelector(".box");
const sections = document.querySelectorAll(".section");

const resumeLists = document.querySelectorAll(".resume-list");
const resumeBoxs = document.querySelectorAll(".resume-box");

const portfolioLists = document.querySelectorAll(".portfolio-list");
const portfolioBoxs = document.querySelectorAll(".portfolio-box");

//View More - About Me
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const hiddenItems = document.querySelectorAll(".desc .hidden");

  if (hiddenItems.length > 0) {
    toggleBtn.style.display = "inline-block";
  }

  toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const isHidden = hiddenItems[0].classList.contains("hidden");
    hiddenItems.forEach((item) => item.classList.toggle("hidden"));

    toggleBtn.textContent = isHidden ? "View Less" : "View More";
  });
});



//Home Page - Blinker

document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Passionate Coder",
    "Quick Learner",
    "Full Stack Developer",
    "Multitasker",
    "Data Scientist",
  ];

  const wordSpan = document.getElementById("word");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = roles[wordIndex];
    const typed = current.substring(0, charIndex);
    wordSpan.textContent = typed;

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(typeEffect, 100); // typing speed
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50); // deleting speed
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // pause before deleting
      } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % roles.length;
        setTimeout(typeEffect, 200); // pause before typing next
      }
    }
  }

  typeEffect(); // start animation
});

// navbar actions and all section actions along with cube rotation when navbar is clicked
navs.forEach((nav, idx) => {
  nav.addEventListener("click", () => {
    document.querySelector(".nav-list li.active").classList.remove("active");
    nav.classList.add("active");

    cube.style.transform = `rotateY(${idx * -90}deg)`;

    document.querySelector(".section.active").classList.remove("active");
    sections[idx].classList.add("active");

    const array = Array.from(sections);
    const arrSecs = array.slice(1, -1);
    arrSecs.forEach((arrSec) => {
      if (arrSec.classList.contains("active")) {
      sections[4].classList.add('action-contact');
      }
    });
    if(sections[0].classList.contains('active')){
    sections[4].classList.remove('action-contact');
    }
  });
});

// resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".resume-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".resume-box.active").classList.remove("active");
    resumeBoxs[idx].classList.add("active");
  });
});

// portfolio section when clicking tab-list

portfolioLists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    document.querySelector(".portfolio-list.active").classList.remove("active");
    list.classList.add("active");

    document.querySelector(".portfolio-box.active").classList.remove("active");
    portfolioBoxs[idx].classList.add("active");
  });
});

function openResumeModal() {
  document.getElementById("resumeModal").style.display = "block";
}

function closeResumeModal() {
  document.getElementById("resumeModal").style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function (event) {
  const modal = document.getElementById("resumeModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// visibility for contact section when reloading (cube reloading animation)
setTimeout(()=>{
sections[4].classList.remove('active');
},1500);


  (function(){
    emailjs.init("xqkWbhmbNdyAwR83V"); 
  })();

  document.getElementById('c-f').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_pw85my9', 'template_urnaxy4', this)
      .then(function() {
        alert("Message sent successfully!");
        document.getElementById('c-f').reset();
      }, function(error) {
        alert("Failed to send message: " + JSON.stringify(error));
      });
  });

 