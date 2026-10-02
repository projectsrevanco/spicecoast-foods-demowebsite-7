from duckduckgo_search import DDGS
import json

queries = [
    'indian fish curry', 'prawn masala', 'chicken biryani', 'gongura chicken', 
    'indian thali', 'fried chicken', 'paneer masala', 'dal tadka', 
    'indian sweet', 'indian filter coffee', 'indian wedding buffet', 'indian meal box'
]

res = {}
with DDGS() as ddgs:
    for q in queries:
        try:
            # Search for images with Unsplash in the URL or just any high quality image
            results = list(ddgs.images(f"{q} site:unsplash.com", max_results=1))
            if results:
                res[q] = results[0]['image']
            else:
                # Fallback to any image
                results = list(ddgs.images(q, max_results=1))
                if results:
                    res[q] = results[0]['image']
                else:
                    res[q] = 'no image'
        except Exception as e:
            res[q] = str(e)

print(json.dumps(res, indent=2))
