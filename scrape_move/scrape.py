import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import requests

with open(r"D:\杂货\MyJs\scrape_move\test.js", "r", encoding="utf-8") as f:
    js = f.read()

jsx = execjs.compile(js)

token = jsx.call("get_sign")
print(token)
url = f"https://spa6.scrape.center/api/movie/?limit=10&offset=10&token={token}"
print(requests.get(url, verify=False).text)