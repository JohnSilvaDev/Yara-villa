const Jimp = require("jimp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "../../client/public");
const images = [
  "room_bunk2.JPG", "gallery2.JPG", "gemini.JPG", "gallery102.JPG", 
  "Yara Floating Villa (4).JPG", "yarabathroom.JPG", "gallery5.JPG", 
  "gallery3.JPG", "Yara Floating Villa (16).JPG", "Yara Floating Villa (1).JPG", 
  "Yara Floating Villa (5).JPG", "Yara Floating Villa (6).JPG", "gallery4.JPG", 
  "Yara Floating Villa (3).JPG", "gallery11.JPG", "gallery9.JPG", 
  "gallery12.JPG", "room_master2.JPG"
];

async function optimize() {
  console.log("Starting optimization...");
  for (const imgName of images) {
    const filePath = path.join(PUBLIC_DIR, imgName);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found skipped: ${imgName}`);
      continue;
    }

    try {
      const image = await Jimp.read(filePath);
      console.log(`Processing ${imgName}... (Current size: ${(fs.statSync(filePath).size / 1024 / 1024).toFixed(2)} MB)`);
      
      // Resize to max width 1920px while maintaining aspect ratio
      if (image.bitmap.width > 1920) {
        image.resize(1920, Jimp.AUTO);
      }

      await image.quality(80).writeAsync(filePath);
      console.log(`Optimized ${imgName} successfully.`);
    } catch (err) {
      console.error(`Error processing ${imgName}:`, err);
    }
  }
  console.log("All optimizations complete!");
}

optimize();
