import requests
from base64 import b64encode

s = q = 0
for i in range(1, 6):
    # print(b64encode(("yuanrenxue"+str(i)).encode()).decode("ascii"))
    url = f'https://match.yuanrenxue.cn/api/match/12?page={i}&m={b64encode(("yuanrenxue"+str(i)).encode()).decode("ascii")}'
    res = requests.get(url, headers={"x-requested-with": "XMLHttpRequest", "user-agent": "yuanrenxue.project", "cookie": "sessionid=xnecvz08xx7uv4dg1dvxkmun523tawgg;"})
    print(res.text)
    res = res.json()
    for j in res["data"]:
        s += j['value']
    q += len(res["data"])
print(s)