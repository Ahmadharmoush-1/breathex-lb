
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experience Revolutionary Breathing
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            "Transform your lung capacity with BREATHEX - the breakthrough device that makes every breath count. 
            Feel the difference in just days, achieve peak performance in weeks."
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="\photos\breathingtrainer.png" 
              alt="BREATHEX Lung Flexer - Revolutionary breathing device" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation Lung Training</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              "Unlock your respiratory potential with BREATHEX. Our scientifically-designed resistance training device 
              strengthens your breathing muscles, improves oxygen delivery, and enhances your overall performance. 
              Join thousands who have transformed their breathing - and their lives."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
