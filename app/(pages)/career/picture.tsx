import React from "react";
import Container from "@/components/Container";

const data = {
  path: "https://victorious.com/wp-content/uploads/2023/09/placeholder-image-901.webp",
  title: "pic",
};

const picture = () => {
  return (
    <Container>
      <div className="w-auto h-auto flex justify-center items-center">
        <img
          src={data.path}
          alt={data.title}
          width={1140}
          height={900}
          className="rounded-[3rem]"
        />
      </div>
    </Container>
  );
};

export default picture;
