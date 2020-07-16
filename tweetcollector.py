import os
import sys

try: 
    tweetIds = sys.argv[1]
except:
    print("Please pass in a file list of tweet URLs.\nEx: python tweetcollector.py 'My Tweets.txt'")
    sys.exit(0)

try:
    templateFile = open("src/template.html", "r")
    templateLines = templateFile.readlines()
    templateFile.close()
    tweetIdsFile = open(tweetIds, "r")
    lines = tweetIdsFile.readlines()
    tweetIdsFile.close()
    htmlFile = open(os.path.splitext(tweetIds)[0] + ".html", "w")
    for templateLine in templateLines:
        htmlFile.write(templateLine)
    htmlFile.write("<h1>" + os.path.splitext(tweetIds)[0] + "</h1><div class='container'>")
    for line in lines:
        lineSplit = line.split("/", 6)
        line = "<div class='tweet' tweetID='" + lineSplit[5].strip() + "'></div>\n"
        htmlFile.write(line)
    htmlFile.write("</div></body></html>")
    print("Tweets from " + tweetIds + " added to " + os.path.splitext(tweetIds)[0] + ".html!")
except:
    print("Something went wrong.")

sys.exit(0)