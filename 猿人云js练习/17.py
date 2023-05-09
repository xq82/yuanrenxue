import httpx
s = 0
with httpx.Client(headers={"x-requested-with": "XMLHttpRequest", "user-agent": "yuanrenxue.project", "cookie":"sessionid=tyoob9e58y27jilbn6eq1vprs612fkio;"}, http2=True) as client:
    for i in range(1, 6):
        res = client.get(f"https://match.yuanrenxue.cn/api/match/17?page={i}").json()
        print(res)
        for j in res["data"]:
            s += j["value"]

print(s)