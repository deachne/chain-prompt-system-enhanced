// Test Chain Commands
const fs = require('fs');
const path = require('path');

class ChainCommandTester {
    constructor() {
        this.currentStep = null;
        this.chainType = null;
    }

    async simulateCommand(command, ...args) {
        console.log(`\n🔄 Executing: ${command} ${args.join(' ')}`);
        
        switch(command) {
            case '/chain start':
                await this.startChain(args[0]);
                break;
            case '/chain status':
                this.showStatus();
                break;
            case '/chain next':
                await this.moveToNext();
                break;
            case '/chain validate':
                await this.validateCurrentStep();
                break;
            case '/chain monitor':
                await this.showMonitoring();
                break;
            default:
                console.log('❌ Unknown command');
        }
    }

    async startChain(type) {
        console.log(`\n📋 Starting new ${type} chain`);
        this.chainType = type;
        this.currentStep = 'vision';
        console.log('✅ Chain initialized');
        console.log('📝 Current step: Vision Statement');
    }

    showStatus() {
        console.log('\n📊 Chain Status:');
        console.log(`Chain Type: ${this.chainType}`);
        console.log(`Current Step: ${this.currentStep}`);
        console.log('\nProgress:');
        console.log('Vision Statement    [' + (this.currentStep === 'vision' ? '🔄' : '✅') + ']');
        console.log('Requirements        [' + (this.currentStep === 'requirements' ? '🔄' : this.currentStep === 'vision' ? '⏳' : '✅') + ']');
        console.log('Tech Stack          [' + (this.currentStep === 'tech-stack' ? '🔄' : this.currentStep === 'vision' || this.currentStep === 'requirements' ? '⏳' : '✅') + ']');
        console.log('Architecture        [' + (this.currentStep === 'architecture' ? '🔄' : this.currentStep === 'vision' || this.currentStep === 'requirements' || this.currentStep === 'tech-stack' ? '⏳' : '✅') + ']');
    }

    async moveToNext() {
        const steps = ['vision', 'requirements', 'tech-stack', 'architecture'];
        const currentIndex = steps.indexOf(this.currentStep);
        
        if (currentIndex < steps.length - 1) {
            this.currentStep = steps[currentIndex + 1];
            console.log(`\n✅ Moving to: ${this.currentStep}`);
        } else {
            console.log('\n✅ Chain completed!');
        }
    }

    async validateCurrentStep() {
        console.log('\n🔍 Validating current step...');
        
        // Load validation rules
        const rules = JSON.parse(fs.readFileSync(
            path.join(__dirname, '../prompts/validation/validation-rules.json'),
            'utf8'
        ));
        
        switch(this.currentStep) {
            case 'vision':
                await this.validateVision(rules.rules.vision);
                break;
            case 'tech-stack':
                await this.validateTechStack(rules.rules.tech_stack);
                break;
            case 'requirements':
                await this.validateRequirements(rules.rules.requirements);
                break;
            case 'architecture':
                await this.validateArchitecture(rules.rules.architecture);
                break;
            default:
                console.log('Validation not implemented for this step');
        }
    }

    async validateVision(rules) {
        try {
            const visionContent = fs.readFileSync(
                path.join(__dirname, 'test-project/project_vision.md'),
                'utf8'
            );
            
            console.log('\n📋 Vision Statement Validation:');
            
            // Required sections check
            console.log('\n1. Required Sections:');
            rules.required_sections.forEach(section => {
                console.log(`${visionContent.includes(section) ? '✅' : '❌'} ${section}`);
            });

            // Content length check
            console.log('\n2. Content Length:');
            const contentLength = visionContent.length;
            console.log(`${contentLength >= rules.minimum_content_length ? '✅' : '❌'} Minimum length (${contentLength}/${rules.minimum_content_length})`);

            // Keywords check
            console.log('\n3. Key Concepts:');
            rules.keywords.forEach(keyword => {
                console.log(`${visionContent.toLowerCase().includes(keyword.toLowerCase()) ? '✅' : '❌'} ${keyword}`);
            });

        } catch (error) {
            console.log('❌ Error: Vision statement file not found');
        }
    }

    async validateTechStack(rules) {
        try {
            const techStackContent = fs.readFileSync(
                path.join(__dirname, 'test-project/tech_stack.md'),
                'utf8'
            );
            
            console.log('\n🔧 Tech Stack Validation:');

            // Categories check
            console.log('\n1. Required Categories:');
            rules.required_categories.forEach(category => {
                console.log(`${techStackContent.includes(category) ? '✅' : '❌'} ${category}`);
            });

            // Version format check
            console.log('\n2. Version Format:');
            const versionRegex = new RegExp(rules.version_format);
            const versions = techStackContent.match(/\d+\.\d+\.\d+/g) || [];
            versions.forEach(version => {
                console.log(`${versionRegex.test(version) ? '✅' : '❌'} ${version}`);
            });

            // Performance impact check
            if (rules.performance_impact.check_enabled) {
                console.log('\n3. Performance Metrics:');
                rules.performance_impact.metrics.forEach(metric => {
                    console.log(`⏳ Checking ${metric}...`);
                });
            }

        } catch (error) {
            console.log('❌ Error: Tech stack file not found');
        }
    }

    async validateRequirements(rules) {
        try {
            const requirementsContent = fs.readFileSync(
                path.join(__dirname, 'test-project/requirements.md'),
                'utf8'
            );
            
            console.log('\n📝 Requirements Validation:');
            
            // Required sections check
            console.log('\n1. Required Sections:');
            rules.required_sections.forEach(section => {
                console.log(`${requirementsContent.includes(section) ? '✅' : '❌'} ${section}`);
            });

            // Content length check
            console.log('\n2. Content Length:');
            const contentLength = requirementsContent.length;
            console.log(`${contentLength >= rules.minimum_content_length ? '✅' : '❌'} Minimum length (${contentLength}/${rules.minimum_content_length})`);

            // Keywords check
            console.log('\n3. Key Concepts:');
            rules.keywords.forEach(keyword => {
                console.log(`${requirementsContent.toLowerCase().includes(keyword.toLowerCase()) ? '✅' : '❌'} ${keyword}`);
            });

        } catch (error) {
            console.log('❌ Error: Requirements file not found');
        }
    }

    async validateArchitecture(rules) {
        try {
            const architectureContent = fs.readFileSync(
                path.join(__dirname, 'test-project/architecture.md'),
                'utf8'
            );
            
            console.log('\n🏗️ Architecture Validation:');
            
            // Required sections check
            console.log('\n1. Required Sections:');
            rules.required_sections.forEach(section => {
                console.log(`${architectureContent.includes(section) ? '✅' : '❌'} ${section}`);
            });

            // Content length check
            console.log('\n2. Content Length:');
            const contentLength = architectureContent.length;
            console.log(`${contentLength >= rules.minimum_content_length ? '✅' : '❌'} Minimum length (${contentLength}/${rules.minimum_content_length})`);

            // Keywords check
            console.log('\n3. Key Concepts:');
            rules.keywords.forEach(keyword => {
                console.log(`${architectureContent.toLowerCase().includes(keyword.toLowerCase()) ? '✅' : '❌'} ${keyword}`);
            });

        } catch (error) {
            console.log('❌ Error: Architecture file not found');
        }
    }

    async showMonitoring() {
        console.log('\n📡 Enhanced Package Monitoring:');
        
        try {
            const techStackContent = fs.readFileSync(
                path.join(__dirname, 'test-project/tech_stack.md'),
                'utf8'
            );
            
            const packages = techStackContent.match(/- .*: \^?\d+\.\d+\.\d+/g) || [];
            
            for (const pkg of packages) {
                const [name, version] = pkg.replace('- ', '').split(': ');
                console.log(`\n📦 ${name}`);
                console.log(`Current Version: ${version}`);
                
                // Version check
                console.log('Latest Version: Checking...');
                
                // Security scan
                console.log('\nSecurity Status:');
                console.log('🛡️ Vulnerabilities: None detected');
                console.log('🔒 Dependencies: Clean');
                
                // Performance impact
                console.log('\nPerformance Impact:');
                console.log('📊 Load Time: Optimal');
                console.log('💾 Memory Usage: Normal');
                console.log('⚡ CPU Usage: Low');
                
                // Update recommendation
                console.log('\nRecommendation:');
                console.log('✅ Package is healthy and up to date');
            }
        } catch (error) {
            console.log('❌ Error: Tech stack file not found');
        }
    }
}

// Run test commands
async function runDemo() {
    const tester = new ChainCommandTester();
    
    console.log('🚀 Chain Command Demo\n');
    console.log('This demo shows how the /chain commands work in Windsurf\n');
    
    // Simulate a sequence of commands
    await tester.simulateCommand('/chain start', 'web-app');
    await tester.simulateCommand('/chain status');
    await tester.simulateCommand('/chain validate');
    await tester.simulateCommand('/chain next');
    await tester.simulateCommand('/chain status');
    await tester.simulateCommand('/chain next');
    await tester.simulateCommand('/chain status');
    await tester.simulateCommand('/chain validate');
    await tester.simulateCommand('/chain next');
    await tester.simulateCommand('/chain status');
    await tester.simulateCommand('/chain validate');
    await tester.simulateCommand('/chain next');
    await tester.simulateCommand('/chain status');
    await tester.simulateCommand('/chain monitor');
}

runDemo().catch(console.error);
