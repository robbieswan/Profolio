const fs = require('fs');
const PDFParser = require('pdf-parse');

async function extractTextFromPDF(pdfPath) {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const options = {};

    const { text } = await PDFParser(dataBuffer, options);
    return text;
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw error;
  }
}

// Usage example
const filePath = "C:\\Users\\robbi\\OneDrive\\Desktop\\PROFOLIO CODE\\AI\\resume.pdf";

extractTextFromPDF(filePath)
  .then(text => {
    console.log('Extracted text:');
    console.log(text);
  })
  .catch(error => {
    console.error('Error:', error);
  });
