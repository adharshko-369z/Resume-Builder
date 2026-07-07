import html2pdf from 'html2pdf.js';

export const downloadResumePDF = () => {
  const element = document.getElementById('resume-to-download');

  if (!element) {
    alert('Resume not found for download');
    return;
  }

  const options = {
    margin: [10, 10, 10, 10], // top, left, bottom, right in mm
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
  };

  html2pdf().set(options).from(element).save();
};
