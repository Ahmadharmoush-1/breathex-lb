import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { FaInstagram } from 'react-icons/fa';
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about Atlas soon."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  return <section id="newsletter" className="bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>INSTAGRAM</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-display font-bold mb-4 text-left">Follow Us on Instagram </h2>
          <p className="text-xl text-gray-700 mb-10 text-left">
            Be first to hear about breakthroughs, partnerships, and deployment opportunities
          </p>
          
         <a
  href="https://www.instagram.com/breathex_lb/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-6 rounded-full transition-all duration-300"
>
  <FaInstagram className="text-2xl" />
  <span className="hidden sm:inline">Follow us</span>
</a>
        </div>
      </div>
    </section>;
};
export default Newsletter;