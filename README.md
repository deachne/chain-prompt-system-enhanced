# Software Development Prompt Library

> **⚠️ Work in Progress**: 
> - The library contains prompts at various stages of development
> - Prompts within the [Post-Scaffolding Sprint Workflow](workflows/assistant-specific/aider/sprint/post-scaffolding-sprint-workflow-chain.md) have been most rigorously tested
> - Many individual prompts are not yet part of a defined workflow and have not been fully tested
> - Ongoing development and validation is in progress

> **📝 Note**: 
> This project is a fork of [software-dev-prompt-library](https://github.com/aider-project/software-dev-prompt-library), originally designed for Aider. 
> We've enhanced it specifically for the Windsurf environment, adding features like:
> - Seamless Windsurf/Cascade AI integration
> - Enhanced validation system
> - Smart package management
> - Analytics dashboard
> - Real-time monitoring
>
> Many thanks to the original authors for their excellent foundation!

A collection of AI-powered prompts designed to streamline software development workflows, optimized for the Windsurf development environment. Each prompt is crafted to work seamlessly with Windsurf's Cascade AI assistant, providing consistent guidance across different development phases.

## ⚡ Essential Windsurf Tips

### 🚀 Getting Started Right
1. **First Time Setup**:
   ```bash
   # IMPORTANT: Always initialize Windsurf before starting!
   windsurf init
   ```
   - Open Windsurf
   - File > Open Folder
   - Create/select your project folder
   - Terminal > New Terminal
   - Run `windsurf init`
   - Then start chatting with Cascade

2. **Optional Features to Consider**:
   - Analytics tracking (opt-in for project insights)
   - Real-time validation (configurable in settings)
   - Chain prompt system:
     * When enabled:
       - Structured step-by-step workflows
       - Automatic validation at each step
       - Progress tracking
       - Dependencies management
       - Best practices enforcement
     * When disabled:
       - Basic conversation with Cascade
       - Standard code assistance
       - File editing capabilities
       - Manual workflow management
   
   *All features can be configured in `.windsurf/config.json` after initialization*

3. **Common Pitfalls to Avoid**:
   - ❌ Don't start coding before running `windsurf init`
   - ❌ Don't skip the initialization step
   - ✅ Always check for `.windsurf` directory

### 💡 Pro Tips
- Use `Ctrl+Shift+P` for quick commands
- Split terminal for multiple tasks
- Enable project-specific settings
- Utilize chain prompts for complex workflows

### 🔧 Quick Troubleshooting
- No enhanced features? Check for `.windsurf` directory
- Features not working? Verify initialization
- Need help? Ask Cascade about "windsurf features"

## Quick Start with Windsurf

1. **Initialize Your Project**
   ```bash
   # Create a new project directory
   mkdir my-project
   cd my-project
   
   # Initialize Windsurf environment
   windsurf init
   ```

2. **Start Development**
   - Open your project in Windsurf
   - The chain prompt system automatically activates
   - Start with "Help me build..." or "Create a new..."
   - Let Cascade AI guide you through the process

3. **Access Features**
   - All prompts and chains are automatically available
   - No manual configuration needed
   - Real-time validation and monitoring
   - Integrated analytics dashboard

## Core Features

### AI Workflow Chains
- Structured sequences of connected prompts
- Input/output dependencies between phases
- Verification points for chain integrity
- Systematic development processes
- Progress tracking and validation
- Analytics and performance monitoring

### Enhanced Validation System
- Multi-step validation process
- Comprehensive validation rules
- Automated checks for:
  * Vision Statement
  * Requirements
  * Tech Stack
  * Architecture
  * Security
  * Performance

### Smart Package Management
- Automated dependency tracking
- Version compatibility checks
- Security vulnerability scanning
- Update monitoring
- Performance impact analysis

### Tech Stack Evaluation
- Intelligent stack selection
- Compatibility scoring
- Performance metrics
- Best practices validation
- Integration testing

## Windsurf Integration Features

### Seamless Setup
- Zero configuration required
- Automatic environment detection
- Integrated with Windsurf's command palette
- Context-aware assistance

### Real-time Validation
- Instant feedback on changes
- Automated error detection
- Suggested fixes
- Best practice enforcement

### Smart Automation
- Automated project structuring
- Intelligent file organization
- Documentation generation
- Test creation
- Git integration

### Development Workflow
- Guided development process
- Context-aware suggestions
- Automated quality checks
- Progress tracking
- Performance monitoring

## Project Structure
```plaintext
software-dev-prompt-library/
├── .windsurf/                      # Windsurf configuration
│   ├── config.json                 # Core configuration
│   └── commands/                   # Custom commands
├── prompts/
│   ├── architecture/
│   ├── documentation/
│   ├── planning/
│   ├── testing/
│   ├── visualization/
│   ├── validation/                 # Enhanced validation rules
│   ├── tech-stack/                 # Stack evaluation
│   └── analytics/
├── workflows/
│   └── [workflow guides]
├── docs/
│   ├── getting-started.md
│   ├── prompt-guidelines.md
│   ├── ARCHITECTURE.md
│   └── ANALYTICS.md
└── examples/
    └── analytics/
```

## Key Benefits
- Seamless integration with Windsurf environment
- Zero-configuration setup for immediate productivity
- Intelligent project initialization and management
- Comprehensive validation and monitoring
- Automated best practices enforcement
- Real-time feedback and suggestions
- Built-in analytics and performance tracking
- Extensible and customizable workflow
- Language and framework agnostic
- Continuous quality assurance
