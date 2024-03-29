import Marketing from "@components/whoWeServe/Individual/Marketing";
import Container from "../Container";

export default function ServiceMarketing({
  data,
}: {
  data: {
    heading: string;
    description: string;
    list: string[];
    image: { asset: { url: string }; alt: string };
  }[];
}) {
  return (
    <Container>
      <Marketing data={data} />
    </Container>
  );
}
