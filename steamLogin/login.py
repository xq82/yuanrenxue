import subprocess
from functools import partial
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
import execjs
import requests, re
from base64 import b64decode


HEADERS = {
    # "Content-Type": "multipart/form-data",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
}

with open(r"D:\杂货\MyJs\steamLogin.js", "r", encoding="utf-8") as f:
    js_daima = f.read()
cx_js = execjs.compile(js_daima)


def get_iv(user_base64):
    url = "https://api.steampowered.com/IAuthenticationService/GetPasswordRSAPublicKey/v1?origin=https:%2F%2Fstore.steampowered.com&input_protobuf_encoded=" + user_base64
    response = requests.get(url)
    data = cx_js.call("get_iv", list(response.content))
    return {"publickey_mod": data[0], "publickey_exp": data[1], "timestamp": data[2]}


def get_token(res):
    token  ="eyAid" +  str(res.content).split(r"eyAid", 1)[1].rsplit(r"\x00", 1)[0]
    token = token.split(".")
    return token


def get_steam_client_id(res):
    token = get_token(res)
    user_info_token = token[1]+ "=="
    parse_token = str(b64decode(user_info_token))
    steam_id = re.findall(r'"sub": "(\d+)"', parse_token)[0]
    client_id = re.findall(r'"iss": ".*?(\d+)"', parse_token)[0]
    return steam_id, client_id, token


def login_checkdevice(steam_id, client_id, token):
    """登陆验证之类的"""
    url = f"https://login.steampowered.com/jwt/checkdevice/{steam_id}"
    cookie = f"steamMachineAuth{steam_id}=" + ".".join(token)
    headers = HEADERS
    headers["cookie"] = cookie
    res = requests.post(url, data={"clientid": client_id, "steamid": steam_id}, headers=headers)
    return res


def mail_verification(steam_id, client_id, verification_code, code_type=2):
    "邮箱验证码   code_type2是邮箱 3是别的估计"
    url = "https://api.steampowered.com/IAuthenticationService/UpdateAuthSessionWithSteamGuardCode/v1"
    input_protobuf_encoded = cx_js.call("set_mail_verification_code", steam_id, client_id, verification_code, code_type)
    data = {"input_protobuf_encoded": input_protobuf_encoded}
    res = requests.post(url, data=data, headers=HEADERS)
    print("邮箱验证通过")
    return res


def get_request_id(token_res, i=11):
    request_id = list(token_res.content)[i: i+16]
    return request_id


def get_token2_res(client_id, request_id):
    data = cx_js.call("set_request_id", client_id, request_id)
    token2_res = requests.post("https://api.steampowered.com/IAuthenticationService/PollAuthSessionStatus/v1", data={"input_protobuf_encoded": data}, headers=HEADERS)
    return token2_res.text


def get_token2(client_id, token_res):
        #获取token2
    token2 = None
    i = 11
    while not token2:
        request_id = get_request_id(token_res, i)
        token2 = get_token2_res(client_id, request_id)
        if not token2:
            i +=1
    token = re.findall(r'(ey.*?)"', token2)
    return token[0]


def finalizelogin(token, sessionid):
    url = "https://login.steampowered.com/jwt/finalizelogin"
    data = {
        "nonce": token,
        "sessionid": sessionid,
        "redir": "https://steamcommunity.com/login/home/?goto=login%2Fhome%2F%3Fgoto%3Dlogin%252Fhome",
    }
    res = requests.post(url, data=data, headers=HEADERS)
    return res


def set_token(nonce, auth, steamID):
    url = "https://steamcommunity.com/login/settoken"
    data = {
        "nonce": nonce,
        "auth": auth,
        "steamID": steamID
    }
    res = requests.post(url, data=data, headers=HEADERS)
    return res


def login(user, passwd):
    user_base64 = cx_js.call("get_username", user)
    iv = get_iv(user_base64)
    passwd = cx_js.call("get_passwd", user, passwd, iv)
    token_res = requests.post("https://api.steampowered.com/IAuthenticationService/BeginAuthSessionViaCredentials/v1", data={"input_protobuf_encoded": passwd}, headers=HEADERS)
    # print(list(token_res.content))

    # print( cx_js.call("get_cliendid", list(token_res.content)))
    # return
    steam_id, client_id, token = get_steam_client_id(token_res)
    login_checkdevice_res = login_checkdevice(steam_id, client_id, token)
    if login_checkdevice_res.json()["success"] == False:
        code = input("输入邮箱验证码")
        mail_verification(steam_id, client_id, code)

    token2 = get_token2(client_id, token_res)
    sessionid = cx_js.call("get_sessionid")
    finalize_login = finalizelogin(token2, sessionid)
    cookies = []
    for i in finalize_login.json()["transfer_info"]:
        set_token_res = set_token(i["params"]["nonce"], i["params"]["auth"], steam_id)
        cookies.append(";".join([c.name + '=' + c.value for c in set_token_res.cookies]))
    return {"cookie": cookies[-1], "steam_id": steam_id, "client_id": client_id}
    

if __name__ == "__main__":
    guess = login("cqdiv463", "goos7257H")
    url = f"https://steamcommunity.com/profiles/{guess['steam_id']}/home"
    headers = HEADERS
    headers["cookie"] = guess["cookie"]
    res = requests.get(url, headers=headers)
    with open(r"D:\杂货\myJiami\a.html", "w", encoding="utf-8") as f:
        f.write(res.text)

