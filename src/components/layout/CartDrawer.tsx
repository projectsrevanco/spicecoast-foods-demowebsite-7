import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../lib/CartContext';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, subtotal, deliveryFee, total } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-primary/10">
              <h2 className="text-2xl font-serif text-text-main flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-primary" />
                Your Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-text-muted hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-text-muted space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p>Your cart is empty.</p>
                  <Button variant="outline" onClick={() => setIsCartOpen(false)}>Continue Browsing</Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <img src={item.img} alt={item.name} className="w-20 h-20 rounded-xl object-cover shadow-sm" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-main text-sm">{item.name}</h4>
                        <p className="text-xl font-serif font-bold text-primary mt-1">₹{item.price * item.quantity}</p>
                        
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-2 bg-background rounded-full px-2 py-1 border border-primary/10">
                            <button onClick={() => updateQuantity(item.id, -1)} className="text-text-muted hover:text-primary p-1">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="text-text-muted hover:text-primary p-1">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-600 p-1 bg-red-50 rounded-full">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-primary/10 bg-background/50">
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between text-text-muted">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>Delivery</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between font-serif text-xl font-bold text-text-main pt-2 border-t border-primary/10 mt-2">
                    <span>Total</span>
                    <span className="text-primary">₹{total}</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">Proceed to Checkout</Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
