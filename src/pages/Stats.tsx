import React from 'react';

function Stats() {
  const stats = [
    { value: "500+", label: "Reels Created" },
    { value: "50M+", label: "Views Generated" },
    { value: "100+", label: "Happy Clients" }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text group-hover:animate-pulse">
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;