import React from "react";
import Image from "next/image";
import FilterSection from "@/components/Product/FilterSection";
import Footer from '@/components/Footer/Footer';

const Pages = () => {
  return (
    <div>
      <FilterSection
        textTitle={"About Us!"}
        textNavigation={"Home . Pages . "}
        pageName={"About Us..."}
      />

      {/* About Section */}
      <section className="flex flex-col md:px-40 md:flex-row items-center gap-8 p-8">
        {/* Image Side */}
        <div className="flex-1">
          <Image
            src={'/Image/aboutimage.png'}
            width={400}
            height={400}
            alt="About Us"
            className="rounded-lg"
          />
        </div>

        {/* Content Side */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Know About Our Ecommerce Business, History</h2>
          <p className="text-gray-600 leading-relaxed">
            Discover high-quality products tailored to your needs. Our goal is to deliver
            the best shopping experience with exceptional customer service.
          </p>
          <button className="px-6 py-3 md:my-10 bg-[#FB2E86] text-white rounded hover:bg-[#e34e8e]">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <h3 className="text-center text-2xl font-bold mb-8">Our Features</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
          {/* Feature Card 1 */}
          <div className="p-4 rounded shadow-lg text-center">
            <Image
              src="/Image/premium-quality 1.png"
              width={48}
              height={48}
              alt="High Quality"
              className="mx-auto mb-4"
            />
            <h4 className="font-bold text-lg">High Quality</h4>
            <p className="text-sm text-gray-600">We offer the best products in the market.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="p-4 rounded shadow-lg text-center">
            <Image
              src="/Image/free-delivery 1.png"
              width={48}
              height={48}
              alt="Fast Shipping"
              className="mx-auto mb-4"
            />
            <h4 className="font-bold text-lg">Fast Shipping</h4>
            <p className="text-sm text-gray-600">Your orders will arrive quickly and safely.</p>
          </div>

          {/* Feature Card 3 */}
          <div className="p-4 rounded shadow-lg text-center">
            <Image
              src="/Image/24-hours-support 1.png"
              width={48}
              height={48}
              alt="Customer Support"
              className="mx-auto mb-4"
            />
            <h4 className="font-bold text-lg">Customer Support</h4>
            <p className="text-sm text-gray-600">
              24/7 support to help you with your queries.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="p-4 rounded shadow-lg text-center">
            <Image
              src="/Image/cashback 1.png"
              width={48}
              height={48}
              alt="Affordable Prices"
              className="mx-auto mb-4"
            />
            <h4 className="font-bold text-lg">Affordable Prices</h4>
            <p className="text-sm text-gray-600">Top-notch products at reasonable prices.</p>
          </div>
        </div>
        <Footer/>
      </section>
    </div>
  );
};

export default Pages;