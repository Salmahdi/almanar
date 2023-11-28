

/* const elements = document.querySelectorAll(".nav-item");

elements.forEach((element, index) => {
  console.log(element);
  element.addEventListener("click", function () {
  document.querySelector(".active")?.classList.remove("active");
  element.classList.add("active");
  });
  
});
 */


//Counter
let nums = document.querySelectorAll(".nums .num");
let section = document.getElementById("about");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

console.log(document.getElementById("about").offsetTop);

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop / 2) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

// Image Changing
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);


