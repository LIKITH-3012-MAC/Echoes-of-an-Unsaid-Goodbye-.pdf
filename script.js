const pdfFile = 'https://pdfhost.io/v/bxCpZ8TVVm_Echoes_of_an_Unsaid_Goodbye';

const readBtn = document.getElementById('readBook');
const downloadBtn = document.getElementById('downloadBook');
const modal = document.getElementById('pdfModal');
const pdfFrame = document.getElementById('pdfFrame');
const closeModal = document.querySelector('.close');

readBtn.onclick = () => {
  pdfFrame.src = pdfFile;
  modal.style.display = 'block';
};

downloadBtn.onclick = () => {
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'Echoes_of_an_Unsaid_Goodbye.pdf';
  link.click();
};

closeModal.onclick = () => {
  modal.style.display = 'none';
  pdfFrame.src = '';
};

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    pdfFrame.src = '';
  }
};

/* Particles */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() - 0.5;
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
  }
  draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particles = [];
  for (let i = 0; i < 100; i++) particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();
