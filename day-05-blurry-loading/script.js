const loading = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let loadingPercentage = 0;

const interval = setInterval(() => {
  blurring();
}, 20);

const blurring = () => {
  loadingPercentage++;
  loading.innerHTML = `${loadingPercentage} %`;
  bg.style.filter = `blur(${scale(loadingPercentage, 0, 100, 30, 0)}px)`;

  if (loadingPercentage === 100) {
    clearInterval(interval);
    loading.innerHTML = "";
  }
};

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
