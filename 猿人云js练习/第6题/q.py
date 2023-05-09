import subprocess
from functools import partial
import time
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import requests
import os

js_path = os.path.abspath(os.path.join(os.path.join(__file__, '..'),  'a.js'))
js_path = r"C:\Users\xq8\Desktop\run2.js"
print(js_path)
with open(js_path, "r", encoding="utf-8") as f:
    js = f.read().encode().decode("utf-8")

# print(js)
js = execjs.compile(js)

s = 0
q = 0
o = 1
sss = ''
for i in range(1, 6):
    data = js.call('get_data', i, o, '')
    print(data)
    res = requests.get("https://match.yuanrenxue.com/api/match/6", params=data, headers={"x-requested-with": "XMLHttpRequest", "user-agent": "yuanrenxue.project", "cookie": "fox1e41yfvqvsdq9yi035r1qlnjv8q2e"}).json()
    print(res)
    for j in res["data"]:
        s += j['value']
    q += len(res["data"])
print(s * 24 )

