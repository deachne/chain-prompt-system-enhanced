# Package Version Check Prompt

## Purpose
Guide the validation and selection of package versions, ensuring compatibility and security.

## Command Triggers
- `#check-versions` - Analyze current package versions
- `#update-check` - Check for available updates
- `#security-scan` - Scan for security vulnerabilities

## Workflow Integration
This prompt is typically executed after the tech stack selection and before architecture design.

## Process

### Step 1: Package Analysis
```
Analyze the following package requirements:
1. Required packages and current versions
2. Compatibility constraints
3. Security requirements
```

### Step 2: Version Validation
```
For each package:
1. Check current version against latest stable
2. Identify known vulnerabilities
3. Verify compatibility with other packages
```

### Step 3: Recommendations
```
Generate:
1. Version update recommendations
2. Security advisory notes
3. Compatibility matrix
```

## Output Format
```json
{
    "packages": [
        {
            "name": "package-name",
            "currentVersion": "x.y.z",
            "recommendedVersion": "a.b.c",
            "securityIssues": [],
            "compatibilityNotes": ""
        }
    ],
    "recommendations": [],
    "securityNotes": []
}
```

## Validation Rules
1. All specified packages must be verified
2. Security vulnerabilities must be identified
3. Compatibility matrix must be complete
