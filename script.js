const pdfFile = 'https://pdfhost.io/v/bxCpZ8TVVm_Echoes_of_an_Unsaid_Goodbye';

const readBtn = document.getElementById('readBook');
const downloadBtn = document.getElementById('downloadBook');
const modal = document.getElementById('pdfModal');
const pdfFrame = document.getElementById('pdfFrame');
const closeModal = document.querySelector('.close');

// Open PDF in modal
readBtn.onclick = () => {
  pdfFrame.src = pdfFile;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling background
};

// Download PDF 
// Note: Since pdfhost is a third party, we open it in a new tab 
// as browser security prevents forced downloads from external domains.
downloadBtn.onclick = () => {
  window.open(pdfFile, '_blank');
};

// Close functions
const closeAll = () => {
  modal.style.display = 'none';
  pdfFrame.src = '';
  document.body.style.overflow = 'auto';
};

closeModal.onclick = closeAll;
window.onclick = e => { if (e.target === modal) closeAll(); };

// Optimized Particles Background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
}

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
    }
  }
  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const count = (canvas.width * canvas.height) / 15000; // Density based on screen size
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize();
animate();
