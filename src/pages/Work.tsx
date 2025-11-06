import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/caard";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function Work() {
  const works = [
       {
         reelUrl: 'https://www.instagram.com/reel/DF4SMonzgBh/',
         thumbnail: '/IP534.jpg', // Replace with actual thumbnail URLs
         title: 'JDS Padrauna',
         category: 'School',
         // views: '2.5M views'
       },
        {
          reelUrl: 'https://www.instagram.com/reel/DGX5Sm2MLgP/',
          thumbnail: '/IP103.jpg',
          title: 'AISSHPRA GEMS AND JEWELS BASTI',
          category: 'Shop',
          // views: '1.8M views'
        },
        {
          reelUrl: 'https://www.instagram.com/reel/DHIADvBRNAv/',
          thumbnail: '/IP771.jpg',
          title: 'TVS Padrauna',
          category: 'Shop',
          // views: '1.8M views'
        },
        {
          reelUrl: 'https://www.instagram.com/reel/DBDjVvWSkJO/',
          thumbnail: '/IP162.jpg',
          title: 'Chai Mitra',
          category: 'Cafe',
          // views: '1.8M views'
        },
        {
          reelUrl: 'https://www.instagram.com/reel/DF9oD5URFPG/',
          thumbnail: '/IP459.jpg',
          title: 'SETH M. R. JAIPURIA SCHOOL, PADRAUNA',
          category: 'School',
          // views: '1.8M views'
        },
        {
          reelUrl: 'https://www.instagram.com/p/DHbT3ghz80Z/',
          thumbnail: '/IP552.jpg',
          title: 'KSS Study Point',
          category: 'Coaching',
          // views: '1.8M views'
        },
      ];
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col">
              <AspectRatio ratio={13 / 16} className="w-full bg-gray-100 relative group">
                {/* Thumbnail image with clickable overlay */}
                <a
                  href={work.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white rounded-full p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="sr-only">View Reel</span>
                  </div>
                  {/* Instagram badge */}
                  <div className="absolute bottom-2 left-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-2 py-1 rounded flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram Reel
                  </div>
                </a>
              </AspectRatio>
              <CardHeader>
                <CardTitle className="text-xl">{work.title}</CardTitle>
                <CardDescription className="text-purple-600">{work.category}</CardDescription>
              </CardHeader>
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;