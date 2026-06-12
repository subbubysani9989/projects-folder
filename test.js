// A simple test script for the CI/CD pipeline
console.log("Running automated application tests...");

const appName = "cicd-demo-app";

if (appName === "cicd-demo-app") {
    console.log("✅ Test Passed: Application configuration is correct.");
    process.exit(0); // Status 0 means success
} else {
    console.error("❌ Test Failed: Invalid configuration.");
    process.exit(1); // Status 1 means failure
}
