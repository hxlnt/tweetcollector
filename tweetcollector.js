const fs = require("fs");
const path = require('path');
const puppeteer = require('puppeteer');


// Read contents of file containing tweet URLs
tweetsFile = process.argv.slice(2)[0];
try {
    tweetsFileContents = fs.readFileSync(tweetsFile, 'UTF-8'); }
catch (err) {
    console.log(`❌ Pass in a valid file containing a list of tweet URLs (one URL per line, no separators).\nEx: node tweetcollector.js folder/my_tweets.txt`); 
    process.exit(0); }


// Populate HTML file with styles and scripts from template.
htmlFilepath = path.join(path.parse(tweetsFile).dir, path.parse(tweetsFile).name + ".html");
templateFile = fs.readFileSync("src/template.html", 'UTF-8');
templateLines = templateFile.split(/r?\n/);
fs.writeFileSync(htmlFilepath, "");
templateLines.forEach((templateLine) => {
    fs.appendFileSync(htmlFilepath, templateLine);
});


// Add tweet widgets to HTML file
tweetUrls = tweetsFileContents.split(/r?\n/); 

tweetUrls.forEach((line) => {
    line = line.replace(/(\r\n|\n|\r)/gm, "");
    lineSplit = line.split("/", 6);
    lineHtml = "<div class='tweet' tweetId='" + lineSplit[5] + "'></div>\n"
    fs.appendFileSync(htmlFilepath, lineHtml);
});
fs.appendFileSync(htmlFilepath, "</body></html>");
console.log(`\n✅ ${htmlFilepath} saved to disk.`);


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(path.resolve(htmlFilepath), { waitUntil: 'networkidle0' });
    console.log(`\n⏳ Waiting for iframes to load...`);
    await page.waitFor(tweetUrls.length * 2000);

    const elements = await page.$$('.twitter-tweet.twitter-tweet-rendered')

    console.log(`⏳ Generating screenshots...`);
    for (let i = 0; i < elements.length; i++) {
        try {
            await elements[i].screenshot({ path: `${path.parse(tweetsFile).name}-${i.toString()}.png` });
            console.log(`   ✅ ${path.parse(tweetsFile).name}-${i.toString()}.png saved to disk.`)
        } catch (err) {
            console.log(`   ❌ There was a problem capturing the screenshot of element # ${i}: ${err.message}`);
            }
    }
    await browser.close();
    console.log(`\nAll done!`);
})();



