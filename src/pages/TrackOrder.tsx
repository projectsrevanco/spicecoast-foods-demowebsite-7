import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, MapPin, Clock, Package, Bike, FileWarning, HeadphonesIcon, RefreshCw, Camera } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { cn } from '../lib/utils';

const statusSteps = [
  { id: 'confirmed', label: 'Order Confirmed', icon: Check, time: '12:05 PM' },
  { id: 'preparing', label: 'Being Prepared', icon: Package, time: '12:15 PM' },
  { id: 'delivering', label: 'Out for Delivery', icon: Bike, time: '12:35 PM' },
  { id: 'delivered', label: 'Delivered', icon: MapPin, time: '12:45 PM' },
];

export function TrackOrder() {
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const [activeModal, setActiveModal] = useState<'problem' | 'refund' | 'contact' | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const advanceStatus = () => {
    setCurrentStatusIndex((prev) => (prev < statusSteps.length - 1 ? prev + 1 : 0));
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setActiveModal(null);
        setFormStatus('idle');
      }, 2500);
    }, 1500);
  };

  const progressPercentage = (currentStatusIndex / (statusSteps.length - 1)) * 100;

  return (
    <div className="pb-24 pt-12 min-h-[80vh]">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Tracker Section */}
          <section>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
              <SectionHeading 
                title="Track Your Order" 
                subtitle="Live status for your recent food order."
                align="left"
                className="mb-0"
              />
              <div className="bg-primary/10 text-primary px-5 py-2.5 rounded-xl border border-primary/20">
                <span className="text-sm font-semibold uppercase tracking-wider block mb-1">Order Number</span>
                <span className="font-serif text-2xl font-bold">#SCF1024</span>
              </div>
            </div>

            <Card className="overflow-hidden border-2 border-primary/10 shadow-xl">
              {/* Map/Visual Header */}
              <div className="h-48 bg-gray-100 w-full relative overflow-hidden bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vegetarian_Curry.jpeg/330px-Vegetarian_Curry.jpeg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-accent-saffron" />
                    <span className="font-semibold text-lg">Estimated arrival: 25–35 min</span>
                  </div>
                  <p className="text-sm text-gray-300">Delivering to 123 Coastal Drive</p>
                </div>
                
                {/* Demo Control */}
                <button 
                  onClick={advanceStatus}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" /> Advance Demo Status
                </button>
              </div>

              {/* Status Timeline */}
              <div className="p-8 md:p-12">
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute left-[21px] top-4 bottom-4 w-1 bg-gray-100 rounded-full" />
                  <motion.div 
                    className="absolute left-[21px] top-4 w-1 bg-primary rounded-full origin-top"
                    initial={{ height: 0 }}
                    animate={{ height: `${progressPercentage}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />

                  {/* Steps */}
                  <div className="space-y-12">
                    {statusSteps.map((step, idx) => {
                      const isCompleted = idx <= currentStatusIndex;
                      const isCurrent = idx === currentStatusIndex;
                      
                      return (
                        <div key={step.id} className="relative flex items-center gap-8 z-10">
                          <motion.div 
                            initial={false}
                            animate={{
                              backgroundColor: isCompleted ? '#8B2131' : '#F3F4F6',
                              borderColor: isCompleted ? '#8B2131' : '#E5E7EB',
                              color: isCompleted ? '#FFFFFF' : '#9CA3AF',
                              scale: isCurrent ? 1.1 : 1
                            }}
                            className={cn(
                              "w-11 h-11 rounded-full border-4 flex items-center justify-center shrink-0 transition-colors duration-300",
                              isCompleted ? "shadow-[0_0_15px_rgba(139,33,49,0.4)]" : ""
                            )}
                          >
                            <step.icon className="w-5 h-5" />
                          </motion.div>
                          
                          <div className={cn(
                            "flex-grow transition-opacity duration-300",
                            isCompleted ? "opacity-100" : "opacity-40"
                          )}>
                            <h4 className={cn(
                              "text-lg font-semibold",
                              isCurrent ? "text-primary" : "text-text-main"
                            )}>
                              {step.label}
                            </h4>
                            <p className="text-text-muted text-sm mt-1 font-medium">{step.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Support Section */}
          <section className="pt-8">
            <SectionHeading 
              title="Need Help With Your Order?" 
              subtitle="Our support team is here to assist you."
              align="left"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <Card hoverable className="cursor-pointer border-t-4 border-t-gray-300" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <MapPin className="w-8 h-8 text-gray-500 mb-3" />
                  <h4 className="font-semibold text-text-main">Track Order</h4>
                </CardContent>
              </Card>

              <Card hoverable className="cursor-pointer border-t-4 border-t-red-500" onClick={() => setActiveModal('problem')}>
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <FileWarning className="w-8 h-8 text-red-500 mb-3" />
                  <h4 className="font-semibold text-text-main">Report a Problem</h4>
                </CardContent>
              </Card>

              <Card hoverable className="cursor-pointer border-t-4 border-t-accent-saffron" onClick={() => setActiveModal('refund')}>
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <RefreshCw className="w-8 h-8 text-accent-saffron mb-3" />
                  <h4 className="font-semibold text-text-main">Request Refund</h4>
                </CardContent>
              </Card>

              <Card hoverable className="cursor-pointer border-t-4 border-t-primary" onClick={() => setActiveModal('contact')}>
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <HeadphonesIcon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-text-main">Contact Support</h4>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </Container>

      {/* SUPPORT MODALS */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => formStatus !== 'submitting' && setActiveModal(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {formStatus === 'success' ? (
                <div className="p-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-accent-green/20 text-accent-green rounded-full flex items-center justify-center mb-4">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-text-main">Submitted!</h3>
                  <p className="text-text-muted">We've received your request and will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="bg-primary/5 p-6 border-b border-primary/10 flex justify-between items-center">
                    <h3 className="text-xl font-serif font-bold text-text-main flex items-center gap-2">
                      {activeModal === 'problem' && <><FileWarning className="w-5 h-5 text-red-500" /> Report a Problem</>}
                      {activeModal === 'refund' && <><RefreshCw className="w-5 h-5 text-accent-saffron" /> Request Refund</>}
                      {activeModal === 'contact' && <><HeadphonesIcon className="w-5 h-5 text-primary" /> Contact Support</>}
                    </h3>
                    <button 
                      onClick={() => setActiveModal(null)}
                      disabled={formStatus === 'submitting'}
                      className="text-text-muted hover:text-primary transition-colors disabled:opacity-50"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <form onSubmit={handleSupportSubmit} className="p-6 space-y-5">
                    {/* Common Field */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-text-main">Order Number</label>
                      <input type="text" readOnly value="#SCF1024" className="w-full px-4 py-2.5 rounded-md border border-gray-200 bg-gray-50 text-gray-500 font-mono" />
                    </div>

                    {/* Problem Specific Fields */}
                    {activeModal === 'problem' && (
                      <>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-text-main">Problem Category *</label>
                          <select required className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
                            <option value="">Select an issue...</option>
                            <option value="quality">Food quality</option>
                            <option value="missing">Missing item</option>
                            <option value="wrong">Wrong item</option>
                            <option value="delay">Delivery delay</option>
                            <option value="packaging">Packaging issue</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-text-main">Description *</label>
                          <textarea required rows={3} placeholder="Please provide details about the issue..." className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-text-main">Upload Photo (Optional)</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 hover:border-primary/50 transition-colors cursor-pointer">
                            <Camera className="w-8 h-8 mb-2" />
                            <span className="text-sm font-medium text-text-main">Click to upload an image</span>
                            <span className="text-xs">JPG, PNG, GIF up to 5MB</span>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Refund Specific Fields */}
                    {activeModal === 'refund' && (
                      <>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-text-main">Reason for Refund *</label>
                          <select required className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white">
                            <option value="">Select a reason...</option>
                            <option value="missing">Order never arrived</option>
                            <option value="wrong">Completely wrong order</option>
                            <option value="spilled">Food spilled/damaged</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-text-main">Description *</label>
                          <textarea required rows={4} placeholder="Please explain why you are requesting a refund..." className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                        </div>
                      </>
                    )}

                    {/* Contact Specific Fields */}
                    {activeModal === 'contact' && (
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-text-main">Message *</label>
                        <textarea required rows={5} placeholder="How can we help you today?" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                      </div>
                    )}

                    <div className="pt-4 flex justify-end">
                      <Button type="submit" isLoading={formStatus === 'submitting'} className="w-full">
                        {activeModal === 'problem' && 'Submit Complaint'}
                        {activeModal === 'refund' && 'Request Refund'}
                        {activeModal === 'contact' && 'Send Message'}
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
