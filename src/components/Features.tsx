import React from "react";
import { ArrowRight, Star, Shield, Zap, Heart, TrendingUp, Award } from "lucide-react";

const Features = () => {
  const scrollToCart = () => {
    const cartSection = document.getElementById('cart');
    if (cartSection) {
      cartSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Enhanced Lung Capacity",
      description: "Scientifically proven to increase your lung capacity by up to 40% through targeted resistance training.",
      benefit: "Improved Endurance"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description: "Feel the difference in your breathing within the first week of consistent use.",
      benefit: "Quick Results"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Medical Grade Quality",
      description: "Built with premium materials and tested by respiratory specialists worldwide.",
      benefit: "Trusted by Professionals"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Tracking",
      description: "Monitor your progress with built-in metrics and see your improvement over time.",
      benefit: "Data-Driven Progress"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning Design",
      description: "Recognized by health professionals and awarded for innovation in respiratory training.",
      benefit: "Industry Recognition"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "5-Star Reviews",
      description: "Join thousands of satisfied customers who have transformed their breathing and health.",
      benefit: "Customer Satisfaction"
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-white" id="features">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Why Choose BREATHEX</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Transform Your <span className="text-pulse-500">Breathing Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the revolutionary technology that's helping thousands of people breathe better, perform stronger, and live healthier lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToCart}
              className="group bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={() => {
                const gallerySection = document.getElementById('gallery');
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-white border-2 border-pulse-500 text-pulse-500 hover:bg-pulse-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              View Gallery
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover:translate-y-[-8px] border border-gray-100 hover:border-pulse-200"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-pulse-500 group-hover:text-pulse-600 transition-colors duration-300">
                  {feature.icon}
                </div>
                <span className="text-xs font-semibold text-pulse-500 bg-pulse-50 px-3 py-1 rounded-full">
                  {feature.benefit}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-4 text-gray-900 group-hover:text-pulse-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <button 
                className="text-pulse-500 hover:text-pulse-600 font-medium text-sm flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                onClick={scrollToCart}
              >
                Learn More 
                <ArrowRight className="w-4 h-4 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-pulse-50 rounded-2xl p-8 border border-pulse-100">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Ready to Transform Your Health?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already experienced the life-changing benefits of BREATHEX. Your journey to better breathing starts today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToCart}
                className="group bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Order BREATHEX Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              {/* <button 
                onClick={() => {
                  const detailsSection = document.getElementById('details');
                  if (detailsSection) {
                    detailsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-white border-2 border-pulse-500 text-pulse-500 hover:bg-pulse-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                Get Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
