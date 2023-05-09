import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import requests
import os

js_path = os.path.abspath(os.path.join(os.path.join(__file__, '..'),  '5.js'))
print(js_path)
with open(js_path, "r", encoding="utf-8") as f:
    js = f.read().encode().decode("utf-8")


js = execjs.compile(js)

s = 0
sssss = []
for i in range(1, 6):
    cookie = js.call('get_m')
    data = {
        "page":i,
        "f": cookie["f"],
        "m": cookie["m"]
    }
    res = requests.get(f"https://match.yuanrenxue.cn/api/match/5", params=data,  headers={"x-requested-with": "XMLHttpRequest", "user-agent": "yuanrenxue.project", 'cookie': cookie["cookie"]}).json()
    print(res)
    for j in res["data"]:
        sssss.append(j['value'])


for i in range(len(sssss)):
    for j in range(i + 1, len(sssss)):
        if sssss[j] > sssss[i]:
            sssss[i], sssss[j] = sssss[j], sssss[i]

print(sum(sssss[:5]))