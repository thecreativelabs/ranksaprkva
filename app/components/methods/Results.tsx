"use client";
import CircleArrow from "@components/ui/icons/circleButtonArrow";
import Image from "next/image";
import Container from "../Container";
import { MethodPage } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";
import Strategy from "../Strategy";

export default function Results({
  section6: data,
}: {
  section6: MethodPage["section6"];
}) {
  return (
    <Strategy
      title={data?.heading}
      description={data?.description}
      button={data?.cta?.button}
      image={{
        asset: {
          url: urlForImage(data?.mainImage),
        },
        alt: data?.mainImage?.alt,
      }}
    />
  );
}
