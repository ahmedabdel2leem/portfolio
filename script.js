/////global
const sections = document.querySelectorAll('.animate');
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
            entry.target.classList.add('active');
      }else {
            entry.target.classList.remove('active');
      }
    });
});

///////when start
animateSkills();
///////// call animateSkills while scrolling
window.addEventListener('scroll', animateSkills);

//////////functions
  // Function to handle scroll event
  function animateSkills() {
    sections.forEach(section => {
        observer.observe(section);
    });
  }

