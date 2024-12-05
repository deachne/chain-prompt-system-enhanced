# Package Monitoring and Updates Prompt

## Purpose
Continuously monitor package versions, security advisories, and provide automated update notifications.

## Command Triggers
- `#monitor-start` - Begin monitoring packages
- `#check-updates` - Check for available updates
- `#security-alerts` - View security advisories
- `#monitor-status` - View monitoring status

## Monitoring Features

### Real-time Package Tracking
```
Monitor:
1. Version changes in dependencies
2. Breaking changes in major versions
3. Deprecation notices
4. Community health metrics
```

### Security Advisory Tracking
```
Track:
1. CVE reports
2. Security patches
3. Vulnerability impacts
4. Mitigation recommendations
```

### Update Management
```
Provide:
1. Update priority levels
2. Compatibility impact analysis
3. Update implementation steps
4. Rollback procedures
```

## Notification Format
```json
{
    "type": "update|security|deprecation",
    "priority": "high|medium|low",
    "package": {
        "name": "package-name",
        "currentVersion": "x.y.z",
        "newVersion": "a.b.c",
        "changes": ["list", "of", "changes"]
    },
    "impact": {
        "breaking": boolean,
        "dependencies": ["affected", "packages"],
        "securityLevel": "critical|high|medium|low"
    },
    "recommendations": {
        "action": "update|wait|investigate",
        "steps": ["step1", "step2"],
        "notes": "additional information"
    }
}
```

## Integration Points
1. Package registry webhooks
2. Security advisory APIs
3. GitHub security alerts
4. NPM audit reports
