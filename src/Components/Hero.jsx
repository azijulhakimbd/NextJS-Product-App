"use client";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const images = [
    "https://i.postimg.cc/L5ScbwF6/make-some-image-for-slider-in-web-page-category-tech-and-phone.jpg",
    "https://i.postimg.cc/kMF3bJWV/make-some-image-for-slider-in-web-page-category-tech-and-phone-1.jpg",
    "https://i.postimg.cc/8cb2Q4Td/make-some-image-for-slider-in-web-page-category-tech-and-phone-2.jpg",
    "https://i.postimg.cc/pTKNkx76/make-some-image-for-slider-in-web-page-category-tech-and-phone-3.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 sec
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false, // keeps auto sliding even when hovered
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Discover Amazing{" "} <br />
            <span className="text-blue-600 dark:text-blue-400">Products</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Shop the latest products with ease. Enjoy fast checkout, secure
            payment, and exclusive deals tailored just for you.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/products"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
            >
              <FaShoppingCart /> Shop Now
            </Link>
            <Link
              href="/register"
              className="px-6 py-3 rounded-lg border border-gray-400 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Slider */}
        <div className="flex-1 w-full max-w-md mx-auto">
          <Slider {...sliderSettings}>
            {images.map((src, i) => (
              <div key={i}>
                <Image
                  src={src}
                  alt={`Hero Slide ${i + 1}`}
                  width={500}
                  height={500}
                  className="w-full rounded-xl shadow-lg object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
