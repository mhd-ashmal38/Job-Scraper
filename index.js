const fetchJobs = require('./fetchJobs');
const storeInDynamoDB = require('./storeInDynamoDB');

async function main() {
    try {
        const jobs = await fetchJobs();
        console.log('Fetched jobs:', jobs);

        // await storeInDynamoDB(jobs);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();