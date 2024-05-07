import Banner from "@components/whoWeServe/Individual/Banner";
import Container from "../Container";
export default function ServiceBanner({
  data,
}: {
  data: {
    heading: string;
    description: string;
    button: { text: string; path: string };
    image: { asset: { url: string }; alt: string };
  };
}) {
  return <Banner {...data} />;
}
