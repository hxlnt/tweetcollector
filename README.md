# tweetcollector
This is a small (<30, dependency-free) Python 3 script that turns a user-provided text file of tweet URLs into individual screenshots as well as an HTML page displaying a grid of embedded tweets.

## Usage

Add tweet URLs (one per line, no extra query parameters) to a text file, then pass the filename to tweetcollector like so:

`python tweetcollector.py "filename.txt"`

Equally-sized screenshots and an HTML file will be generated.

## TODO

⬜ Allow easy user customization of layout (ex: Masonry-style layout)

