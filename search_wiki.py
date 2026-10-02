import urllib.request, json, time

queries = [
    'South Indian thali', 'Fish curry', 'Biryani', 'Prawn masala', 'Chicken 65',
    'Paneer tikka masala', 'Dal tadka', 'Payasam', 'Indian filter coffee',
    'Catering', 'Tiffin carrier', 'Chilli prawn'
]

res = {}
for q in queries:
    try:
        url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(q)}&prop=pageimages&format=json&pithumbsize=800"
        req = urllib.request.Request(url, headers={'User-Agent': 'SpiceCoastApp/1.0 (test@example.com)'})
        data = json.loads(urllib.request.urlopen(req).read())
        pages = data['query']['pages']
        page = list(pages.values())[0]
        if 'thumbnail' in page:
            res[q] = page['thumbnail']['source']
        else:
            # try searching
            search_url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(q)}&utf8=&format=json"
            sreq = urllib.request.Request(search_url, headers={'User-Agent': 'SpiceCoastApp/1.0 (test@example.com)'})
            sdata = json.loads(urllib.request.urlopen(sreq).read())
            if len(sdata['query']['search']) > 0:
                title = sdata['query']['search'][0]['title']
                url2 = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=pageimages&format=json&pithumbsize=800"
                req2 = urllib.request.Request(url2, headers={'User-Agent': 'SpiceCoastApp/1.0 (test@example.com)'})
                data2 = json.loads(urllib.request.urlopen(req2).read())
                pages2 = data2['query']['pages']
                page2 = list(pages2.values())[0]
                if 'thumbnail' in page2:
                    res[q] = page2['thumbnail']['source']
                else:
                    res[q] = 'no image'
            else:
                res[q] = 'no image'
    except Exception as e:
        res[q] = str(e)
    time.sleep(1) # delay to prevent 429

print(json.dumps(res, indent=2))
