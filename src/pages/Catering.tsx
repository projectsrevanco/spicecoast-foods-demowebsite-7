import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Users, PartyPopper, CheckCircle } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useCart } from '../lib/CartContext';


const useCases = ['Weddings', 'Birthdays', 'Corporate Events', 'House Functions', 'Festivals', 'Family Gatherings'];

const packages = [
  {
    id: 'small',
    name: 'Small Gathering',
    capacity: 'Up to 25 people',
    desc: 'Perfect for intimate celebrations and house parties. Includes 2 starters, 2 main courses, rice, bread, and a dessert.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Tradtional_Thali.jpg/330px-Tradtional_Thali.jpg'
  },
  {
    id: 'celebration',
    name: 'Celebration Package',
    capacity: 'Up to 50 people',
    desc: 'Ideal for birthdays and anniversaries. Comprehensive menu with live counters, premium seafood, and extended dessert options.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Tradtional_Thali.jpg/330px-Tradtional_Thali.jpg'
  },
  {
    id: 'grand',
    name: 'Grand Feast',
    capacity: '100+ people',
    desc: 'The ultimate coastal dining experience for weddings and corporate galas. Fully customized menu with premium service staff.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Tradtional_Thali.jpg/330px-Tradtional_Thali.jpg'
  }
];

const packagedFoods = [
  { id: 201, name: 'Coastal Mango Pickle', weight: '250g', price: 149, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Cut-Mango-pickle.jpg/330px-Cut-Mango-pickle.jpg' },
  { id: 202, name: 'Garam Masala Blend', weight: '100g', price: 199, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Garammasalaphoto.jpg/330px-Garammasalaphoto.jpg' },
  { id: 203, name: 'Ready-to-Cook Fish Curry', weight: '300g', price: 249, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Meen_curry_2_%28cropped%29.JPG/330px-Meen_curry_2_%28cropped%29.JPG' },
  { id: 204, name: 'Spicy Banana Chips', weight: '200g', price: 99, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Chips_de_bananes_de_S%C3%A3o_Tom%C3%A9-et-Pr%C3%ADncipe.jpg/330px-Chips_de_bananes_de_S%C3%A3o_Tom%C3%A9-et-Pr%C3%ADncipe.jpg' },
  { id: 205, name: 'Gunpowder (Podi)', weight: '150g', price: 129, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Garammasalaphoto.jpg/330px-Garammasalaphoto.jpg' },
  { id: 206, name: 'Mysore Pak Sweets', weight: '250g', price: 299, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Mysore_pak.jpg/330px-Mysore_pak.jpg' },
];

export function Catering() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // Packaged Foods Cart State
  const { addToCart } = useCart();
  const [addedItem, setAddedItem] = useState<number | null>(null);

  const handleAddToCart = (product: typeof packagedFoods[0]) => {
    addToCart({ id: product.id, name: product.name, price: product.price, img: product.img });
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const openModalWithPackage = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setIsModalOpen(true);
  };

  return (
    <div className="pb-24 pt-12">
      {/* CATERING SECTION */}
      <section className="mb-24">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading 
              title="Make Every Celebration Delicious"
              subtitle="From intimate gatherings to grand celebrations, bring authentic coastal flavours to your event."
            />
            
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {useCases.map((useCase) => (
                <Badge key={useCase} variant="warning" className="text-sm px-4 py-1.5 shadow-sm">
                  {useCase}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <Card hoverable className="h-full flex flex-col overflow-hidden">
                  <div className="h-56 w-full relative">
                    <img 
                      src={pkg.img} 
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm text-text-main flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-primary" /> {pkg.capacity}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-text-muted flex-grow pt-2">
                    {pkg.desc}
                  </CardContent>
                  <CardFooter className="pt-4 border-t border-primary/5 mt-auto">
                    <Button className="w-full" onClick={() => openModalWithPackage(pkg.name)}>
                      Request Catering Quote
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* PACKAGED FOODS SECTION */}
      <section className="bg-primary/5 py-24 border-t border-primary/10">
        <Container>
          <SectionHeading 
            title="Bring Spice Coast Home"
            subtitle="Authentic spices, pickles, and snacks packaged perfectly for your kitchen."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-16">
            {packagedFoods.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card hoverable className="h-full flex flex-col overflow-hidden bg-white">
                  <div className="h-48 w-full p-4 bg-gray-50 flex items-center justify-center relative group">
                    <img 
                      src={product.img} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-xl shadow-sm transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge variant="default" className="absolute bottom-2 left-2 text-[10px] bg-white text-text-main opacity-90 shadow-sm font-semibold">
                      {product.weight}
                    </Badge>
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col justify-between">
                    <h4 className="font-semibold text-text-main text-sm leading-tight mb-2 line-clamp-2">{product.name}</h4>
                    <span className="text-xl font-serif font-bold text-primary">₹{product.price}</span>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button 
                      size="sm" 
                      className="w-full text-xs h-9"
                      variant={addedItem === product.id ? "secondary" : "outline"}
                      onClick={() => handleAddToCart(product)}
                    >
                      <AnimatePresence mode="wait">
                        {addedItem === product.id ? (
                          <motion.div key="added" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-1 text-accent-green">
                            <CheckCircle className="w-3.5 h-3.5" /> Added
                          </motion.div>
                        ) : (
                          <motion.div key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
        </Container>
      </section>

      {/* Catering Enquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => formStatus !== 'submitting' && setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
            >
              {formStatus === 'success' ? (
                <div className="p-16 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-accent-green/20 text-accent-green rounded-full flex items-center justify-center mb-4">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-text-main">Enquiry Sent!</h3>
                  <p className="text-text-muted max-w-sm">Thank you for your interest. Our catering team will contact you shortly to discuss your event.</p>
                </div>
              ) : (
                <>
                  <div className="bg-primary/5 p-6 border-b border-primary/10 flex justify-between items-center sticky top-0 z-10 bg-white/95 backdrop-blur-sm">
                    <h3 className="text-xl font-serif font-bold text-text-main flex items-center gap-2">
                      <PartyPopper className="w-5 h-5 text-primary" /> Request Catering Quote
                    </h3>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      disabled={formStatus === 'submitting'}
                      className="text-text-muted hover:text-primary transition-colors disabled:opacity-50"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-text-main">Full Name *</label>
                        <input required type="text" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-text-main">Phone Number *</label>
                        <input required type="tel" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="+91 98765 43210" />
                      </div>
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-sm font-semibold text-text-main">Email Address *</label>
                        <input required type="email" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-text-main">Event Type *</label>
                        <select required className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
                          <option value="">Select event type</option>
                          {useCases.map(uc => <option key={uc} value={uc}>{uc}</option>)}
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-text-main">Event Date *</label>
                        <input required type="date" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-text-main">Number of Guests *</label>
                        <input required type="number" min="10" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="E.g. 50" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-text-main">Preferred Package</label>
                        <select className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white" value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)}>
                          <option value="">I'm not sure yet</option>
                          {packages.map(pkg => <option key={pkg.name} value={pkg.name}>{pkg.name}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1.5 md:col-span-2">
                        <label className="text-sm font-semibold text-text-main">Additional Requirements</label>
                        <textarea rows={3} className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Tell us about specific dietary requirements, venue details, or special requests..." />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end">
                      <Button type="submit" size="lg" isLoading={formStatus === 'submitting'} className="w-full sm:w-auto min-w-[200px]">
                        Send Enquiry
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
