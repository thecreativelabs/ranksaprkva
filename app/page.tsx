import client from "@/lib/sanity";

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

  return <pre>{JSON.stringify(landingPage, null, 2)}</pre>;
}
