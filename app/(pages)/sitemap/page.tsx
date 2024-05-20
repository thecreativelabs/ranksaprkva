import CardSection from "@components/whoWeServe/CardSection";
import Help from "@/components/Cta";
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { client } from "@sanity/lib/client";
import { Vertical, WhoWeServe } from "@/types/sanity";
import HeroSection from "@components/case-study/heroSection";
import Link from "next/link";
import Container from "@/components/Container";
import { Location } from "../layout";

export type SitemapLinks = {
  links: {
    title: string;
    url: string;
  }[];
};

export default async function whoWeServe() {
  const sitemapLinks = (await client.fetch(`*[_type == "sitemap"][0] {
    links,
  }`)) as SitemapLinks;

  const locations = (await client.fetch(`*[_type == "location"] {
    name,
    slug
  }`)) as Location[];

  const verticals = (await client.fetch(
    `*[_type == "vertical"]`
  )) as Vertical[];

  const verticalsFiltered = [
    {
      name: "Industry",
      cards: verticals.filter((card) => card.type === "industry"),
    },
    {
      name: "Platform",
      cards: verticals.filter((card) => card.type === "platform"),
    },
    {
      name: "Market",
      cards: verticals.filter((card) => card.type === "market"),
    },
  ];

  return (
    <Container>
      <div className="w-full pt-24">
        <p className="text-light-red text-sm font-bold font-primary uppercase leading-[21px] tracking-widest pb-4">
          {"SITEMAP"}
        </p>
        <p className="w-[70%] text-dark-red text-3xl lg:text-xxxxxl font-normal font-Amiri leading-[30px] sm:leading-[67.34px]">
          {"Navigate our site."}
        </p>
      </div>
      <div className="space-y-12 divide-y divide-violet pb-24">
        <div className="pt-12">
          <h2 className="text-3xl">Pages</h2>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {sitemapLinks?.links?.map((link, key) => (
              <Link
                key={key}
                href={link.url}
                className="hover:text-violet transition duration-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="pt-12">
          <h2 className="text-3xl">Who We Serve</h2>
          {verticalsFiltered.map((vertical, i) => (
            <div key={i} className="pt-4">
              <h3 className="text-xl font-semibold py-4">{vertical.name}</h3>
              <div className="grid grid-cols-3 gap-4">
                {vertical.cards.map((card, i) => (
                  <Link
                    href={`/who-we-serve/${card.pageMeta?.slug?.current}`}
                    key={i}
                    className="hover:text-violet transition duration-300"
                  >
                    {card.pageMeta?.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-12">
          <h2 className="text-3xl">Locations</h2>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {locations.map((location, key) => (
              <Link
                key={key}
                href={`/location/${location.slug.current}`}
                className="hover:text-violet transition duration-300"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
