import requests


url = 'https://inv-veri.chinatax.gov.cn/fileQuery/fileAnalysis?'

headers = {
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    # "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryd7MT0AZARp9oRiCv",
    "cookie": "HMF_CI=dd3a7bf31a71e41212d81c7d6c5877a66a90738f5c2fc91d23ef75a50ad7c53666e1caecf2cbaa235924aacd14567d53f1c32233fe7b257e0af19ba93dc4082782"
}

pdf = {"file": open(r"D:\杂货\MyJs\猿人云js练习\发票查询\代码\011002200211_00358880.pdf", "rb")} 

a = requests.post(url, files=pdf, headers=headers, verify=False)
print(a.text)