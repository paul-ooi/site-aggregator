const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const parser = new Parser();

async function crawlFeeds() {
    // Read config file
    const config = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8')
    );
    
    const results = [];

    for (const source of config.sources) {
        try {
            const feed = await parser.parseURL(source.rss);
            
            feed.items.forEach(item => {
                results.push({
                    title: item.title,
                    link: item.link,
                    pubDate: item.pubDate,
                    source: feed.title,
                    sourceUrl: source.url,
                    description: item.contentSnippet
                });
            });
        } catch (error) {
            console.error(`Error processing ${source.rss}:`, error);
        }
    }

    // Ensure data directory exists
    if (!fs.existsSync('data')) {
        fs.mkdirSync('data');
    }

    // Save results to JSON file
    fs.writeFileSync(
        path.join('data', 'feeds.json'),
        JSON.stringify(results, null, 2)
    );
}

crawlFeeds();