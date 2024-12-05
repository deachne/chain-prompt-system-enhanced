// Analytics Query Examples

// Import analytics module
const analytics = require('../lib/analytics');

// 1. Basic Success Rate Query
async function getChainSuccessRate(chainId, timeframe = '7d') {
    const metrics = await analytics.query({
        metric: 'chain_execution',
        filter: {
            chain_id: chainId,
            timeframe: timeframe
        }
    });
    
    return {
        success_rate: metrics.success_count / metrics.total_count,
        total_executions: metrics.total_count,
        average_duration: metrics.avg_duration_ms
    };
}

// 2. Validation Performance Analysis
async function analyzeValidationPerformance() {
    const validationMetrics = await analytics.query({
        metric: 'validation',
        aggregate: ['pass_rate', 'common_failures'],
        timeframe: '30d'
    });
    
    return {
        overall_pass_rate: validationMetrics.pass_rate,
        problem_areas: validationMetrics.common_failures.slice(0, 5),
        improvement_suggestions: await analytics.getImprovement
    };
}

// 3. Resource Usage Tracking
async function trackResourceUsage(timeframe = '24h') {
    const performance = await analytics.query({
        metric: 'performance',
        fields: ['response_time', 'memory_usage', 'cpu_usage'],
        timeframe: timeframe,
        interval: '1h'
    });
    
    return {
        average_response_time: performance.avg_response_time_ms,
        peak_memory_usage: performance.max_memory_mb,
        cpu_utilization: performance.avg_cpu_percent
    };
}

// 4. Chain Usage Patterns
async function analyzeChainUsage() {
    const usage = await analytics.query({
        metric: 'chain_execution',
        aggregate: 'usage_count',
        group_by: 'chain_id',
        order: 'desc',
        limit: 10
    });
    
    return {
        most_used_chains: usage.chains,
        usage_distribution: usage.distribution
    };
}

// 5. Error Pattern Detection
async function detectErrorPatterns() {
    const errors = await analytics.query({
        metric: 'chain_execution',
        filter: {
            success: false
        },
        group_by: ['error_type', 'chain_id'],
        timeframe: '30d'
    });
    
    return {
        common_errors: errors.patterns,
        affected_chains: errors.impacted_chains,
        suggested_fixes: await analytics.getSuggestedFixes(errors.patterns)
    };
}

// Example usage
async function main() {
    try {
        // Get success rate for tech stack validation
        const successRate = await getChainSuccessRate('tech-stack-validation');
        console.log('Tech Stack Validation Success Rate:', successRate);

        // Analyze validation performance
        const validationAnalysis = await analyzeValidationPerformance();
        console.log('Validation Analysis:', validationAnalysis);

        // Check resource usage
        const resources = await trackResourceUsage();
        console.log('Resource Usage:', resources);

        // Analyze chain usage patterns
        const usagePatterns = await analyzeChainUsage();
        console.log('Usage Patterns:', usagePatterns);

        // Check for error patterns
        const errorAnalysis = await detectErrorPatterns();
        console.log('Error Analysis:', errorAnalysis);
    } catch (error) {
        console.error('Error running analytics:', error);
    }
}

// Export functions for use in other modules
module.exports = {
    getChainSuccessRate,
    analyzeValidationPerformance,
    trackResourceUsage,
    analyzeChainUsage,
    detectErrorPatterns
};
