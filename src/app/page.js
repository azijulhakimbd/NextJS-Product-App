import HeroSection from "@/Components/Hero";
import ProductHighlights from "@/Components/ProductHighlights";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" mx-auto">
    {/* Hero Section */}
    <HeroSection/>
    {/* Product Highlights Section*/}
    <ProductHighlights/>
    </div>
  );
}
