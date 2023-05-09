import execjs
import time
import requests
with open(r"C:\Users\xq8\Desktop\头条\test.js", "r", encoding="utf-8") as f:
    jsx = f.read()

jsx = execjs.compile(jsx)
url = f"https://www.toutiao.com/search/suggest/hot_words/"
sign = jsx.call("I", url)
url = url + "?_signature=" + sign["data"]
print(url)
data = requests.get(url, headers={"cookie": sign["cookie"]}).text
with open(r"C:\Users\xq8\Desktop\头条\a.json", "w", encoding='utf-8') as f:
    f.write(data)