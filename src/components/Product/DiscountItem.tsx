import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa"; 

const DiscountItem: React.FC = () => {
  return (
    <section className="bg-white py-5 px-4">
      <div className="container mx-auto text-center">
      
        <h2 className="text-3xl font-bold text-[#151875] mb-8">Discount Item</h2>

       
        <div className="flex justify-center space-x-8 mb-8 flex-wrap">
          <div className="flex items-center space-x-2">
            <a
              href="#"
              className="text-lg font-semibold text-[#151875] hover:underline hover:text-[#FB2E86] transition-all">
              Wood Chair
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="#"
              className="text-lg font-semibold text-[#151875] hover:underline hover:text-[#FB2E86] transition-all"
            >
              Plastic Chair
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="#"
              className="text-lg font-semibold text-[#151875] hover:underline hover:text-[#FB2E86] transition-all"
            >
              Sofa Collection
            </a>
          </div>
          
        </div>

       
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:px-20">
       
          <div className="md:w-1/2 mb-8 md:mb-0 px-4 text-left">
            <h3 className="md:text-4xl text-2xl font-bold text-[#151875] mb-4">
              20% Discount Of All Products
            </h3>
            <p className="text-lg text-[#555] mb-4">
              Get amazing deals on selected products. Hurry, these discounts
              wont last long!
            </p>
            
            <div className="flex flex-wrap justify-start">
          
              <div className="w-full md:w-1/2 mb-4">
                <div className="flex items-center space-x-2 mb-4">
                  <p className="text-sm text-[#FB2E86]">Eams Sofa Compact</p>
                  <FaCheckCircle className="text-green-500" />
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <p className="text-sm text-[#FB2E86]">Simple neutral colours.</p>
                  <FaCheckCircle className="text-green-500" />
                </div>
              </div>

              {/* Group 2 */}
              <div className="w-full md:w-1/2 mb-4">
                <div className="flex items-center space-x-2 mb-4">
                  <p className="text-sm text-[#FB2E86]">Material expose like metals</p>
                  <FaCheckCircle className="text-green-500" />
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <p className="text-sm text-[#FB2E86]">Clear lines and geometric figures</p>
                  <FaCheckCircle className="text-green-500" />
                </div>
              </div>
            </div>

            <button className="px-6 py-3 bg-[#FB2E86] font-semibold rounded shadow hover:bg-gray-800 text-white transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Right side - Image */}
          <div className="md:w-1/2 flex justify-center px-4">
            <Image
              src="/Image/Discount.png" 
              alt="Discount Item"
              layout="intrinsic"
              width={400}
              height={400}
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;