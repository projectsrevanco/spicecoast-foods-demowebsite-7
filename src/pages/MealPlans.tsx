import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Calendar, ShieldCheck } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';

const plans = [
  {
    id: 'weekly',
    name: 'Weekly Meal Plan',
    desc: 'Perfect for busy professionals who want fresh, healthy coastal meals during the work week.',
    meals: '5 meals / week',
    price: 899,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bisi_Bele_Bath_%28Bisibelebath%29.JPG/330px-Bisi_Bele_Bath_%28Bisibelebath%29.JPG',
    benefits: [
      'Flexible delivery times',
      'Choice of veg or non-veg',
      'Free delivery'
    ]
  },
  {
    id: 'monthly',
    name: 'Monthly Meal Plan',
    desc: 'Commit to eating well. A full month of delicious, authentic home-style Indian coastal food.',
    meals: '20 meals / month',
    price: 3299,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bisi_Bele_Bath_%28Bisibelebath%29.JPG/330px-Bisi_Bele_Bath_%28Bisibelebath%29.JPG',
    benefits: [
      'Save 10% vs weekly plan',
      'Weekend treats included',
      'Priority delivery',
      'Pause anytime'
    ]
  },
  {
    id: 'family',
    name: 'Family Meal Plan',
    desc: 'Generous portions designed to feed a family of four. Takes the stress out of family dinners.',
    meals: 'Meals for the whole family',
    price: 5999,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bisi_Bele_Bath_%28Bisibelebath%29.JPG/330px-Bisi_Bele_Bath_%28Bisibelebath%29.JPG',
    benefits: [
      'Serves up to 4 people',
      'Customizable spice levels',
      'Complimentary desserts',
      'Priority delivery'
    ]
  }
];

export function MealPlans() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleConfirmSubscription = () => {
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setSelectedPlan(null);
    }, 3000);
  };

  return (
    <div className="pb-24 pt-12">
      {/* Section 1 - Today's Special */}
      <section className="bg-primary/5 py-16 mb-24 border-y border-primary/10">
        <Container>
          <SectionHeading title="Today's Coastal Special" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {/* Offer 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-primary/10 flex flex-col sm:flex-row group"
            >
              <div className="w-full sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Meen_curry_2_%28cropped%29.JPG/330px-Meen_curry_2_%28cropped%29.JPG" 
                  alt="Seafood Feast"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/20 to-transparent" />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-text-main mb-2">Seafood Feast</h3>
                  <p className="text-text-muted text-sm mb-4">Fish Curry + Prawn Fry + Rice + Dessert</p>
                  <p className="text-3xl font-bold text-primary font-serif">₹399</p>
                </div>
                <Button className="mt-6 w-full sm:w-auto">Order Now</Button>
              </div>
            </motion.div>

            {/* Offer 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-text-main rounded-[2rem] overflow-hidden shadow-xl border border-gray-800 flex flex-col sm:flex-row group text-white"
            >
              <div className="w-full sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/330px-Vegetarian_Curry.jpeg" 
                  alt="Family Meal Combo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-transparent" />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-accent-saffron mb-2">Family Meal Combo</h3>
                  <p className="text-gray-300 text-sm mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent-green" /> Serves 4
                  </p>
                  <p className="text-3xl font-bold font-serif text-white">₹899</p>
                </div>
                <Button variant="secondary" className="mt-6 w-full sm:w-auto bg-accent-saffron text-text-main hover:bg-accent-saffron/90">
                  Order Now
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Section 2 - Meal Plans */}
      <section>
        <Container>
          <SectionHeading title="Plan Your Meals. Skip the Waiting." subtitle="Subscribe to our premium coastal meal plans and enjoy authentic flavors every day without the hassle of cooking." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col border-t-8 border-t-primary relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 w-full relative">
                    <img src={plan.img} alt={plan.name} className="w-full h-full object-cover" />
                  </div>
                  {plan.id === 'monthly' && (
                    <div className="absolute top-4 right-4 bg-accent-saffron text-text-main text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-4 pt-6">
                    <CardTitle className="text-2xl text-text-main">{plan.name}</CardTitle>
                    <p className="text-primary font-medium mt-2">{plan.meals}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-serif font-bold text-text-main">₹{plan.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-sm text-text-muted text-center mb-8 h-16">{plan.desc}</p>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-text-muted">
                          <Check className="w-5 h-5 text-accent-green shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant={plan.id === 'monthly' ? 'primary' : 'outline'}
                      onClick={() => setSelectedPlan(plan)}
                    >
                      Choose Plan
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Subscription Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => !isSubscribed && setSelectedPlan(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {isSubscribed ? (
                <div className="p-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-accent-green/20 text-accent-green rounded-full flex items-center justify-center mb-4">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-text-main">Subscribed!</h3>
                  <p className="text-text-muted">Your {selectedPlan.name} is now active.</p>
                </div>
              ) : (
                <>
                  <div className="bg-primary/5 p-6 border-b border-primary/10 flex justify-between items-center">
                    <h3 className="text-xl font-serif font-bold text-text-main">Review Subscription</h3>
                    <button 
                      onClick={() => setSelectedPlan(null)}
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                      <div>
                        <h4 className="font-bold text-lg text-text-main">{selectedPlan.name}</h4>
                        <p className="text-text-muted text-sm">{selectedPlan.meals}</p>
                      </div>
                      <span className="text-2xl font-serif font-bold text-primary">₹{selectedPlan.price}</span>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-sm font-semibold text-text-main uppercase tracking-wide">Included Benefits</h5>
                      <ul className="space-y-2">
                        {selectedPlan.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-text-muted">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-saffron shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-4 text-sm text-text-muted">
                      <Calendar className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <p className="font-semibold text-text-main">Starts Tomorrow</p>
                        <p>First meal arrives around 12:30 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                    <Button className="w-full" size="lg" onClick={handleConfirmSubscription}>
                      Confirm Subscription
                    </Button>
                    <p className="text-center text-xs text-text-muted mt-3">
                      Secure payment. You can pause or cancel anytime.
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
