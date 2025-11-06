import { Play, Instagram, TrendingUp, Rocket, Users, Code, Calendar, Megaphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Play,
      title: "Reel Production",
      description: "Crafting scroll-stopping reels that capture attention and drive engagement."
    },
    {
      icon: Instagram,
      title: "Instagram Management",
      description: "Full-service Instagram growth and management to build your brand presence."
    },
    {
      icon: TrendingUp,
      title: "Strategy & Analytics",
      description: "Data-driven strategies to maximize your social media ROI."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom website development and optimization for digital success."
    },
    {
      icon: Calendar,
      title: "Event Organizer",
      description: "Professional event planning and execution for memorable experiences."
    },
    {
      icon: Megaphone,
      title: "Brand Promotion",
      description: "Strategic brand building and marketing to enhance your visibility."
    }
  ];

  return (
    <section id='services' className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl border border-purple-100"
            >
              <service.icon className="w-12 h-12 text-purple-600 mb-4 transform group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}