import urllib.request, json, time

articles = [
    "Malabar_matthi_curry", # Fish curry
    "Biryani",
    "Chicken_65",
    "Dal",
    "Paneer_tikka_masala",
    "Kheer", # Payasam
    "Indian_filter_coffee",
    "Thali",
    "Prawn_soup",
    "Curry",
    "Tiffin_carrier",
    "Catering"
]

res = {}
for a in articles:
    try:
        url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{a}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        data = json.loads(urllib.request.urlopen(req).read())
        if 'thumbnail' in data:
            res[a] = data['thumbnail']['source']
        else:
            res[a] = 'no image'
    except Exception as e:
        res[a] = str(e)
    time.sleep(0.5)

print(json.dumps(res, indent=2))
