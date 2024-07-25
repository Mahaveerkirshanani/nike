import Banner from "@/components/BannerComponent";
import CTASection from "@/components/CallToAction";
import ContactUs from "@/components/ContactUs";
import CustomerFeedback from "@/components/CustomerFeedback";
import Discounts from "@/components/Discounts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallary";
import OurServices from "@/components/OurServices";
import OurTeam from "@/components/OurTeam";
import Personal from "@/components/Personal";
import Products from "@/components/Products";
import SpecialProducts from "@/components/SpecialProducts";
import TestimonialCarousel from "@/components/Testonimial";
import TrustedBy from "@/components/TrustedBy";
import Nav from "@/components/ui/Nav";
import React from "react";
// _app.tsx
import "swiper/css";

const Home = () => {
  return (
    <div className="">
      <Nav />
      <HeroSection />
      <Hero />
      <TrustedBy />
      <ImageGallery />
      <TestimonialCarousel />
      <CTASection />
      <OurServices />
      <Products />
      <SpecialProducts />
      <Discounts />
      <CustomerFeedback />
      <OurTeam />
      <Personal />
      <ContactUs />

      <Footer />
    </div>
  );
};

export default Home;
