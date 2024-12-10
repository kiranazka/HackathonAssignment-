'use client';

import FilterSection from '@/components/Product/FilterSection';
import React from 'react';
import Image from "next/image";
import { FaShoppingCart, FaHeart, FaSearch, } from "react-icons/fa";


interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  originalPrice: string;
}

const Products: React.FC = () => {
  const latestProducts: Product[] = [
    {
      id: 1,
      name: "Vel elit euismod",
      image: "/SaleProduct/sale1.png",
      price: "$200",
      originalPrice: "$300",
    },
    {
      id: 2,
      name: "Ultricies condimentum imperdiet",
      image: "/SaleProduct/sale1.png",
      price: "$150",
      originalPrice: "$250",
    },
    {
      id: 3,
      name: "Vitae suspendisse sed",
      image: "/SaleProduct/sale3.png",
      price: "$300",
      originalPrice: "$450",
    },
    {
      id: 4,
      name: "Sed at fermentum",
      image: "/SaleProduct/sale4.png",
      price: "$80",
      originalPrice: "$120",
    },
    {
      id: 5,
      name: "Fusce pellentesque at",
      image: "/SaleProduct/sale5.png",
      price: "$400",
      originalPrice: "$600",
    },
    {
      id: 6,
      name: "Vestibulum magna laoreet",
      image: "/SaleProduct/sale6.png",
      price: "$60",
      originalPrice: "$100",
    },
    {
      id: 7,
      name: "Sollicitudin amet orci",
      image: "/SaleProduct/sale7.png",
      price: "$60",
      originalPrice: "$100",
    },
    {
      id: 8,
      name: "Ultrices mauris sit",
      image: "/SaleProduct/sale8.png",
      price: "$60",
      originalPrice: "$100",
    },
    {
      id: 9,
      name: "Pellentesque condimentum ac",
      image: "/SaleProduct/sale9.png",
      price: "$60",
      originalPrice: "$100",
    },
    {
      id: 10,
      name: "Cras scelerisque velit",
      image: "/SaleProduct/sale10.png",
      price: "$60",
      originalPrice: "$100",
    },
    {
      id: 11,
      name: "Lectus vulputate faucibus",
      image: "/SaleProduct/sale11.png",
      price: "$60",
      originalPrice: "$100",
    },
    {
      id: 12,
      name: "Ultrices mauris sit",
      image: "/SaleProduct/sofa.png",
      price: "$60",
      originalPrice: "$100",
    },
    
  ];

  return (
    <section className="">
       <FilterSection
        textTitle={"Shop Products"}
        textNavigation={"Home . "}
        pageName={"Product.."}
      />
      <div className="container mx-auto px-4 py-5 md:px-40">
        <div className="">
          <h2 className="text-3xl font-bold text-center text-[#0D0E43] mb-8 mt-12">
            Over Products!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white shadow-md rounded-lg overflow-hidden relative hover:scale-105 transition-transform duration-300"
            >
              {/* Product Image */}
              <div className="relative w-full h-[250px] flex justify-center items-center overflow-hidden bg-[#F6F7FB]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 relative">
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold text-[#0D0E43]">
                    {product.name}
                  </h3>
                  <p className="text-lg font-semibold text-[#FB2E86]">
                    {product.price}
                  </p>
                </div>
                <p className="text-sm text-[#777] line-through">
                  {product.originalPrice}
                </p>
              </div>

              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 px-4">
                  <FaShoppingCart className="text-xl cursor-pointer text-gray-800 hover:text-[#08D15F]" />
                  <FaHeart className="text-xl cursor-pointer text-gray-800 hover:text-[#FB2E86]" />
                  <FaSearch className="text-xl cursor-pointer text-gray-800 hover:text-[#533feb]" />
                </div>

                <div className="absolute top-0 right-0">
                  <button className="bg-[#3F509E] text-white py-2 px-5 shadow-xl text-xs transition-all">
                    Sell
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;