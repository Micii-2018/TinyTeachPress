import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';

const CheckoutPage = () => {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleCheckout = async () => {
    setIsRedirecting(true);
    // --- STRIPE INTEGRATION POINT ---
    // Once a Stripe account + product/price IDs exist, replace this block with either:
    //   1) a redirect to a Stripe Payment Link per product, or
    //   2) a call to a serverless function that creates a Stripe Checkout
    //      Session from `items` and redirects to session.url.
    // Until then this is a placeholder so the flow can be reviewed end-to-end.
    setTimeout(() => {
      setIsRedirecting(false);
      toast({
        title: 'Checkout not yet connected',
        description: 'Stripe isn’t wired in yet — this button will redirect to real payment once it is.',
      });
    }, 700);
  };

  return (
    <>
      <Helmet>
        <title>Checkout | Tiny Teach Press</title>
      </Helmet>
      <div className="min-h-screen bg-paper">
        <Header />
        <main className="pt-36 pb-24 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl text-ink font-semibold mb-8">Checkout</h1>

          {items.length === 0 ? (
            <div className="bg-white border border-border rounded-2xl p-10 text-center">
              <p className="text-ink-soft mb-5">Your cart is empty.</p>
              <Link to="/books">
                <Button className="bg-forest hover:bg-forest-deep text-white">Browse Books</Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white border border-border rounded-2xl overflow-hidden">
              <ul className="divide-y divide-border">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 p-5">
                    <img src={item.image} alt={item.title} className="w-16 h-20 object-cover rounded-md border border-border flex-none" />
                    <div className="flex-1">
                      <p className="font-medium text-ink text-sm">{item.title}</p>
                      <div className="flex items-center gap-3 mt-2 text-sm text-ink-soft">
                        <label htmlFor={`qty-${item.id}`}>Qty</label>
                        <input
                          id={`qty-${item.id}`}
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value) || 1)}
                          className="w-14 border border-border rounded-md px-2 py-1 text-center"
                        />
                        <button onClick={() => removeItem(item.id)} className="text-xs hover:text-destructive ml-auto">
                          Remove
                        </button>
                      </div>
                    </div>
                    <span className="font-display text-ink self-center">${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="p-5 bg-paper flex items-center justify-between">
                <span className="text-ink-soft">Subtotal</span>
                <span className="font-display text-2xl text-ink">${subtotal.toFixed(2)}</span>
              </div>
              <div className="p-5 border-t border-border">
                <Button
                  onClick={handleCheckout}
                  disabled={isRedirecting}
                  className="w-full bg-forest hover:bg-forest-deep text-white font-medium py-6 text-base disabled:opacity-50"
                >
                  {isRedirecting ? 'Redirecting…' : 'Continue to Payment'}
                </Button>
                <p className="text-xs text-ink-soft/70 text-center mt-3">
                  Payment is powered by Stripe. Your card details never touch our servers.
                </p>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;
