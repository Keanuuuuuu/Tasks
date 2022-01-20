import re
import requests
import csv
url = "http://212.129.245.115:8080/static/js/app.7149a871ab46e4d1cdd7.js"
resp1 = requests.get(url)
page_content = resp1.text
# 解析数据
resp = re.compile(r'\[t\._v\((?P<content>.*?)\)\]\)', re.S)
resp2 = re.compile(r'\[this\._v\((?P<content2>.*?)\)\]\)\]\)\}\,function', re.S)
resp3 = re.compile(r't\._v\(\" \"\)\,i\(\"span\"\,\[i\(\"br\"\)\,t\._v\((?P<content3>.*?)\)', re.S)
resp4 = re.compile(r'\"span\"\,\[this\._v\((?P<content4>.*?)\)', re.S)
# 开始匹配
r = resp.finditer(page_content)
r2 = resp2.finditer(page_content)
r3 = resp3.finditer(page_content)
r4 = resp4.finditer(page_content)

f = open("Geek.csv", mode="w",encoding="utf-8")
csvwriter = csv.writer(f)
for it in r:
    # print(it.group("content"))
    dic = it.groupdict()
    csvwriter.writerow(dic.values())
for it in r2:
    # print(it.group("content2"))
    dic = it.groupdict()
    csvwriter.writerow(dic.values())
for it in r3:
    # print(it.group("content3"))
    dic = it.groupdict()
    csvwriter.writerow(dic.values())
for it in r4:
    # print(it.group("content4"))
    dic = it.groupdict()
    csvwriter.writerow(dic.values())


f.close()
print("success")
