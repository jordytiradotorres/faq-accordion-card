// const button = [...document.querySelectorAll("button.arrow-show")];
const button = [...document.querySelectorAll(".content-show")];
const paragraph = [...document.querySelectorAll("p.parrafo")];
const h3 = [...document.querySelectorAll(".content-show h3")];

button.map((btn, index) => {
  btn.addEventListener("click", (e) => {
    paragraph[index].classList.toggle("show");

    if (paragraph[index].classList.value.includes("show")) {
      h3[index].style.fontWeight = "700";
    } else {
      h3[index].style.fontWeight = "300";
    }
  });
});
