import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Utensils, ShoppingBag, Truck, Package, Heart, Star, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../lib/CartContext';

const services = [
  { icon: <Utensils className="w-6 h-6" />, title: 'Dine In', description: 'Enjoy freshly prepared meals in our restaurant.' },
  { icon: <ShoppingBag className="w-6 h-6" />, title: 'Takeaway', description: 'Order ahead and skip the wait.' },
  { icon: <Truck className="w-6 h-6" />, title: 'Food Delivery', description: 'Fresh food delivered to your doorstep.' },
  { icon: <Package className="w-6 h-6" />, title: 'Catering', description: 'Complete food packages for events and celebrations.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Packaged Foods', description: 'Take your favourite Spice Coast flavours home.' },
];

const signatureDishes = [
  { id: 1, name: 'Coastal Fish Curry', desc: 'Fresh catch simmered in rich coconut gravy.', price: 349, rating: 4.8, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Meen_curry_2_%28cropped%29.JPG/330px-Meen_curry_2_%28cropped%29.JPG' },
  { id: 2, name: 'Andhra Chicken Biryani', desc: 'Aromatic basmati rice cooked with spicy marinated chicken.', price: 299, rating: 4.9, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/330px-%22Hyderabadi_Dum_Biryani%22.jpg' },
  { id: 3, name: 'Prawn Masala', desc: 'Succulent prawns tossed in a fiery coastal spice blend.', price: 399, rating: 4.7, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Prawn_mee_with_whole_shrimp.jpg/330px-Prawn_mee_with_whole_shrimp.jpg' },
  { id: 4, name: 'Gongura Chicken', desc: 'Tangy and spicy chicken curry made with sorrel leaves.', price: 329, rating: 4.6, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Taj_Mahal_-_Lamb_Curry_Madras.jpg/330px-Taj_Mahal_-_Lamb_Curry_Madras.jpg' },
  { id: 5, name: 'Seafood Thali', desc: 'A grand feast of assorted coastal seafood delicacies.', price: 499, rating: 4.9, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Meen_curry_2_%28cropped%29.JPG' },
  { id: 6, name: 'Spicy Chicken Fry', desc: 'Crispy pan-fried chicken infused with regional spices.', price: 279, rating: 4.8, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Chicken_tikka_masala_%28cropped%29.jpg/330px-Chicken_tikka_masala_%28cropped%29.jpg' },
  { id: 7, name: 'Veg Coastal Meals', desc: 'Traditional vegetarian thali with authentic local dishes.', price: 249, rating: 4.5, type: 'veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/330px-Vegetarian_Curry.jpeg' },
  { id: 8, name: 'Traditional Prawn Curry', desc: 'Heirloom recipe featuring prawns in a tangy tamarind base.', price: 389, rating: 4.8, type: 'non-veg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Prawn_mee_with_whole_shrimp.jpg/330px-Prawn_mee_with_whole_shrimp.jpg' }
];

export function Home() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [addedItem, setAddedItem] = useState<number | null>(null);

  const handleAddToCart = (dish: typeof signatureDishes[0]) => {
    addToCart({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      img: dish.img
    });
    setAddedItem(dish.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 md:pt-16 pb-20 lg:pb-32">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] bg-accent-saffron/10 rounded-full blur-3xl -z-10" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Typography */}
            <div className="flex flex-col space-y-6 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Badge variant="warning" className="mb-2 uppercase tracking-widest text-[10px]">
                  Premium Indian Coastal Dining
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-main leading-[1.1] mt-4">
                  Taste the Coast.<br />
                  <span className="text-primary italic">Feel the Spice.</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-lg md:text-xl text-text-muted leading-relaxed"
              >
                Authentic coastal flavours, freshly prepared and delivered to your doorstep.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate('/menu')}>Order Now</Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => navigate('/menu')}>Explore Menu</Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-8 flex items-center gap-4 text-sm text-text-muted font-medium"
              >
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Customer" className="w-8 h-8 rounded-full border-2 border-background" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces" alt="Customer" className="w-8 h-8 rounded-full border-2 border-background" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Customer" className="w-8 h-8 rounded-full border-2 border-background" />
                </div>
                <span>Loved by 2,000+ happy customers</span>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative lg:ml-auto w-full max-w-[600px] aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              {/* Kerala/Coastal Indian food image - Fish Curry/Thali style */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Meen_curry_2_%28cropped%29.JPG" 
                alt="Authentic Indian Coastal Thali with Fish Curry" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center gap-4 border border-white/20">
                <div className="bg-accent-saffron/20 p-3 rounded-full text-accent-saffron">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-text-main text-sm">Fresh Catch of the Day</p>
                  <p className="text-text-muted text-xs">Delivered hot in 30 mins</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Section 1 - What We Serve */}
      <section className="bg-background pt-12 pb-24">
        <Container>
          <SectionHeading 
            title="Everything You Crave, All in One Place"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card hoverable className="h-full border-t-4 border-t-accent-saffron group cursor-pointer flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 bg-accent-saffron/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-saffron/20 transition-colors">
                      <div className="text-accent-saffron">{service.icon}</div>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-text-muted text-sm flex-grow">
                    {service.description}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 2 - Signature Dishes */}
      <section className="bg-primary/5 py-24 border-t border-primary/10">
        <Container>
          <SectionHeading 
            title="Our Coastal Favourites"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card hoverable className="h-full overflow-hidden flex flex-col">
                  <div className="h-52 w-full relative group">
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
          </div>

          <div className="mt-16 flex justify-center">
            <Button size="lg" className="min-w-[200px]" onClick={() => navigate('/menu')}>
              View Full Menu
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
