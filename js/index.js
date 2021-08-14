const accordionItems = [...document.querySelectorAll(".accordion__item")];

function loopIncrease(start, number) {
  for (let i = start; i <= number; i++) {
    accordionItems[i + 1].classList.remove("collapse");
  }
}

function loopDecrease(start, number) {
  for (let i = number; i >= start; i--) {
    accordionItems[i - 1].classList.remove("collapse");
  }
}

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener("click", (e) => {
    if (i === 0) {
      accordionItems[i].classList.toggle("collapse");
      loopIncrease(0, 4);
    } else if (i === 1) {
      accordionItems[i].classList.toggle("collapse");
      accordionItems[i - 1].classList.remove("collapse");
      loopIncrease(1, 4);
    } else if (i === 2) {
      accordionItems[i].classList.toggle("collapse");
      accordionItems[i - 1].classList.remove("collapse");
      accordionItems[i - 2].classList.remove("collapse");
      // loopDecrease(0, 2);
      loopIncrease(2, 4);
    } else if (i === 3) {
      accordionItems[i].classList.toggle("collapse");
      accordionItems[i + 1].classList.remove("collapse");
      loopDecrease(0, 3);
    } else if (i === 4) {
      accordionItems[i].classList.toggle("collapse");
      loopDecrease(0, 4);
    }
  });
}
