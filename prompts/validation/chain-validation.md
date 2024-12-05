# Chain Validation Prompt

## Purpose
Ensure each step in the development chain meets quality and completeness requirements before proceeding.

## Command Triggers
- `#validate-step` - Validate current step
- `#check-dependencies` - Verify all required inputs exist
- `#validation-status` - Show validation status of all steps

## Validation Checkpoints

### Vision Statement Validation
```
Check for:
1. Clear project purpose
2. Target audience definition
3. Core functionality description
4. Success criteria
```

### Requirements Validation
```
Verify:
1. Functional requirements listed
2. Non-functional requirements defined
3. Priority levels assigned
4. Dependencies identified
```

### Tech Stack Validation
```
Confirm:
1. All required technologies listed
2. Version compatibility verified
3. Security requirements met
4. Integration points defined
```

### Architecture Validation
```
Ensure:
1. Component relationships defined
2. Data flow documented
3. Security measures specified
4. Scalability considerations included
```

## Output Format
```json
{
    "stepName": "step-id",
    "status": "pass|fail|warning",
    "checks": [
        {
            "name": "check-name",
            "result": "pass|fail",
            "message": "details"
        }
    ],
    "dependencies": {
        "required": ["list", "of", "dependencies"],
        "status": "complete|incomplete"
    },
    "recommendations": []
}
```

## Chain Integrity Rules
1. No step can be marked complete without passing validation
2. Dependencies must be validated before dependent steps
3. Failed validations must include specific improvement recommendations
