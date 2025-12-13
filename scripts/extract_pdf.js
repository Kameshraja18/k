const fs = require('fs');
const path = require('path');
const pdfPath = path.resolve(__dirname, '../public/files/cv_pdf/KAMESHRAJA K Resume Final.pdf');
const outDir = path.resolve(__dirname, '../tmp');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function extractWithPdfjs() {
  try {
    // dynamic import to support ESM build
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const data = fs.readFileSync(pdfPath);
    const uint8 = new Uint8Array(data);
    const loadingTask = pdfjsLib.getDocument({ data: uint8 });
    const pdfDoc = await loadingTask.promise;
    let fullText = '';
    for (let i = 1; i <= pdfDoc.numPages; i++) {
      const page = await pdfDoc.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str).join(' ');
      fullText += `\n\n--- Page ${i} ---\n` + strings;
    }
    console.log('\n----- BEGIN EXTRACTED PDF TEXT -----\n');
    console.log(fullText);
    console.log('\n----- END EXTRACTED PDF TEXT -----\n');
    fs.writeFileSync(path.join(outDir, 'resume_text.txt'), fullText, 'utf8');
  } catch (err) {
    console.error('PDF extraction error:', err);
    process.exit(1);
  }
}

extractWithPdfjs();
