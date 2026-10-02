import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Check, Navigation2 } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 4000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pb-24 pt-12">
      {/* RESTAURANT SECTION */}
      <section className="mb-24">
        <Container>
          <SectionHeading 
            title="Visit Spice Coast Foods" 
            subtitle="Dine with us and experience the vibrant ambiance of the coast."
            align="center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Restaurant Image / Details */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 flex flex-col">
              <div className="h-72 w-full bg-gray-200 relative">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/330px-Barbieri_-_ViaSophia25668.jpg" 
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-main">Address</h4>
                      <p className="text-text-muted text-sm mt-1">123 Coastal Drive, Marine View<br />Cityville, ST 12345</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-main">Opening Hours</h4>
                      <p className="text-text-muted text-sm mt-1">Mon - Sun: 11:30 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-main">Phone</h4>
                      <p className="text-text-muted text-sm mt-1">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-text-main">Email</h4>
                      <p className="text-text-muted text-sm mt-1">hello@spicecoastfoods.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Visual Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-100 border border-gray-200 relative flex flex-col items-center justify-center min-h-[400px]">
              <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/330px-Barbieri_-_ViaSophia25668.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-primary/5 backdrop-blur-[2px]" />
              
              <div className="z-10 bg-white p-6 rounded-2xl shadow-lg max-w-xs text-center border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Spice Coast Foods</h3>
                <p className="text-sm text-text-muted mb-6">Located in the heart of the city.</p>
                <Button className="w-full flex items-center justify-center gap-2">
                  <Navigation2 className="w-4 h-4" /> Get Directions
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-primary/5 py-24 border-t border-primary/10">
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            <div className="lg:col-span-2">
              <SectionHeading 
                title="Get in Touch" 
                subtitle="Whether you have a question about our menu, need assistance with an order, or just want to say hi, we'd love to hear from you."
                align="left"
              />
              <div className="mt-8 space-y-6 hidden lg:block">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Call us directly</p>
                    <p className="font-semibold text-text-main">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-accent-saffron/10 rounded-full flex items-center justify-center text-accent-saffron shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Send us an email</p>
                    <p className="font-semibold text-text-main">hello@spicecoastfoods.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white z-10"
                    >
                      <div className="w-20 h-20 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
                        <Check className="w-10 h-10 text-accent-green" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-text-main mb-2">Message Sent!</h3>
                      <p className="text-text-muted">Thanks for reaching out. We will get back to you as soon as possible.</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text-main">Your Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text-main">Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-main">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-main">Message</label>
                    <textarea required rows={5} placeholder="How can we help you today?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50/50 resize-none" />
                  </div>
                  <Button type="submit" size="lg" className="w-full" isLoading={formStatus === 'submitting'}>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
