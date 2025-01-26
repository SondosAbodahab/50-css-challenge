const steps = document.querySelectorAll(".step");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let counter = 1;

nextBtn.addEventListener("click", () => {
  if (counter < steps.length) {
    counter++;
    addActiveClass();
  }
});

prevBtn.addEventListener("click", () => {
  if (counter > 1) {
    counter = counter - 1;
    addActiveClass();
  }
});

const addActiveClass = () => {
  steps.forEach((step) => {
    step.classList.remove("active");
    if (Number(step.innerHTML) === counter) {
      step.classList.add("active");
    }
  });
  dimeActivateButtons();
};

const dimeActivateButtons = () => {
  counter === 4 ? dimeButton(nextBtn) : activateButton(nextBtn);
  counter === 1 ? dimeButton(prevBtn) : activateButton(prevBtn);
};

const dimeButton = (button) => {
  button.classList.remove("active");
};
const activateButton = (button) => {
  button.classList.add("active");
};
