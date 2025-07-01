import React from "react";

const ImageGallerySection = () => {
  return (
    <section className="w-full py-8 sm:py-12 bg-gray-50" id="gallery">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white mr-2">05</span>
            <span>Gallery</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8 sm:mb-12 text-center">
            BREATHEX in Action
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="rounded-2xl overflow-hidden shadow-elegant animate-on-scroll">
              <img 
                src="\photos\breathingtrainer.png" 
                alt="BREATHEX Lung Flexer - Product View 1" 
                className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-white p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2">Premium Design</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  "Engineered for comfort and durability, BREATHEX combines advanced materials with ergonomic design."
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-elegant animate-on-scroll">
              <img 
                src="\photos\breathexspecifications.jpg" 
                alt="BREATHEX Lung Flexer - Product View 2" 
                className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-white p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2">Scientific Precision</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  "Every component is calibrated to provide optimal resistance training for your respiratory muscles."
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-elegant animate-on-scroll">
             <img
  src="/photos/PRODUCT3.jpg"
  alt="BREATHEX Lung Flexer – Product View 3"
  className="w-full h-64 sm:h-80 object-cover scale-80 hover:scale-105 transition-transform duration-300"
/>

              <div className="bg-white p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2">Portable Power</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  "Compact yet powerful, take your breathing training anywhere and transform your lung capacity."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
