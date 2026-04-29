# Assignment: return a emoji

message = "I'm very happy :)"

emojis = {
    ":)": "🙂",
    ":(": "🙁",
    ":c": "☹️",
    ":D": "😃",
    "xD": "😆",
    "<3": "❤️"
}


character = ""
for emoji in emojis:
    message = message.replace(emoji, emojis[emoji])

print(message)