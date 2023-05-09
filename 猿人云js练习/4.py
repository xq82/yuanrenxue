import requests
from base64 import b64decode, b64encode
from hashlib import md5
import ddddocr
from lxml.etree import HTML


fingerprint = lambda x: md5(x.encode()).hexdigest()
ocr = ddddocr.DdddOcr()

image_number = {}
res = requests.get("https://match.yuanrenxue.cn/api/match/4?page=1").json()

html_xpath = HTML(res["info"])
imgs = html_xpath.xpath("//img/@src")

for img in imgs:
    if img not in image_number:
        # print(img)
        i = img.replace("data:image/png;base64,", "", 1)
        s = b64decode(i)    
        result = ocr.classification(s)
        image_number[img] = result
    else:
        continue

index = {-11.5: -1, 0: 0, -23: -2, -34.5: -3, 11.5: 1, 23: 2, 34.5: 3}


def replace_html(data):
    for k, v in image_number.items():
        data = data.replace(k, v)
    return data


def get_data(html, class_number):
    html_xpath = HTML(html)
    tds = html_xpath.xpath("//td")
    data = []
    for td in tds:
        # imgs = td.xpath(f".//img[@class!='img_number {class_number}']")
        imgs = td.xpath(f".//img")
        s = []
        for img in imgs:
            if img.xpath('./@class')[0] == f"img_number {class_number}":
                continue
            else:
                img_x = img.xpath('./@style')[0].replace('left:', '').replace('px', '')
                img_x = index[float(img_x)]
                img_v =  img.xpath('./@src')[0]
                s.append({img_x: img_v})
        data.append(s)
    ddd = []
    for i in data:
        s =[""  for _ in range(len(i))]
        for j in range(len(i)):
            if i[j]:
                for k,v in i[j].items():
                    s[j + k] = v 
        ddd.append("".join(s))
    return [int(i) for i in ddd]


def get_md5v(str):
    guess = b64encode(str.encode('latin1')).decode("utf-8").replace("=", "")
    return fingerprint(guess)


def get_dat2(res):
    data = replace_html(res["info"])
    data = get_data(data, get_md5v(res["key"] + res["value"]))
    return data


data = get_dat2(res)
for i in range(2, 6):
    res = requests.get(f"https://match.yuanrenxue.cn/api/match/4?page={i}", headers={
        "User-Agent": "yuanrenxue.project",
    }).json()
    data.extend(get_dat2(res))

print(sum(data))

