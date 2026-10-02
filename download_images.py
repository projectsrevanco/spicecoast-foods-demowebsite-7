import urllib.request
import os

images = {
    'fish_curry.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Meen_curry_2_%28cropped%29.JPG/330px-Meen_curry_2_%28cropped%29.JPG',
    'chicken_biryani.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/330px-%22Hyderabadi_Dum_Biryani%22.jpg',
    'prawn_masala.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Prawn_mee_with_whole_shrimp.jpg/330px-Prawn_mee_with_whole_shrimp.jpg',
    'gongura_chicken.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Taj_Mahal_-_Lamb_Curry_Madras.jpg/330px-Taj_Mahal_-_Lamb_Curry_Madras.jpg',
    'seafood_thali.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/330px-Vegetarian_Curry.jpeg',
    'chicken_fry.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Chicken_tikka_masala_%28cropped%29.jpg/330px-Chicken_tikka_masala_%28cropped%29.jpg',
    'dal_tadka.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/3_types_of_lentil.png/330px-3_types_of_lentil.png',
    'payasam.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Kheer.jpg/330px-Kheer.jpg',
    'filter_coffee.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Filter_kaapi.JPG/330px-Filter_kaapi.JPG'
}

for filename, url in images.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(os.path.join('public/images', filename), 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
