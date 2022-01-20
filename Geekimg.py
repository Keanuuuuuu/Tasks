import re
import requests
url = "http://212.129.245.115:8080/static/js/app.7149a871ab46e4d1cdd7.js"
resp1 = requests.get(url)
page_content = resp1.text
img = re.compile(r'src\:\"(?P<i>.*?)\"\}\}\)', re.S)
back = img.finditer(page_content)
for it in back:
    src = it.group("i")
    src_resp = requests.get(src)
    a = src.split("/")[-1]
    with open(a, mode="wb") as f:
        f.write(src_resp.content)
    f.close()

    print("success", a)
print("over")
