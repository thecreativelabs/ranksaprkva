import HeroSection from "@/components/whoWeServe/Individual/Hero";
const data = {
  title: "SAAS SEO SERVICES",
  heading: "Your solution deserves to be seen.",
  content:
    "Great software solutions deserve a great SEO strategy. As a premiere SaaS SEO agency, we take high-quality content, relevant keywords, and other SEO efforts to boost your online visibility — and your conversion rates.",
  image: "/whoWeServe/heroimage.png",
  color: " bg-light-pink ",
};
export default function HeroCaseIndividual(header: {
  title: string;
  heading: string;
  description: string;
  mainImage: { asset: { url: string }; alt: string };
  color: string;
}) {
  return <HeroSection {...header} />;
}
