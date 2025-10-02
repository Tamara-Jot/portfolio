const btn = document.getElementById("about-me-button");
const moreText = document.getElementById("more");

btn.addEventListener("click", () => {
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    btn.textContent = "Show Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Show More";
  }
});

let slideIndex = 0;

function showSlides(n = slideIndex) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  slideIndex = n;
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  for (let i = 0; i < dots.length; i++) {
    if (i === slideIndex) {
      dots[i].style.backgroundColor = "orangered"; // aktivna
    } else {
      dots[i].style.backgroundColor = "#C3C3C3"; // neaktivna
    }
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  // prikaži aktivni slajd i aktiviraj tačkicu
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

// inicijalno prikazivanje prvog slajda
showSlides();

function sendMail() {
  event.preventDefault();
  let parsms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  console.log(parsms);
  emailjs
    .send("service_ja1a1s7", "template_s26geh6", parsms)
    .then(() => {
      dialogSuccess("Message sent successfully", () => {
        console.log("OK dugme pritisnuto");
      });
    })
    .catch((err) => {
      console.error("Error", err);
    });
}
