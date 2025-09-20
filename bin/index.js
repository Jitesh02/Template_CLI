#!/usr/bin/env node
import { execSync } from "child_process";
import degit from "degit";

const projectName = process.argv[2] || "my-app";

console.log(`🚀 Creating a new project: ${projectName}...`);

const repo = "https://github.com/Jitesh02/Bluent-Template"; 
const emitter = degit(repo);

try {
  await emitter.clone(projectName);
  console.log("✅ Template downloaded!");

  console.log(`\n🎉 Project created successfully!\n`);
  console.log(`Next steps:`);
  console.log(`  cd ${projectName}`);
  console.log(`  npm install`);
  console.log(`  npm run dev`);
} catch (err) {
  console.error("❌ Something went wrong:", err);
}
