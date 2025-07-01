import React, { useState } from "react";
import { ShoppingCart, User, MapPin, Phone, Mail } from "lucide-react";

const Cart = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    quantity: 1
  });

  const productPrice = 14.99;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuantityChange = (change: number) => {
    setFormData(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + change)
    }));
  };
  const handleWhatsAppOrder = () => {
    const total = (productPrice * formData.quantity).toFixed(2);

    // ✅ FIRE FACEBOOK PURCHASE EVENT
    interface WindowWithFbq extends Window {
      fbq?: (event: string, action: string, data: { value: string; currency: string }) => void;
    }
    const win = window as WindowWithFbq;
    if (typeof window !== "undefined" && typeof win.fbq === "function") {
      win.fbq('track', 'Purchase', {
        value: total,
        currency: 'USD' // Change this if needed
      });
    }

    const message = `Hello! I would like to order BREATHEX Lung Flexer:

📦 Product: BREATHEX Lung Flexer
🔢 Quantity: ${formData.quantity}
💰 Total: $${total}
  

👤 Customer Information:
Name: ${formData.name}

Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}

Please confirm my order. Thank you!`;

    const whatsappUrl = `https://wa.me/96176534652?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = formData.name  && formData.phone && formData.address && formData.city;

  return (
    <section className="w-full py-12 bg-white" id="cart">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="pulse-chip">
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span>Cart</span>
            </div>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8 text-center">
            Complete Your <span className="text-pulse-500">BREATHEX</span> Order
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Summary */}
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="\photos\breathingtrainer.png" 
                  alt="BREATHEX Lung Flexer" 
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold">BREATHEX Lung Flexer - Free Delivery </h4>
                  <p className="text-gray-600">Revolutionary breathing enhancement device - Free Delivery</p>
                  <p className="text-pulse-500 font-bold">${productPrice}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{formData.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-pulse-500">${(productPrice * formData.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Shipping Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <MapPin className="w-4 h-4" />
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                    placeholder="Enter your full address"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <MapPin className="w-4 h-4" />
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                    placeholder="Enter your city"
                    required
                  />
                </div>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                disabled={!isFormValid}
                className={`w-full py-4 px-6 rounded-full font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  isFormValid 
                    ? 'bg-pulse-500 hover:bg-pulse-600 cursor-pointer' 
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Complete Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
