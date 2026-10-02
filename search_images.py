import urllib.request, json

def search(query):
    query_str = query.replace(' ', '+')
    req = urllib.request.Request(
        f'https://unsplash.com/napi/search/photos?query={query_str}&per_page=1&page=1', 
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    try:
        data = json.loads(urllib.request.urlopen(req).read())
        return data['results'][0]['id']
    except Exception as e:
        return 'error: ' + str(e)

queries = [
    'indian fish curry', 'prawn masala', 'chicken biryani', 'gongura chicken', 
    'indian thali', 'fried chicken', 'paneer masala', 'dal tadka', 
    'indian sweet', 'indian filter coffee', 'indian wedding buffet', 'indian meal box'
]
res = {q: search(q) for q in queries}
print(json.dumps(res, indent=2))
