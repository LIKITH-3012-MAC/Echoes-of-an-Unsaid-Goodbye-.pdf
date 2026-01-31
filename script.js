const readBtn = document.getElementById('readBook');
const downloadBtn = document.getElementById('downloadBook');
const pdfFile = 'book.pdf'; // Make sure book.pdf is in the same folder

// Open PDF in new tab
readBtn.addEventListener('click', () => {
  window.open(pdfFile, '_blank');
});

// Download PDF
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'Echoes_of_an_Unsaid_Goodbye.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

