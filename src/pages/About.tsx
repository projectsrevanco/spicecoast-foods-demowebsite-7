import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, 
  ChefHat, 
  Sparkles, 
  Package, 
  Truck,
  Heart,
  Star,
  ThumbsUp,
  Check,
  MessageSquare
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { cn } from '../lib/utils';

const processSteps = [
  { icon: Leaf, title: 'Fresh Ingredients', desc: 'Sourced daily from local markets.' },
  { icon: ChefHat, title: 'Skilled Chefs', desc: 'Crafted by culinary experts.' },
  { icon: Sparkles, title: 'Hygienic Kitchen', desc: 'Strict safety standards.' },
  { icon: Package, title: 'Carefully Packed', desc: 'Sealed for freshness.' },
  { icon: Truck, title: 'Delivered Fresh', desc: 'Hot and ready to eat.' },
];

const features = [
  { title: 'Fresh Ingredients', desc: 'Quality ingredients sourced carefully.', icon: Leaf },
  { title: 'Authentic Recipes', desc: 'Traditional coastal flavours prepared consistently.', icon: ChefHat },
  { title: 'Reliable Delivery', desc: 'Efficient delivery and order tracking.', icon: Truck },
  { title: 'Customer First', desc: 'Easy feedback and customer support.', icon: Heart },
];

const reviews = [
  { name: 'Priya Sharma', loc: 'Downtown', text: 'The authentic taste of coastal spices instantly took me back home. Their prawn curry is to die for!', rating: 5 },
  { name: 'David Wilson', loc: 'Westside', text: 'Excellent packaging and the food was still piping hot when it arrived. The Biryani is consistently amazing.', rating: 5 },
  { name: 'Ananya Desai', loc: 'North Hills', text: 'I subscribe to their weekly meal plan and it has completely changed my dinners. Healthy, fresh, and delicious.', rating: 4 },
  { name: 'Marcus Chen', loc: 'East Bay', text: 'Great customer service. There was a slight delay once, but they communicated immediately and handled it perfectly.', rating: 5 },
];

const feedbackCategories = ['Food Quality', 'Delivery', 'Packaging', 'Service'];

export function About() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return; // Prevent submission without rating
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('idle');
        setRating(0);
        setSelectedCategory('');
        (e.target as HTMLFormElement).reset();
      }, 4000);
    }, 1500);
  };

  return (
    <div className="pb-24 pt-12 min-h-screen">
      
      {/* OUR STORY SECTION */}
      <section className="mb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/330px-Barbieri_-_ViaSophia25668.jpg" 
                alt="Spice Coast Foods Story" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            <div>
              <SectionHeading 
                title="Our Story"
                subtitle="A modern food brand inspired by authentic coastal Indian flavours."
                align="left"
              />
              <div className="mt-8 space-y-6 text-text-muted leading-relaxed">
                <p>
                  Spice Coast Foods began with a simple idea: to bring the vibrant, rich, and deeply traditional flavours of India's coastal regions to the modern diner. We aren't just a restaurant; we are a culinary bridge connecting time-honoured recipes with everyday convenience.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Traditional recipes:</strong> Heirloom spices and regional cooking methods.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Fresh ingredients:</strong> Sourced daily, zero compromises on quality.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Consistent quality:</strong> Perfect taste, every single time.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Modern convenience:</strong> Dine-in, meal plans, delivery, and packaged foods.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span><strong>Customer satisfaction:</strong> We put your experience above all else.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* QUALITY SECTION */}
      <section className="mb-24">
        <Container>
          <SectionHeading 
            title="From Our Kitchen to Your Table"
            subtitle="We believe in complete transparency. Here is how your meal goes from fresh produce to your dining table."
            align="center"
          />
          
          <div className="relative mt-16 max-w-5xl mx-auto">
            {/* Connecting Line (Hidden on Mobile) */}
            <div className="hidden md:block absolute top-10 left-12 right-12 h-1 bg-primary/10 -z-10 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-primary/10 shadow-lg flex items-center justify-center mb-6 relative group transition-colors hover:border-primary/40">
                    <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-semibold text-text-main mb-2">{step.title}</h4>
                  <p className="text-sm text-text-muted px-2">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-primary/5 py-24 border-y border-primary/10 mb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Why Choose Us"
                subtitle="We are committed to delivering the highest quality dining experience, whether you're at our restaurant or in your own home."
                align="left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                {features.map((feature, i) => (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-accent-saffron/10 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-accent-saffron" />
                    </div>
                    <h4 className="font-semibold text-text-main mb-2">{feature.title}</h4>
                    <p className="text-sm text-text-muted">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/330px-Barbieri_-_ViaSophia25668.jpg" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                <blockquote className="text-white">
                  <p className="text-xl font-serif font-medium leading-relaxed mb-4">"Our philosophy is simple: source the finest ingredients and let the traditional spices do the talking."</p>
                  <footer className="text-accent-saffron font-semibold">— Executive Chef</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="mb-24">
        <Container>
          <SectionHeading 
            title="Loved by Food Lovers"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 text-accent-saffron fill-accent-saffron" />
                      ))}
                    </div>
                    <p className="text-text-muted italic flex-grow text-lg">"{review.text}"</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-main text-sm">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.loc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FEEDBACK SECTION */}
      <section className="bg-text-main py-24 text-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Tell Us About Your Experience
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Your feedback helps us maintain the highest standards of culinary excellence.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-text-main">
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-24 h-24 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
                      <ThumbsUp className="w-12 h-12 text-accent-green" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-4">Thank You!</h3>
                    <p className="text-text-muted max-w-md">We truly appreciate your feedback. It helps us serve you and our community better.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFeedbackSubmit}
                    className="space-y-8"
                  >
                    {/* Star Rating */}
                    <div className="flex flex-col items-center gap-4">
                      <p className="font-semibold text-lg">How would you rate your overall experience?</p>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setRating(star)}
                            className="p-1 focus:outline-none transition-transform hover:scale-110"
                          >
                            <Star 
                              className={cn(
                                "w-10 h-10 transition-colors",
                                (hoverRating || rating) >= star 
                                  ? "text-accent-saffron fill-accent-saffron" 
                                  : "text-gray-200"
                              )} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Category Selection */}
                    <div className="space-y-3">
                      <label className="text-sm font-semibold block text-center">What is your feedback mainly about?</label>
                      <div className="flex flex-wrap justify-center gap-3">
                        {feedbackCategories.map(cat => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                              "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                              selectedCategory === cat
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-text-muted border-gray-200 hover:border-primary/50"
                            )}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Text Area */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-primary" /> Share your feedback
                      </label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Tell us what you loved or how we can improve..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none bg-gray-50/50"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      isLoading={formStatus === 'submitting'}
                      disabled={rating === 0}
                    >
                      Submit Feedback
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
