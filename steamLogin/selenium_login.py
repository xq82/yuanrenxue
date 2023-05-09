#pip install selenium==4.4.3
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
selenium_executable_path = r"D:\Google_selenium\chromedriver2.exe"

def login(username, password):
    browser = webdriver.Chrome(executable_path=selenium_executable_path)
    browser.implicitly_wait(10)

    browser.get("https://steamcommunity.com/login/home")

    user = browser.find_element(By.XPATH,"//input[@class='newlogindialog_TextInput_2eKVn']")
    user.send_keys(username)

    passwd = browser.find_element(By.XPATH,"//input[@type='password']")
    passwd.send_keys(password)

    submit = browser.find_element(By.XPATH,"//button[@class='newlogindialog_SubmitButton_2QgFE']")
    submit.click()

    time.sleep(60)

    cookie =  f"sessionid={ browser.get_cookie('sessionid')['value']}; steamLoginSecure={browser.get_cookie('steamLoginSecure')['value']}" 
    # browser.close()
    return cookie

print(login("cqdiv463", "goos7257H"))