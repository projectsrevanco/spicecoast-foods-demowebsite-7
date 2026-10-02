import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle, Search, MapPin } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useCart } from '../lib/CartContext';
import { cn } from '../lib/utils';

// Mock Data
const categories = ['All', 'Starters', 'Main Course', 'Seafood', 'Biryanis', 'Veg', 'Desserts', 'Beverages'];
const menuItems = [
  { id: 101, category: 'Starters', name: 'Chilli Prawns', desc: 'Spicy tossed prawns with bell peppers.', price: 349, rating: 4.6, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Prawn_mee_with_whole_shrimp.jpg/330px-Prawn_mee_with_whole_shrimp.jpg' },
  { id: 102, category: 'Starters', name: 'Gobi 65', desc: 'Crispy fried cauliflower florets tossed in yogurt sauce.', price: 199, rating: 4.4, type: 'veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Chicken_tikka_masala_%28cropped%29.jpg/330px-Chicken_tikka_masala_%28cropped%29.jpg' },
  { id: 103, category: 'Seafood', name: 'Coastal Fish Curry', desc: 'Fresh catch simmered in rich coconut gravy.', price: 349, rating: 4.8, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Meen_curry_2_%28cropped%29.JPG/330px-Meen_curry_2_%28cropped%29.JPG' },
  { id: 104, category: 'Seafood', name: 'Prawn Masala', desc: 'Succulent prawns tossed in a fiery coastal spice blend.', price: 399, rating: 4.7, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Prawn_mee_with_whole_shrimp.jpg/330px-Prawn_mee_with_whole_shrimp.jpg' },
  { id: 105, category: 'Biryanis', name: 'Andhra Chicken Biryani', desc: 'Aromatic basmati rice cooked with spicy marinated chicken.', price: 299, rating: 4.9, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/330px-%22Hyderabadi_Dum_Biryani%22.jpg' },
  { id: 106, category: 'Main Course', name: 'Gongura Chicken', desc: 'Tangy and spicy chicken curry made with sorrel leaves.', price: 329, rating: 4.6, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Taj_Mahal_-_Lamb_Curry_Madras.jpg/330px-Taj_Mahal_-_Lamb_Curry_Madras.jpg' },
  { id: 107, category: 'Veg', name: 'Paneer Butter Masala', desc: 'Cottage cheese in a creamy tomato sauce.', price: 249, rating: 4.5, type: 'veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Chicken_tikka_masala_%28cropped%29.jpg/330px-Chicken_tikka_masala_%28cropped%29.jpg' },
  { id: 108, category: 'Veg', name: 'Dal Tadka', desc: 'Yellow lentils tempered with cumin and garlic.', price: 199, rating: 4.7, type: 'veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/3_types_of_lentil.png/330px-3_types_of_lentil.png' },
  { id: 109, category: 'Desserts', name: 'Payasam', desc: 'Traditional South Indian sweet pudding.', price: 149, rating: 4.8, type: 'veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Kheer.jpg/330px-Kheer.jpg' },
  { id: 110, category: 'Beverages', name: 'Filter Coffee', desc: 'Authentic South Indian filter coffee.', price: 99, rating: 4.9, type: 'veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Filter_kaapi.JPG/330px-Filter_kaapi.JPG' },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [addedItem, setAddedItem] = useState<number | null>(null);
  
  // Delivery Check State
  const [pincode, setPincode] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState<'idle' | 'checking' | 'available' | 'unavailable'>('idle');

  const { addToCart } = useCart();

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (dish: typeof menuItems[0]) => {
    addToCart({ id: dish.id, name: dish.name, price: dish.price, img: dish.img });
    setAddedItem(dish.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const handleCheckDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode.trim()) return;
    
    setDeliveryStatus('checking');
    setTimeout(() => {
      // Mock logic: allow if pincode starts with '5' or '1'
      if (pincode.startsWith('5') || pincode.startsWith('1')) {
        setDeliveryStatus('available');
      } else {
        setDeliveryStatus('unavailable');
      }
    }, 800);
  };

  return (
    <div className="pb-24 pt-12">
      <Container>
        {/* Delivery Zone UI */}
        <div className="mb-16 bg-primary/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between border border-primary/10">
          <div>
            <h3 className="text-xl font-serif font-semibold text-text-main flex items-center gap-2">
              <MapPin className="text-primary w-5 h-5" />
              Check Delivery Availability
            </h3>
            <p className="text-text-muted text-sm mt-1">See if we deliver to your neighborhood.</p>
          </div>
          <form onSubmit={handleCheckDelivery} className="flex w-full md:w-auto gap-3 flex-col sm:flex-row">
            <input 
              type="text" 
              placeholder="Enter Pincode or Area" 
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64"
            />
            <Button type="submit" isLoading={deliveryStatus === 'checking'} className="min-w-[100px]">
              Check
            </Button>
          </form>
          
          <AnimatePresence mode="wait">
            {deliveryStatus === 'available' && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="w-full md:w-auto bg-accent-green/10 text-accent-green px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" /> Delivery Available
              </motion.div>
            )}
            {deliveryStatus === 'unavailable' && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="w-full md:w-auto bg-red-50 text-red-600 px-4 py-2 rounded-md font-medium text-sm"
              >
                Sorry, delivery isn't currently available in this area.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <SectionHeading title="Explore Our Menu" subtitle="A culinary journey through the Indian coast." />

        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-3 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                activeCategory === cat 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-white text-text-main border border-gray-200 hover:border-primary/30 hover:bg-primary/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((dish) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={dish.id}
                className="h-full"
              >
                <Card hoverable className="h-full overflow-hidden flex flex-col">
                  <div className="h-48 w-full relative group">
                    <div className="absolute top-3 left-3 z-10">
                      <Badge variant={dish.type === 'veg' ? 'success' : 'error'} className="bg-white/90 backdrop-blur-sm uppercase shadow-sm">
                        {dish.type}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                      <Star className="w-3 h-3 text-accent-saffron fill-accent-saffron" />
                      {dish.rating}
                    </div>
                    <img 
                      src={dish.img} 
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{dish.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-text-muted flex-grow">
                    {dish.desc}
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                    <span className="text-xl font-serif font-bold text-primary">₹{dish.price}</span>
                    <Button 
                      size="sm" 
                      variant={addedItem === dish.id ? "secondary" : "outline"}
                      onClick={() => handleAddToCart(dish)}
                      className="min-w-[100px]"
                    >
                      <AnimatePresence mode="wait">
                        {addedItem === dish.id ? (
                          <motion.div
                            key="added"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-1 text-accent-green"
                          >
                            <CheckCircle className="w-4 h-4" /> Added
                          </motion.div>
                        ) : (
                          <motion.div
                            key="add"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            Add to Cart
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-24">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-text-main">No items found in this category</h3>
          </div>
        )}
      </Container>
    </div>
  );
}
