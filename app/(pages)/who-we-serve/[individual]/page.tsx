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
import { client } from "@sanity/lib/client";
import { Vertical } from "@/types/sanity";

import Growth from "@components/ui/icons/Growth";
import Task from "@components/ui/icons/taskList";
import Search from "@components/ui/icons/search";
import Faq from "@/components/Faq";

export default async function Individual({
  params,
}: {
  params: { individual: string };
}) {
  const slug = params.individual;

  const data = await client.fetch(
    `*[_type == "vertical" && pageMeta.slug.current == $slug][0] {
      header {
        title,
        heading,
        description,
        mainImage {asset->{url}, alt},
        color
      },
      featuredCaseStudy {
        ...
      },
      features {
        grid {
          title,
          heading,
          description,        
          grid[] {title,description,icon},
        },
        bulletList {
          heading,
          description,
          list[],
          image{asset->{url}, alt},
        }[],
        numberList {
          heading,
          description,
          list[] {
            title, description,
          },
        },
      },
      cta {
        heading,
        description,
        button {text, path},
        image {asset->{url}, alt},
      },
      testimonials {
        heading,
        testimonials[] {
          name,
          title,
          description,
          rating,
          image {asset->{url}, alt},
        },
      },
      faqs {
        title,
        faqs[] { question, answer }
      },
    }`,
    {
      slug,
    }
  );

  return (
    <div>
      <HeroSection {...data?.header} />
      <Brands />
      <Consulting {...data?.features?.grid} />
      <Marketing data={data?.features?.bulletList} />
      <div className="bg-violetExtraLight py-[70px] rounded-[3rem]">
        <Container>
          <Slider />
        </Container>
      </div>
      <Learn {...data?.features?.numberList} />
      <Banner {...data?.cta} />
      <Testimonial {...data?.testimonials} />
      <Faq {...data?.faqs} />
    </div>
  );
}
