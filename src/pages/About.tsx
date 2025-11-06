import React, { useEffect, useState } from 'react';
import { Building, Briefcase } from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white" ref={aboutRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content with Animation */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Who We Are</h2>
            <p className="text-gray-600 mb-6">
              At RGI Creation, we believe in the transformative power of digital connectivity. As a passionate team of young innovators, our vision is to bridge the gap between remote areas and the digital world.
            </p>
            <p className="text-gray-600 mb-6">
              We are committed to fueling India's Digital Revolution by providing cutting-edge social media marketing solutions that amplify voices and boost brands.
            </p>

            {/* Mission/Vision Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg hover:scale-105 transition-transform duration-300 border border-purple-100">
                <Building className="w-8 h-8 text-purple-600 mb-2" />
                <h3 className="font-bold mb-2 text-gray-800">Our Mission</h3>
                <p className="text-sm text-gray-600">To elevate brands through creative storytelling</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg hover:scale-105 transition-transform duration-300 border border-purple-100">
                <Briefcase className="w-8 h-8 text-purple-600 mb-2" />
                <h3 className="font-bold mb-2 text-gray-800">Our Vision</h3>
                <p className="text-sm text-gray-600">Setting new standards in digital marketing</p>
              </div>
            </div>
          </div>

          {/* Image with Hover Effects */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
            
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Team at work"
              className="relative rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300 w-full"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <p className="text-4xl font-bold mb-2 text-gray-800">5+ Years</p>
              <p className="text-sm text-gray-600">Combined Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;