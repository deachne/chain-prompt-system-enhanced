# Analytics Documentation

## Overview
The analytics system provides insights into the performance and usage of the chain prompt system. It collects non-personal metrics to help improve the system's effectiveness.

## Available Metrics

### 1. Chain Execution Metrics
```json
{
    "chain_id": "validation-chain",
    "success": true,
    "duration_ms": 1200,
    "error_count": 0,
    "usage_count": 15
}
```
- **track_success**: Records success/failure of chain executions
- **track_duration**: Measures time taken for chain completion
- **track_errors**: Logs error types and frequencies
- **track_usage**: Counts how often each chain is used

### 2. Validation Metrics
```json
{
    "validator": "tech-stack",
    "pass_rate": 0.85,
    "common_failures": [
        "missing_dependency_version",
        "incompatible_frameworks"
    ],
    "fix_attempts": 2
}
```
- **track_pass_rate**: Percentage of successful validations
- **track_common_failures**: Most frequent validation issues
- **track_fix_attempts**: Number of attempts needed to fix issues

### 3. Performance Metrics
```json
{
    "response_time_ms": 250,
    "memory_usage_mb": 128,
    "cpu_usage_percent": 15
}
```
- **track_response_time**: System response latency
- **track_resource_usage**: Resource consumption patterns

## Using Analytics Data

### 1. View Current Metrics
```javascript
// Example query to view chain success rates
const metrics = await analytics.getMetrics('chain_execution');
console.log(metrics.success_rate);
```

### 2. Generate Reports
```javascript
// Generate weekly performance report
const report = await analytics.generateReport({
    timeframe: 'weekly',
    metrics: ['chain_execution', 'validation']
});
```

### 3. Identify Improvements
```javascript
// Find most problematic chains
const issues = await analytics.findBottlenecks({
    threshold: 0.8,
    metric: 'success_rate'
});
```

## Privacy & Data Management

### Data Collection
- No personal information is collected
- Only project-level metrics are stored
- All data is kept locally

### Data Retention
- Logs are kept for 30 days by default
- Older data is automatically cleaned up
- Data is stored in JSON format for easy processing

### Configuration Options
```json
{
    "analytics": {
        "enabled": true,
        "storage": {
            "retention_days": 30,
            "path": ".windsurf/analytics/logs"
        }
    }
}
```

## Best Practices

1. **Regular Review**
   - Check metrics weekly
   - Look for patterns in failures
   - Monitor performance trends

2. **Using Insights**
   - Identify commonly failing validations
   - Optimize slow-performing chains
   - Improve error-prone processes

3. **Maintenance**
   - Clean up old logs regularly
   - Back up important metrics
   - Update tracking configurations as needed

## Example Queries

### 1. Success Rate Analysis
```javascript
// Get success rate for specific chain
const chainMetrics = await analytics.query({
    metric: 'chain_execution',
    chain: 'tech-stack-validation',
    timeframe: 'last_7_days'
});
```

### 2. Performance Tracking
```javascript
// Track average response times
const performance = await analytics.query({
    metric: 'performance',
    type: 'response_time',
    aggregate: 'average'
});
```

### 3. Validation Patterns
```javascript
// Find most common validation issues
const validationIssues = await analytics.query({
    metric: 'validation',
    type: 'common_failures',
    limit: 5
});
```

## Integration with AI

The analytics system is designed to work seamlessly with AI assistance:

1. **AI-Powered Insights**
   - Automatic pattern detection
   - Anomaly identification
   - Improvement suggestions

2. **Predictive Analytics**
   - Forecast potential issues
   - Suggest optimizations
   - Recommend best practices

3. **Adaptive Improvements**
   - Auto-adjust validation rules
   - Optimize chain sequences
   - Enhance error handling
