import degit from "degit";

async function main() {
  const projectName = process.argv[2] || "my-app";

  console.log(`🚀 Creating a new project: ${projectName}...`);

  // ✅ Use proper degit format (no https://)
  const repo = "Jitesh02/Bluent-Template";
  const emitter = degit(repo, { cache: false, force: true, verbose: true });

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
    process.exit(1);
  }
}

// ✅ Wrap code inside async function (no top-level await)
main();
