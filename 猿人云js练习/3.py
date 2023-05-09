import requests
headers2 = {
"Host": "match.yuanrenxue.cn",
"Content-Length": "0",
"User-Agent": "yuanrenxue.project",
"Accept": "*/*",
"Referer": "https://match.yuanrenxue.cn/match/3",
"Accept-Encoding": "gzip, deflate, br",
"Accept-Language": "zh-CN,zh;q=0.9",
"Cookie": "sessionid=ig0p09bk7bl5r4v6p5ngk9oe3egkjfhg;",
}
session = requests.Session()
session.headers = headers2
# session.headers = MyHeaders()
# session.post("https://match.yuanrenxue.cn/jssm")

s = {}
for i in range(1, 6):
   session.post("https://match.yuanrenxue.cn/jssm")
   data = session.get(f"https://match.yuanrenxue.cn/api/match/3?page={i}").json()["data"]
   for j in data:
      guess = s.get(j["value"], 0)
      if guess:
         s[j["value"]] += 1
      else:
          s[j["value"]] = 1

a = max(s.values())
for k,v in s.items():
   if v == a:
      print(k)