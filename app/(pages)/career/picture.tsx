import React from "react";
import Container from "@/components/Container";

const data = [
  {
    path: "https://victorious.com/wp-content/uploads/2023/09/placeholder-image-901.webp",
    title: "pic",
  },
];

const picture = () => {
  return (
    <Container>
      <div className="w-auto h-auto flex justify-center items-center">
        <img src={data[0].path} alt={data[0].title} width={1140} height={900} />
      </div>
    </Container>
  );
};

export default picture;
