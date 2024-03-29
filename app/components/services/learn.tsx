import Learn from "@components/whoWeServe/Individual/Learn";
import Container from "../Container";

export default function ServiceLearn({
  data,
}: {
  data: {
    heading: string;
    description: string;
    list: {
      title: string;
      description: string;
    }[];
  };
}) {
  return (
    <Container>
      <Learn {...data} />
    </Container>
  );
}
