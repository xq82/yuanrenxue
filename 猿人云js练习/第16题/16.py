import requests
import execjs
import subprocess
from functools import partial
import os
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
js_path = os.path.abspath(os.path.join(os.path.join(__file__, '..'),  '16.js'))
print(js_path)
with open(js_path, "r", encoding="utf-8") as f:
    js = f.read().encode().decode("utf-8")

jsx = execjs.compile(js)
s = q = 0
for i in range(1, 6):
    # print(b64encode(("yuanrenxue"+str(i)).encode()).decode("ascii"))
    url = f'https://match.yuanrenxue.cn/api/match/16'
    a = jsx.call("get_data", i)
    print(a)
    res = requests.get(url, params=a,headers={"x-requested-with": "XMLHttpRequest", "user-agent": "yuanrenxue.project", "cookie": "sessionid=43nszx7ciul1jli6lloyzj84iwus84yo;"})
    print(res.text)
    res = res.json()
    for j in res["data"]:
        s += j['value']
    q += len(res["data"])
print(s)