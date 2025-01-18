
import React from "react";
import Image from "next/image";
interface TextType {
  textTitle: string;
  textNavigation: string;
  pageName: string;
  className?: string;
}

const FilterSection = ({
  textTitle = "Shopping Cart",
  textNavigation = "Home . Pages.",
  pageName = "Shopping Cart",
}: TextType) => {
 
  return (
    <section>
      {/* Header Section */}
      <div
        className={`flex flex-col bg-[#F6F5FF] w-full h-[286px] lg:pl-24 pt-24 text-center lg:text-start ${textNavigation}`}
      >
        <h1 className="text-4xl font-bold text-indigo-950">{textTitle}</h1>
        <p className="lato mt-2 text-gray-600">
          {textNavigation}
          <span className="text-pink-500 font-semibold">{pageName}</span>
        </p>
      </div>

      {/* Filter Summary */}
      <div className="border-b py-6 flex justify-around items-center lg:flex-row flex-col px-3">
        <div>
          <h1 className="text-2xl text-indigo-950 font-bold">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-sm text-gray-400 lato mt-2">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;