import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Topnav from "@/components/navbar/Topnav";
import Navbar from "@/components/navbar/Navbar";
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700&family=Poppins:wght@200;300;400;500;600;700&family=Roboto:ital,wght@0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Topnav />
        {/* <Navbar /> */}
        <RadixNavbar services={services} whoWeServe={whoWeServe} />

        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
