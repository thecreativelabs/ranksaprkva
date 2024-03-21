import { client } from "@sanity/lib/client";
import Container from "@components/Container";
import Topnav from "@components/navbar/Topnav";
import Navbar from "@components/navbar/Navbar";
import Hero from "@components/Hero";
import Badges from "@components/Badges";
import Slider from "@components/Slider";
import Features from "@components/Features";
import Brands from "@components/Brands";
import Partnership from "@components/Partnership";
import Algorithms from "@components/Algorithms";
import Learn from "@components/Learn";
import Strategy from "@components/Strategy";
import Faq from "@components/Faq";
import Cta from "@components/Cta";
import Footer from "@components/Footer";

export default async function Home() {
  const page = await client.fetch(`*[_type == "landingPage"] {  
    header {
      title,
      description,
      mainImage {asset->{url}, alt},
      secondaryImage {asset->{url}, alt},
      button->{text, path}
    },
    section1 {
      heading,
      description,
      stats[] {title, image{asset->{url}, alt}},
      button->{text, path},
      image {asset->{url}, alt}
    }
  }[0]`);
  if (!page) return <></>;

  return (
    <div>
      <Hero data={page.header} />
      <Badges />
      <Features />
      <Brands />
      <Slider />
      <Partnership />
      <Algorithms />
      <Learn />
      <Strategy />
      <Faq />
    </div>
  );
}
