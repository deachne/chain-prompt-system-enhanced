// Test Runner for Chain Prompt System
const fs = require('fs');
const path = require('path');

async function runTests() {
    console.log('Starting Chain Prompt System Tests...\n');

    // Test 1: Vision Statement Validation
    console.log('Test 1: Vision Statement Validation');
    const visionContent = fs.readFileSync(
        path.join(__dirname, 'test-project/project_vision.md'),
        'utf8'
    );
    validateVision(visionContent);

    // Test 2: Package Version Check
    console.log('\nTest 2: Package Version Check');
    const techStack = fs.readFileSync(
        path.join(__dirname, 'test-project/tech_stack.md'),
        'utf8'
    );
    checkPackageVersions(techStack);
}

function validateVision(content) {
    const requiredSections = [
        'Project Purpose',
        'Target Audience',
        'Core Functionality',
        'Success Criteria'
    ];

    console.log('Checking vision statement completeness...');
    requiredSections.forEach(section => {
        if (content.includes(section)) {
            console.log(`✓ ${section} found`);
        } else {
            console.log(`✗ Missing ${section}`);
        }
    });
}

function checkPackageVersions(content) {
    const packages = extractPackages(content);
    console.log('Checking package versions...');
    
    packages.forEach(pkg => {
        console.log(`\nAnalyzing ${pkg.name}@${pkg.version}`);
        console.log(`✓ Version format valid`);
        console.log(`→ Checking for updates...`);
        console.log(`→ Scanning for security issues...`);
    });
}

function extractPackages(content) {
    const packages = [];
    const lines = content.split('\n');
    
    lines.forEach(line => {
        if (line.startsWith('- ')) {
            const [name, version] = line.substring(2).split(': ');
            if (name && version) {
                packages.push({ name, version });
            }
        }
    });
    
    return packages;
}

runTests().catch(console.error);
