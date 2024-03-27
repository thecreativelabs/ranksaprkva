import HeroSection from "@components/whoWeServe/herosection";
import CardSection from "@components/whoWeServe/CardSection";
import Help from "@/components/Cta";
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { client } from "@sanity/lib/client";
import { WhoWeServe } from "@/types/sanity";

export default async function whoWeServe() {
  const data = (await client.fetch(
    `*[_type == "whoWeServe"][0]`
  )) as WhoWeServe;

  return (
    <>
      <HeroSection />
      <CardSection />
    </>
  );
}
