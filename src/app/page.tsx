import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/HeroSection/Hero";
import Blog from "@/components/Product/Blog";
import DiscountItem from "@/components/Product/DiscountItem";
import FeaturedProducts from "@/components/Product/FeatureProducts";
import FilterSection from "@/components/Product/FilterSection";
import LatestProducts from "@/components/Product/LatestProduct";
import OutletSection from "@/components/Product/OutletSection";
import TopCategories from "@/components/Product/TopCategories";
import {client} from "@/sanity/lib/client";
import { getAllProducts } from "@/sanity/lib/data";
import { product} from "@/sanity/lib/data";
import Image from "next/image";

export default async function Home() {
  
  const product:product = await getAllProducts();
  console.log(product);
  return (
   
        <div className="max-w-[1300px] mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">All Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {product.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
                        <img src={product.ImageUrls} alt={product.name} className="w-full h-auto rounded-md mb-4" />
                        <h2 className="text-lg font-bold mb-2">Name: {product.name}</h2>
                        <p className="text-gray-600 mb-2">Description: {product.description}</p>
                        <p className="mb-2">Price: ${product.price}</p>
                        <p className="mb-2">Quantity: {product.stockLevel}</p>
                        <p className="mb-2">Discount: {product.discountPercentage}%</p>
                        <p className="mb-2">Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>
                        <p className="mb-2">Category: {product.category}</p>
                    </div>
                ))}
            </div>
    
        

         <Header/>
         <Hero/>
         <FeaturedProducts/>
         <FilterSection textTitle={""} textNavigation={""} pageName={""}/>
        <LatestProducts/>
         <OutletSection/>
        <DiscountItem/>
        <TopCategories/>
        <Blog/>
        <Footer/>
       
       
    </div>
  )
}
