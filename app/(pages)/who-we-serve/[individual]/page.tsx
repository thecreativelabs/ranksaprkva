"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeroSection from "@/components/whoWeServe/Individual/Hero";
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Brands from "@/components/Brands";
import Consulting from "@/components/whoWeServe/Individual/consulting";
import Marketing from "@/components/whoWeServe/Individual/Marketing";
import Slider from "@/components/methods/Slider";
import Container from "@/components/Container";
import Learn from "@/components/whoWeServe/Individual/Learn";
import Banner from "@/components/whoWeServe/Individual/Banner";
import Testimonial from "@/components/whoWeServe/Individual/Testimonial";
import QandA from "@/components/whoWeServe/Individual/QandA";
export default function Individual() {
  const pathname = usePathname();
  const [individual, setIndividual] = useState("");

  useEffect(() => {
    const segments = pathname?.split("/");
    if (segments) {
      if (segments.length >= 3) {
        setIndividual(segments[2]);
      }
    }
  }, [pathname]);
  return (
    <div>
      <HeroSection />
      <Brands />
      <Consulting />
      <Marketing />
      <div className="bg-gray py-[70px]">
        <Container>
          <div>
            <Slider />
          </div>
        </Container>
      </div>
      <Learn />
      <Banner />
      <Testimonial />
      <QandA />
    </div>
  );
}
