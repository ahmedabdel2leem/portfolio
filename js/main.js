/////global
const sections = document.querySelectorAll(".animate");
const nav = document.getElementById('navId');
console.log(nav)
console.log(nav.offsetHeight)
window.addEventListener('scroll', changeNav);

function changeNav() {
  if(window.scrollY>100){
    nav.classList.add('toFixed')
  }else{
    nav.classList.remove('toFixed')
  }
  console.log(nav.scrollTop,window.scrollY);
}
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("activate");
    } else {
      entry.target.classList.remove("activate");
    }
  });
});

///////when start
animateSkills();
///////// call animateSkills while scrolling
window.addEventListener("scroll", animateSkills);

//////////functions
// Function to handle scroll event
function animateSkills() {
  sections.forEach((section) => {
    observer.observe(section);
  });
}


// ? emailjs
document.getElementById("sendButton").addEventListener("click", function (e) {
  e.preventDefault();
  sendMail();
});

function sendMail() {
  const emailInput = document.getElementById("emailInput").value.trim();

  if (emailInput === "") {
    showToast("Please enter your email address.", false);
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput)) {
    showToast("Please enter a valid email address.", false);
    return;
  }
  const params = {
    email: emailInput,
  };

  const serviceID = "service_3ah98fr";
  const templateID = "template_vw39sxi";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("emailInput").value = "";
      console.log(res);
      showToast("Your message sent successfully!!", true);
    })
    .catch((err) => console.log(err));
}

function showToast(message, isSuccess) {
  const toastElement = document.getElementById("emailToast");
  const toastBody = toastElement.querySelector(".toast-body");
  toastBody.textContent = message;
  if (isSuccess) {
    toastElement.classList.add("bg-success");
  } else {
    toastElement.classList.remove("bg-success");
  }
  const toastInstance = new bootstrap.Toast(toastElement);
  toastInstance.show();
  setTimeout(function () {
    toastInstance.hide();
  }, 3000);
}
