
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



export default function Home() {
  return (
      <div>
         <Header/>
         <Hero/>
         <FeaturedProducts/>
           {/* <FilterSection textTitle={""} textNavigation={""} pageName={""}/> */}
         <LatestProducts/>
         <OutletSection/>
        <DiscountItem/>
        <TopCategories/>
        <Blog/>
        <Footer/>
       
       
    </div>
  )
}
