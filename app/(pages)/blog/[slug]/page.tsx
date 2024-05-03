import BlogCards from "@/components/blog/cards";
import Content from "@/components/blog/content";
import { client } from "@sanity/lib/client";
import { Article, Author } from "@/types/sanity";
import Container from "@/components/Container";
import { urlForImage } from "@sanity/lib/image";
import { PortableText } from "@/components/PortableText";
import { renderToString } from "react-dom/server";
import React from "react";
import { notFound } from "next/navigation";
export type ArticleWithAuthor = Omit<Article, "author"> & { author: Author };

export default async function Page({ params }: { params?: { slug: string } }) {
  const data =
    (await client.fetch(`*[_type == "article" && slug.current== "${params?.slug}" ]{
    ...,
    author->
  
  }`)) as ArticleWithAuthor[];

  if (!data.length) return <></>;

  let h1Elements = data[0]?.body
    ?.map((block: any, index: number) => {
      if (block._type === "block" && block.style === "h2") {
        return <h2 key={index}>{block.children}</h2>;
      }
      return null;
    })
    .filter((entry) => entry !== null);

  let updatedBlocks: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[] = [];
  if (data[0]?.body) {
    updatedBlocks = data[0]?.body?.map((block: any, index: number) => {
      if (block._type === "block" && block.style === "h2") {
        const id = block.children
          .map((child: any) => child.text)
          .join("-")
          .toLowerCase()
          .replace(/\s+/g, "-");

        return {
          ...block,
          _key: `${block._key}-id`,
          id: id,
        };
      }
      return block;
    });
  }

  return (
    <div>
      <div className="md:py-[120px] bg-violetExtraLight sm:py-[80px] py-[40px] h-fit  w-full max-h-[600px] flex  justify-center items-center">
        <Container>
          <div className="w-[100%] flex sm:flex-row flex-col gap-[20px] sm:gap-[0px] items-center">
            <div className="md:w-[80%]">
              <p className="w-[100%] sm:w-[90%] text-dark-red text-3xl lg:text-xxxxl font-normal font-Amiri leading-[30px] sm:leading-[67.34px]">
                {data[0]?.title}
              </p>

              {data[0]?.overview && (
                <p className="text-base md:text-md lg:text-xl font-bold tracking-wide mt-[15px] w-full">
                  {data[0]?.overview}
                </p>
              )}
              <div className="flex items-center sm:gap-[20px] gap-[10px] mt-[20px]">
                <img
                  src={urlForImage(data[0]?.author?.image)}
                  className="sm:h-[90px] sm:w-[90px] h-[40px] w-[40px] rounded-[50%] border-[2px] border-solid border-light-pink"
                  alt="image"
                />
                <p className="text-dark-red flex capitalize sm:mt-[-10px] text-[10px] lg:text-base font-normal font-DM-Sans leading-[12px] sm:leading-[29.70px]">
                  by {data[0]?.author?.name}{" "}
                  <span className="sm:w-[25px] w-[40px]"></span>{" "}
                  {data[0]?._createdAt}{" "}
                  <span className="sm:w-[25px] w-[40px]" /> {data[0]?.title}
                </p>
              </div>
            </div>
            <div className="w-[20%] h-full justify-center gap-[20px] items-center flex"></div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="w-[100%] flex flex-col-reverse md:flex-row md:mt-[50px] gap-6 justify-center ">
          <div className="md:w-[60%] flex flex-col gap-3">
            <p className="pb-4 border-b-[1px] border-[#b3b2b2]">
              {data[0]?.readingTime} read
            </p>
            {/* {console.log("Updated Blocks:", updatedBlocks[9])} */}
            <PortableText value={updatedBlocks} />
          </div>

          <div className="md:w-[30%] mt-4 h-fit md:sticky top-[100px] bg-violetExtraLight px-4 py-8 rounded-3xl">
            <p className="text-violet text-xl font-semibold ml-6">
              In This Article
            </p>
            <ul className="pt-4 flex flex-col gap-4 font-DM-sans text-[14px] font-bold ">
              {h1Elements?.map((element, index) => {
                const formattedString = element?.props.children[0].text
                  .replace(/ /g, "-")
                  .toLowerCase();
                return (
                  <li key={index} className="list-disc ml-6">
                    <a href={`#${formattedString}`} className="">
                      {element?.props.children[0].text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>

      <BlogCards />
    </div>
  );
}
