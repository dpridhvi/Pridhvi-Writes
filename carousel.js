const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');

let index = 0;

// Create dots dynamically
images.forEach((img,i)=>{
    const dot=document.createElement('span');
    if(i===0) dot.classList.add('active');
    dot.addEventListener('click',()=>{ index=i; updateCarousel(); });
    dotsContainer.appendChild(dot);
});
const dots=dotsContainer.querySelectorAll('span');

function updateCarousel(){
    carousel.style.transform=`translateX(-${index*100}%)`;
    dots.forEach(d=>d.classList.remove('active'));
    dots[index].classList.add('active');
}

// Arrows
next.addEventListener('click',()=>{ if(images.length<=1) return; index=(index+1)%images.length; updateCarousel(); });
prev.addEventListener('click',()=>{ if(images.length<=1) return; index=(index-1+images.length)%images.length; updateCarousel(); });

// Auto-slide every 3s
setInterval(()=>{ if(images.length<=1) return; index=(index+1)%images.length; updateCarousel(); },3000);
