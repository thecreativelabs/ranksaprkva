import client from "@/lib/sanity";
import Container from "../components/Container";
import Topnav from "../components/navbar/Topnav";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import Badges from "../components/Badges";
import Features from "../components/Features";
import Brands from "../components/Brands";
import Partnership from "../components/Partnership";
import Algorithms from "../components/Algorithms";
import Learn from "../components/Learn"
import Strategy from "../components/Strategy";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default async function Home() {
  const landingPage = await client.fetch(`*[_type == "landingPage"] {
    header {
      title,
      description,
      cta { title, button->{
        text,path
      } },
      secondaryButton->{ text, path },
      revenue
    },
    features {
      heading,
      description,
      image,
      metrics[],
      list[],
      button->{text, path}
    }[],
    featuresGrid
  }[0]`);

  return (
    <div>
      {/* <pre>{JSON.stringify(landingPage, null, 2)}</pre> */}
      <Topnav />
      <Navbar />
      <Hero />
      <Badges />
      <Features />
      <Brands />
      <Partnership />
      <Algorithms />
      <Learn />
      <Strategy />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
};
