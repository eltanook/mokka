const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'data/ejercicios resueltos');
const outputFile = path.join(__dirname, 'data/ejercicios resueltos/clean_all.md');

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.md') && f !== 'clean_all.md');
let allText = '';

for (const file of files) {
  const content = fs.readFileSync(path.join(inputDir, file), 'utf8');
  
  // Strip lines starting with [imageX]: <data:image
  let cleanContent = content.replace(/^\[image\d+\]:\s*<data:image.*?$/gm, '');
  
  // Strip ![][imageX]
  cleanContent = cleanContent.replace(/!\[\]\[image\d+\]/g, '');
  
  allText += `\n\n======================================================\n`;
  allText += `FILE: ${file}\n`;
  allText += `======================================================\n\n`;
  allText += cleanContent.trim();
}

fs.writeFileSync(outputFile, allText);
console.log('Cleaned markdowns written to clean_all.md');
