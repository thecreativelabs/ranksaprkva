import type { Metadata, ResolvingMetadata } from "next";
import { Inter, Kanit, Outfit } from "next/font/google";
import "./globals.css";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import RadixNavbar from "@/components/navbar/RadixNavbar";
import { client } from "@sanity/lib/client";
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
  Settings,
  Vertical,
} from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

const inter = Inter({ subsets: ["latin"] });

const kanit = Kanit({
  weight: ["400"],
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["400", "600"],
  subsets: ["latin"],
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const data = (await client.fetch(`*[_type == "settings"][0]`)) as Settings;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [urlForImage(data.openGraphImage) || ""],
    },
  };
}

export type Services = {
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  description: string;
  icon: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
    alt?: string;
  };
  subCategory: {
    slug: {
      _type: string;
      current: string;
    };
  } | null;
};
export type WhoWeServe = {
  type: string;
  pageMeta: {
    name: string;
    slug: {
      _type: string;
      current: string;
    };
    icon: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
      alt?: string;
    };
  };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const services = (await client.fetch(`*[_type == "services"] {
    title,
    slug,
    icon,
    description,
    subCategory->{slug}
  }`)) as Services[];
  const whoWeServe = (await client.fetch(`*[_type == "vertical"] {
    type,
    pageMeta {
      name,
      slug,
      icon
    }
  }`)) as WhoWeServe[];

  return (
    <html lang="en">
      <body className={inter.className}>
        <Topnav />
        <RadixNavbar services={services} whoWeServe={whoWeServe} />

        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
