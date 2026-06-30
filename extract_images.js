const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data', 'ejercicios resueltos');
const outDir = path.join(__dirname, 'public', 'images', 'real');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.md') && f !== 'clean_all.md');

let imageCount = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
  const regex = /\[([^\]]+)\]:\s*<(data:image\/([^;]+);base64,([^>]+))>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const imageName = match[1];
    const ext = match[3];
    const base64Data = match[4];
    
    // Some files might share image names like "image1", so prefix with file index/name
    const safeFilename = `${file.split('.')[0]}_${imageName}.${ext}`;
    const outPath = path.join(outDir, safeFilename);
    
    fs.writeFileSync(outPath, base64Data, 'base64');
    console.log(`Extracted ${safeFilename}`);
    imageCount++;
  }
}

console.log(`Extraction complete. ${imageCount} images extracted.`);
