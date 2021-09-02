# tweetcollector
This is a small NodeJS script that turns a user-provided text file of tweet URLs into perfectly-cropped individual screenshots as well as an HTML page displaying a grid of embedded tweets. This replaces manually screenshotting of tweets, which can be time-consuming and can result in differently-sized screenshots.

## Installation
1. Clone this repo: `git clone https://github.com/hxlnt/tweetcollector`
2. Install from within the project folder: `npm install`

## Usage
Add tweet URLs (one per line, no extra query parameters) to a text file, then pass the filename to tweetcollector like so:

`node tweetcollector.js "filename.txt"`

Equally-sized screenshots and an HTML file will be generated in the same folder.

## TODO

⬜ Allow easy user customization of layout (ex: Masonry-style layout)

