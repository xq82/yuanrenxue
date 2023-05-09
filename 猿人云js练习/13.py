import requests
import re
res = requests.get("https://match.yuanrenxue.cn/match/13", headers={"x-requested-with": "XMLHttpRequest", "user-agent": "yuanrenxue.project", "cookie": "sessionid=wbwbk9ki2479ri7oh3y0wqymjogs1x4j"})
cookie =  ";".join([i.name + "=" + i.value for i in res.cookies]) + ";"

cookie += "".join(re.findall(r"\(['\"](.)['\"]\)", res.text))
headers={"x-requested-with": "XMLHttpRequest", "user-agent": "yuanrenxue.project", "cookie": cookie}
# return headers

data = []
for i in range(1, 6):
    res = requests.get(f'https://match.yuanrenxue.cn/api/match/13?page={i}', headers=headers)
    for j in res.json()["data"]:
        data.append(j["value"])
print(sum(data))

