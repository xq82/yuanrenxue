import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import requests
import os

js_path = os.path.abspath(os.path.join(os.path.join(__file__, '..'),  '2.js'))
print(js_path)
with open(js_path, "r", encoding="utf-8") as f:
    js = f.read().encode().decode("utf-8")

# print(js)
js = execjs.compile(js)

s = 0

for i in range(1, 6):
    cookie = js.call('get_cookie')
    res = requests.get(f"https://match.yuanrenxue.cn/api/match/2?page={i}", headers={"x-requested-with": "XMLHttpRequest", "user-agent": "yuanrenxue.project", 'cookie': cookie}).json()
    for j in res["data"]:
        s += j['value']

print(s )
