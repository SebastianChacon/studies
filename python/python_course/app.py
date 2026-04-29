# Assignment: return a emoji

message = input("send a message: ")

emojis = {
    ":)": "🙂",
    ":(": "🙁",
    ":c": "☹️",
    ":D": "😃",
    "xD": "😆",
    "<3": "❤️"
}

def find_emoji():
    character = ""
    for emoji in emojis:
        return print(message.replace(emoji, emojis[emoji]))

find_emoji()