import React from "react";
import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from "lucide-react";

const ProfessionalCTA = () => {
  const scrollToCart = () => {
    const cartSection = document.getElementById('cart');
    if (cartSection) {
      cartSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "10,000+", label: "Happy Customers" },
    { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Customer Rating" },
    { icon: <Award className="w-6 h-6" />, value: "99%", label: "Satisfaction Rate" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "40%", label: "Avg. Improvement" }
  ];

  const guarantees = [
    "30-Day Money-Back Guarantee",
    "Free Worldwide Shipping",
    "24/7 Customer Support",
    "Lifetime Warranty"
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-pulse-500 to-pulse-600 text-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Transform Your Life with <span className="text-pulse-100">BREATHEX</span>
            </h2>
            <p className="text-xl text-pulse-100 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have revolutionized their breathing and enhanced their quality of life.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-pulse-100">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-pulse-100">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg py-3 px-6">
                <CheckCircle className="w-5 h-5 text-pulse-100 flex-shrink-0" />
                <span className="font-medium">{guarantee}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={scrollToCart}
              className="group bg-white text-pulse-500 hover:bg-pulse-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Order Now - 14.99$ - Free Delivery
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
          
          </div>

          {/* Urgency */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-pulse-100 font-medium mb-2">
              ⏰ Limited Time Offer - Free Shipping Worldwide
            </p>
            <p className="text-sm text-pulse-100">
              Join over 10,000+ customers who have already transformed their breathing. Order now and start your journey to better health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCTA;
