# -*- coding:utf-8 -*-
from fontTools.ttLib import TTFont
import requests
from base64 import b64decode
import xml.etree.ElementTree as ET

PIXELS = {
    '111': '',
    '10100100100101010010010010': '0',
    '1001101111': '1',
    '100110101001010101011110101000': '2',
    '10101100101000111100010101011010100101010100': '3',
    '111111111111111': '4',
    '1110101001001010110101010100101011111': '5',
    '10101010100001010111010101101010010101000': '6',
    '1111111': '7',
    '101010101101010001010101101010101010010010010101001000010': '8',
    '10010101001110101011010101010101000100100': '9'
}

def get_kv():
    items = {}
    root = ET.parse(r"C:\Users\xq8\Desktop\jiance\ddd.xml").getroot()
    for child in root.iter('glyf'):
        TTGlyphs = child.findall('TTGlyph')
        for TTGlyph in TTGlyphs:
            items[TTGlyph.get('name')] = []
            contours = TTGlyph.findall('contour')
            for contour in contours:
                for pt in  contour.findall('pt'):
                    items[TTGlyph.get('name')].append(pt.get("on"))
            items[TTGlyph.get('name')] = ''.join(items[TTGlyph.get('name')])
    return items


def savexml(res):
    with open(r"C:\Users\xq8\Desktop\jiance\c.woff", "wb") as f:
        f.write(b64decode(res["woff"]))
    ttfont = TTFont(r"C:\Users\xq8\Desktop\jiance\c.woff")
    ttfont.saveXML(r"C:\Users\xq8\Desktop\jiance\ddd.xml")



names = ['极镀ギ紬荕', '爷灬霸气傀儡', '梦战苍穹', '傲世哥', 'мaη肆風聲', '一刀メ隔世', '横刀メ绝杀', 'Q不死你R死你', '魔帝殤邪', '封刀不再战', '倾城孤狼', '戎马江湖', '狂得像风', '影之哀伤', '謸氕づ独尊', '傲视狂杀', '追风之梦', '枭雄在世', '傲视之巅', '黑夜刺客', '占你心为王', '爷来取你狗命', '御风踏血', '凫矢暮城', '孤影メ残刀', '野区霸王', '噬血啸月', '风逝无迹', '帅的睡不着', '血色杀戮者', '冷视天下', '帅出新高度', '風狆瑬蒗', '灵魂禁锢', 'ヤ地狱篮枫ゞ', '溅血メ破天', '剑尊メ杀戮', '塞外う飛龍', '哥‘K纯帅', '逆風祈雨', '恣意踏江山', '望断、天涯路', '地獄惡灵', '疯狂メ孽杀', '寂月灭影', '骚年霸称帝王', '狂杀メ无赦', '死灵的哀伤', '撩妹界扛把子', '霸刀☆藐视天下', '潇洒又能打', '狂卩龙灬巅丷峰', '羁旅天涯.', '南宫沐风', '风恋绝尘', '剑下孤魂', '一蓑烟雨', '领域★倾战', '威龙丶断魂神狙', '辉煌战绩', '屎来运赚', '伱、Bu够档次', '九音引魂箫', '骨子里的傲气', '霸海断长空', '没枪也很狂', '死魂★之灵']
DATA = {}
for i in range(1, 6):
    yyq = 1
    res = requests.get(f"https://match.yuanrenxue.cn/api/match/7?page={i}", headers={"User-Agent": "yuanrenxue.project", "cookie": "sessionid=ff98uw6qdpq6nqviyidp1mf3sajr5sw2"}).json()
    savexml(res)
    items = get_kv()
    for value in res["data"]:
        name = names[yyq + (i - 1) * 10]
        v = value["value"].replace("&#x", 'uni').split(" ")
        v = "".join([PIXELS[items[i]] for i in v if i])
        DATA[name] = int(v)
        yyq += 1

max_num = 0
name = None
for k, v in DATA.items():
    if v >  max_num:
        max_num = v
        name = k


print(name, max_num)