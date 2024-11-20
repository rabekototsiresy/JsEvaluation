document.addEventListener("DOMContentLoaded", function () {
  let logoRef = document.getElementById("webynLogo");
  logoRef.src = "./assets/images/webyn-logo.PNG";
  logoRef.style.width = "200px";

  let titleRef = document.querySelector(".title");
  titleRef.innerHTML = `Generate <span style="color: #38A2E1;">more revenue</span> with your website!`;

  let leadeRef = document.querySelector(".lead");
  leadeRef.innerHTML = `97% of your traffic does not convert. Webyn automatically generates </br> improvements on your website to maximize your conversions.
    </br>100% No-Code.`;

  let buttonRefList = document.querySelectorAll(".btn");
  buttonRefList.forEach((button) => {
    button.classList.add("rounded-pill");
  });

  let demoBtnRef = document.getElementById("demoBtn");
  demoBtnRef.innerText = "Book a demo";
  let analyseBtnRef = document.getElementById("analyseBtn");
  analyseBtnRef.innerHTML =
    "<span>Analyse a website</span> <img width='20' src='./assets/icons/arrow-right.svg' alt='arro left'>";
});
