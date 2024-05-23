const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
    region: 'ap-south-1',
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'RemotiveJobs';

async function storeInDynamoDB(jobs) {
    const params = {
        TableName: TABLE_NAME,
        Item: {
            jobId: new Date().getTime().toString(), // Using timestamp as jobId
            jobs: jobs,
        },
    };

    try {
        await dynamoDB.put(params).promise();
        console.log('Data stored successfully in DynamoDB');
    } catch (error) {
        console.error('Error storing data in DynamoDB:', error);
    }
}

module.exports = storeInDynamoDB;