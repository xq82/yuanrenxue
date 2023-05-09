import pywasm
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import requests
import os

js_path = os.path.abspath(os.path.join(os.path.join(__file__, '..'),  'main.wasm'))
print(js_path)

js = """
        function getdata(){  t1 = parseInt(Date.parse(new Date())/1000/2);
            t2 = parseInt(Date.parse(new Date())/1000/2 - Math.floor(Math.random() * (50) + 1));
            return {t1:t1,  t2: t2}
            }
      
"""
jsx = execjs.compile(js)
wasm = pywasm.load(js_path)
s = 0
for i in range(1, 6):
    data = jsx.call('getdata')
    t1, t2 = data["t1"], data['t2']
    data = wasm.exec('encode', [t1, t2])
    data = str(data) + "|" + str(t1) +  "|" + str(t2)
    data = {
        "page": i,
        "m": data
    }
    res = requests.get(f"https://match.yuanrenxue.cn/api/match/15", params=data, headers={"x-requested-with": "XMLHttpRequest", "user-agent": "yuanrenxue.project", "cookie":"sessionid=tyoob9e58y27jilbn6eq1vprs612fkio;"}).json()
    print(res)
    for j in res["data"]:
        s += j['value']
print(s)