const activeDiv = document.querySelectorAll(".activeTesti");
const imageButtons = document.querySelectorAll(".image-buttons");

for (let i = 0; i < imageButtons.length; i++) {
  imageButtons[i].addEventListener("click", () => {
    if (i === 0) {
      activeDiv[i].classList.remove("inactive");
      activeDiv[i + 1].classList.add("inactive");
      activeDiv[i + 2].classList.add("inactive");
    } else if (i === 1) {
      activeDiv[i].classList.remove("inactive");
      activeDiv[i - 1].classList.add("inactive");
      activeDiv[i + 1].classList.add("inactive");
    } else {
      activeDiv[i].classList.remove("inactive");
      activeDiv[i - 1].classList.add("inactive");
      activeDiv[i - 2].classList.add("inactive");
    }
  });
}
