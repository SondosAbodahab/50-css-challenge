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
  dimeActivateNextBtn();
  dimeActivatePrevBtn()
};

const dimeActivateNextBtn = () => {
  if (counter === 4) {
    dimeNextBtn();
  } else {
    activateNextBtn();
  }
};
const dimeActivatePrevBtn = () => {
    if (counter === 1) {
      dimePrevBtn();
    } else {
      activatePrevBtn();
    }
  };
  
const dimeNextBtn = () => {
  nextBtn.classList.remove("active");
};
const activateNextBtn = () => {
  nextBtn.classList.add("active");
};

const dimePrevBtn = () => {
  prevBtn.classList.remove("active");
};
const activatePrevBtn = () => {
  prevBtn.classList.add("active");
};
