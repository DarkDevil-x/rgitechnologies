import React from 'react';
import { Star } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: "JDS Padrauna",
      role: "Marketing Director",
      company: "School",
      text: "Rudra Creation revolutionized our Instagram presence! Their expertise skyrocketed our engagement by 300%, making them a reliable partner for boosting online impact. What goals did you set when you began working with them?"
    },
    {
      name: "Umang Khetan",
      role: "Owner",
      company: "Shop",
      text: "Rudra Creation is a top-tier digital marketing agency! Their expertise in SEO, social media, and targeted campaigns boosted our brand’s visibility and drove quality leads, leveraging their deep local market knowledge. Highly reliable and recommended!"
    },
    {
      name: "Vikram Agarwal",
      role: "Owner",
      company: "Showroom",
      text: "Rudra Creation elevated our Instagram game with outstanding reel production quality! Their exceptional content perfectly tells our brand story, resulting in a remarkable 300% increase in engagement. A truly reliable partner for enhancing online presence!"
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      company: "Boutique",
      text: "Working with Rudra Creation was a game-changer for our business! Their creative marketing strategies and professional approach helped us reach new heights. Highly recommended!"
    },
    {
      name: "Rahul Kumar",
      role: "CEO",
      company: "Tech Company",
      text: "Rudra Creation's innovative digital solutions have transformed our online presence. Their team's expertise and dedication are truly exceptional."
    },
    {
      name: "Sneha Gupta",
      role: "Marketing Manager",
      company: "Restaurant",
      text: "The results from our collaboration with Rudra Creation have been outstanding. Their creative approach and attention to detail have made a significant impact on our business."
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur",
      company: "Startup",
      text: "Rudra Creation's expertise in digital marketing has been instrumental in our growth. Their innovative strategies and professional execution have exceeded our expectations."
    },
    {
      name: "Neha Singh",
      role: "Brand Manager",
      company: "Fashion Brand",
      text: "The team at Rudra Creation has been fantastic to work with. Their creative solutions and professional approach have helped us achieve our marketing goals."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Clients Say</h2>
      
      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
          <div className="flex space-x-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] group bg-purple-50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-purple-100"
              >
                <div className="flex items-center text-purple-600 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill="currentColor" 
                      className="group-hover:animate-spin" 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-purple-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Optional scroll indicators */}
        {/* <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-purple-200 opacity-50"
            />
          ))}
        </div> */}
      </div>
    </div>
  </section>
  );
}

export default Testimonials;