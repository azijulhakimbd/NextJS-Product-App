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
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="bg-base-100">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-base-content leading-tight">
            Discover Amazing <br />
            <span className="text-primary">Products</span>
          </h1>
          <p className="mt-4 text-lg text-base-content/70">
            Shop the latest products with ease. Enjoy fast checkout, secure
            payment, and exclusive deals tailored just for you.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/products"
              className="btn rounded-2xl btn-primary flex items-center gap-2"
            >
              <FaShoppingCart /> Shop Now
            </Link>
            <Link
              href="/login"
              className="btn rounded-2xl"
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
