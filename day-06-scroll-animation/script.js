const contentBoxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }else{
            entry.target.classList.remove('visible');
        }
    })
})

contentBoxes.forEach((box) => {
    observer.observe(box);
  });