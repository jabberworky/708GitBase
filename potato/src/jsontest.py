import json

filePath = "/Users/woojibeom/Documents/potato/src/hostData.json"

data = {"status": "a!", "work": "up"}
print(data)
with open(filePath, "w") as outfile:
    json.dump(data, outfile)
