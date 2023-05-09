"""
AES加解密相关
    https://blog.csdn.net/huaweichenai/article/details/128645685
    如果没有 Crypto 包执行下面操作
        pip install crypto
        pip install pycryptodome
        然后在python的 lib/site-packages 目录下，找到名为crpyto的目录，将其首字母大写，不然使用会报错.
"""
import base64
from Crypto.Cipher import AES, DES
from binascii import b2a_hex, a2b_hex
from hashlib import (md5, sha1, sha224, sha256, sha384, sha512, 
                     blake2b, blake2s, 
                     shake_128, shake_256, 
                     sha3_224, sha3_256, sha3_384, sha3_512)



def myHash(func_name, data):
    #哈希加密  func_name: 加密算法， data: 需要加密的数据
    # myHash(sha3_512, "test Hash")
    try:
        return func_name(data).hexdigest()
    except:
        return func_name(data.encode()).hexdigest()


class MyAes:
    def __init__(self, iv, key):
        self.iv = iv.encode("utf-8")
        self.key = key.encode("utf-8")
    
    def pad(self, data):
        # 将原始的明文用空格填充到16字节
        data = data + (16 - len(data) % 16) * " "
        return data
    
    # 将明文用AES加密
    def encode(self, data):
        # 将长度不足16字节的字符串补齐
        data = self.pad(data)
        # 创建加密对象
        AES_obj = AES.new(self.key, AES.MODE_CBC, self.iv)
        # 完成加密
        AES_en_str = AES_obj.encrypt(data.encode("utf-8"))
        # 用base64编码一下
        AES_en_str = base64.b64encode(AES_en_str)
        # 最后将密文转化成字符串
        AES_en_str = AES_en_str.decode("utf-8")
        return AES_en_str

    def decode(self, data):
        # 解密过程逆着加密过程写
        # 将密文字符串重新编码成二进制形式
        data = data.encode("utf-8")
        # 将base64的编码解开
        data = base64.b64decode(data)
        # 创建解密对象
        AES_de_obj = AES.new(self.key, AES.MODE_CBC, self.iv)
        # 完成解密
        AES_de_str = AES_de_obj.decrypt(data)
        # 去掉补上的空格
        AES_de_str = AES_de_str.strip()
        # 对明文解码
        AES_de_str = AES_de_str.decode("utf-8")
        return AES_de_str


class MyDes:
    def __init__(self, key = ''):
        #密钥长度必须为64位，也就是8个字节
        self.key = key.encode('utf-8') if key else '12345678'.encode('utf-8')
        self.mode = DES.MODE_CBC

    def pad(self, text):
         # 这里密钥key 长度必须为16（DES-128）,
        # 24（DES-192）,或者32 （DES-256）Bytes 长度
        # 目前DES-128 足够目前使用
        length = 16   #lenth可以设置为8的倍数
        data = text + (length - len(text) % length) * " "
        return data

    def encode(self,text):
        text = self.pad(text).encode('utf-8')
        cryptor = DES.new(self.key, self.mode, self.key)
        ciphertext = cryptor.encrypt(text)
        # 因为DES加密时候得到的字符串不一定是ascii字符集的，输出到终端或者保存时候可能存在问题
        # 所以这里统一把加密后的字符串转化为16进制字符串
        # return base64.b64encode(ciphertext).decode("utf-8")
        return b2a_hex(ciphertext).decode("utf-8")
        
    # 解密后，去掉补足的空格用strip() 去掉
    def decode(self, text):
        cryptor = DES.new(self.key, self.mode, self.key)
        # plain_text = cryptor.decrypt(base64.b64decode(text))
        plain_text = cryptor.decrypt(a2b_hex(text))
        return bytes.decode(plain_text).rstrip()


class Test:
    @classmethod
    def test_aex(cls):
        print("开始测试AEC加密解密")
        iv = '1234567887654321'
        key = 'miyaoxuyao16ziji'
        data = 'hello world dsadadadsadsads'
        my_aex = MyAes(iv, key)
        data = my_aex.encode(data)
        print("加密后：  ", data)
        data = my_aex.decode(data)
        print("解密后：  ", data)
        print("\n")

    @classmethod
    def test_hash(cls):
        print("md5 加密结果:  " + myHash(md5, 'TEST'))
        print("\n")

    @classmethod
    def test_dex(cls):
        key = '87456123'
        data = 'hello world dsadadadsadsads'
        my_Dex = MyDes(key)
        data = my_Dex.encode(data)
        print("加密后：  ", data)
        data = my_Dex.decode(data)
        print("解密后：  ", data)
        print("\n")

# Test.test_dex()
# print(base64.b64encode(b"{ \""))
iv = b'0000000000000000'
key = b'bc7939738bdeb8ee'


with open(r"C:\Users\xq8\Desktop\8DNG19BG.ts", "rb") as f:
    data = f.read()
# print(data)
# print(type(data))
AES_de_obj = AES.new(key, AES.MODE_CBC, iv)
# 完成解密
AES_de_str = AES_de_obj.decrypt(data)

with open(r"C:\Users\xq8\Desktop\eee.ts", "wb") as f:
    f.write(AES_de_str)
