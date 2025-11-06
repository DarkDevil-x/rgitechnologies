import React from 'react';

function Clients() {
  const clients = [
    "JDS Padrauna",
    "Chai Mitra",
    "AISSHPRA Basti",
    "TVS Padrauna",
    "JAIPURIA padrauna",
    "KSS Study Point",
    "Radiant Classes"
  ];

  return (
    <section id="clients" className="py-20 bg-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Trusted By</h2>
      </div>
      <div className="relative">
        <div className="flex overflow-hidden">
          <div className="flex animate-slide client-scroll">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex">
                {clients.map((clientName, index) => (
                  <div key={`${groupIndex}-${index}`} className="flex-shrink-0 w-48 mx-8">
                    <div className="bg-white p-8 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg border border-purple-100 h-full">
                      <span className="text-lg font-medium text-gray-700 opacity-50 hover:opacity-100 transition-opacity duration-300 text-center">
                        {clientName}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;