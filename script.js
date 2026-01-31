// Full PDF URL
const pdfFile = 'https://likith-3012-mac.github.io/Echoes-of-an-Unsaid-Goodbye-.pdf/Echoes-of-an-Unsaid-Goodbyes.pdf';

// Buttons
const readBtn = document.getElementById('readBook');
const downloadBtn = document.getElementById('downloadBook');

// Modal
const modal = document.getElementById('pdfModal');
const pdfFrame = document.getElementById('pdfFrame');
const closeModal = document.getElementsByClassName('close')[0];

// Open PDF in modal
readBtn.addEventListener('click', () => {
  pdfFrame.src = pdfFile;
  modal.style.display = 'block';
});

// Download PDF
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'Echoes-of-an-Unsaid-Goodbye.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Close modal
closeModal.onclick = function() {
  modal.style.display = 'none';
  pdfFrame.src = '';
}

// Close modal on outside click
window.onclick = function(event) {
  if(event.target == modal){
    modal.style.display = 'none';
    pdfFrame.src = '';
  }
}

// Optional: Simple particle effect for hero
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.size = Math.random()*2+1;
    this.speedX = Math.random()*0.5-0.25;
    this.speedY = Math.random()*0.5-0.25;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x > canvas.width) this.x = 0;
    if(this.x < 0) this.x = canvas.width;
    if(this.y > canvas.height) this.y = 0;
    if(this.y < 0) this.y = canvas.height;
  }
  draw(){
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

function initParticles(){
  particlesArray = [];
  for(let i=0;i<100;i++){
    particlesArray.push(new Particle());
  }
}
function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});
