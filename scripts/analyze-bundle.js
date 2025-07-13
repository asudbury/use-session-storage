#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("🔍 Analyzing bundle size...\n");

// Build the package
console.log("📦 Building package...");
execSync("npm run build", { stdio: "inherit" });

// Get file sizes
const distPath = path.join(__dirname, "..", "dist");
const files = fs.readdirSync(distPath);

let totalSize = 0;
const fileSizes = [];

files.forEach((file) => {
  const filePath = path.join(distPath, file);
  const stats = fs.statSync(filePath);
  const sizeInKB = Math.round((stats.size / 1024) * 100) / 100;
  totalSize += sizeInKB;
  fileSizes.push({ file, size: sizeInKB });
});

// Display results
console.log("\n📊 Bundle Analysis Results:");
console.log("================================");
fileSizes.forEach(({ file, size }) => {
  console.log(`${file.padEnd(30)} ${size.toString().padStart(8)} KB`);
});
console.log("================================");
console.log(`${"Total".padEnd(30)} ${totalSize.toString().padStart(8)} KB`);

// Warn if bundle is too large
if (totalSize > 100) {
  console.log("\n⚠️  Warning: Bundle size is larger than 100KB");
  console.log("   Consider code splitting or removing unused dependencies");
} else {
  console.log("\n✅ Bundle size looks good!");
}

console.log("\n📝 Recommendations:");
console.log("• Keep the main bundle under 50KB for better performance");
console.log("• Use tree-shaking to remove unused code");
console.log("• Consider lazy loading for non-critical features");
