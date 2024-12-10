import React from 'react';
import Image from 'next/image';

const LatestProducts: React.FC = () => {
  const products = [
    { src: '/Image/L1.png', alt: 'Comfort Handy Craft', price: '$42' },
    { src: '/Image/L2.png', alt: 'Comfort Handy Craft', price: '$42' },
    { src: '/Image/L3.png', alt: 'Comfort Handy Craft', price: '$42' },
    { src: '/Image/L4.png', alt: 'Comfort Handy Craft', price:  '$42' },
    { src: '/Image/L5.png', alt: 'Comfort Handy Craft', price:  '$42' },
   
   
  ];

  return (
    <section className="py-16 px-8 md:px-16 bg-gray-100">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 font-serif">Latest Products</h2>
      </div>
      <ul className="flex justify-center gap-8 mb-8">
        <li className="font-bold font-serif text-red-600 cursor-pointer">New Arrival</li>
        <li className="font-bold font-serif text-gray-800 cursor-pointer">Best Seller</li>
        <li className="font-bold font-serif text-gray-800 cursor-pointer">Feature</li>
        <li className="font-bold font-serif text-gray-800 cursor-pointer">Special Offer</li>
      </ul>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-white shadow-lg p-4 text-center"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={product.src}
                alt={product.alt}
                width={200} 
                height={200} 
                className="h-auto max-w-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{product.alt}</h3>
            <p className="text-lg font-bold text-green-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;