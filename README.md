# tweetcollector
This is a small (<30, dependency-free) Python 3 script that turns a user-provided text file of tweet URLs into an HTML page displaying a grid of embedded tweets.

## Usage

Add tweet URLs (one per line, no extra query parameters) to a text file, then pass the filename to tweetcollector like so:

`python tweetcollector.py "filename.txt"`

An HTML file with the same filename will be generated. It will contain a grid of embedded tweets ideal for screenshotting or admiring in your free time.

## TODO

⬜ Use a Masonry-style layout

