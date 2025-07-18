let faqbox = document.querySelectorAll('.faqbox');
let toggletheme = document.querySelector('#toggleTheme');
let input = document.querySelector('.input')
let button = document.querySelector('.btn')
let text = document.querySelector('.text')

faqbox.forEach((box) => {
  box.addEventListener('click', () => {
    let answer = box.nextElementSibling; // یہی ہے آپ کا answer
    answer.classList.toggle('active');
  });
});

let video = document.querySelector("video");

video.addEventListener("mouseenter", () => video.play());
video.addEventListener("mouseleave", () => video.pause());


let image = document.querySelector('#image')

image.addEventListener('click', ()=>{
  location.reload()
});


input.addEventListener('input', () => {
  if (input.value.length < 3) {
    input.style.borderColor = 'red';
    input.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
    input.style.color = 'red';
  } else {
    input.style.borderColor = 'limegreen';
    input.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
    input.style.color = 'white';
  }
});


button.addEventListener('click', ()=>{
  text.innerHTML =`<p style="color:white; font-size:20px;">Thanks! We'll contact you soon 📩</p>`;
})
