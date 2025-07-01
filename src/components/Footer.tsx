import React from "react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="section-container">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/breathex_lb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
         <p className="text-center text-gray-600 text-sm">
  This product  takes inspiration from{" "}
  <a href="https://x.com/BrettFromDJ" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
   breathex_lb
  </a>{" "}
  
  {/* <a href="https://x.com/rezaul_arif" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    BREATHEX
  </a> */}
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
