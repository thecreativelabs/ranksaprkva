import React from "react";
import Image from "next/image";

const data = [
  {
    src: "https://cdn.shortpixel.ai/spai/q_glossy+w_390+to_auto+ret_img/victorious.com/wp-content/uploads/2024/03/gsc-indexing-errors-cover.jpg",
    alt: "cover",
    discription:
      "Google Search Console is a helpful tool that not only shows you how often your pages appear in search and for what queries. It also allows you to",
    title: "How To Fix Search Console Indexing Errors",
    author: "By Alyssa Bailey",
    logo: "https://cdn.shortpixel.ai/spai/q_glossy+w_45+to_auto+ret_img/victorious.com/wp-content/uploads/2023/12/alyssa_square-96x96.jpg",
  },
  //   {
  //     src: "https://cdn.shortpixel.ai/spai/q_glossy+w_390+to_auto+ret_img/victorious.com/wp-content/uploads/2024/03/gsc-indexing-errors-cover.jpg",
  //     alt: "cover",
  //     discription:
  //       "Google Search Console is a helpful tool that not only shows you how often your pages appear in search and for what queries. It also allows you to",
  //     title: "How To Fix Search Console Indexing Errors",
  //     author: "By Alyssa Bailey",
  //     logo: "https://cdn.shortpixel.ai/spai/q_glossy+w_45+to_auto+ret_img/victorious.com/wp-content/uploads/2023/12/alyssa_square-96x96.jpg",
  //   },
  //   {
  //     src: "https://cdn.shortpixel.ai/spai/q_glossy+w_390+to_auto+ret_img/victorious.com/wp-content/uploads/2024/03/gsc-indexing-errors-cover.jpg",
  //     alt: "cover",
  //     discription:
  //       "Google Search Console is a helpful tool that not only shows you how often your pages appear in search and for what queries. It also allows you to",
  //     title: "How To Fix Search Console Indexing Errors",
  //     author: "By Alyssa Bailey",
  //     logo: "https://cdn.shortpixel.ai/spai/q_glossy+w_45+to_auto+ret_img/victorious.com/wp-content/uploads/2023/12/alyssa_square-96x96.jpg",
  //   },
];

export default async function Page({ params }: { params?: { page: string } }) {
  // const slug =

  return (
    <main className="mt-16 mb-16">
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-24">
        {data.map((post, index) => (
          <li key={index} className="mt-4">
            <a href={`/blog/${post.title}`}>
              <div>
                <img
                  src={post.src}
                  alt={post.alt}
                  width={800}
                  height={600}
                  className="w-full rounded-md object-cover"
                />
                <div className="mt-4">
                  <time className="text-dark-red text-sm">
                    {/* {post.publishDate} */}
                    03.19.24 • 9m read • Blog
                  </time>
                  <h2 className="text-xl mt-8 text-dark-red leading-snug font-bold tracking-tight mb-2 hover:text-light-pink">
                    {post.title}
                  </h2>
                  <span className="text-dark-red tracking-wide text-md">
                    {post.discription}
                  </span>
                  <div className="flex gap-2 mt-4 text-center items-center text-sm">
                    <img
                      src={post.logo}
                      alt=""
                      className="rounded-full h-8 w-8"
                    />
                    <span className="text-gray-400 text-center justify-center">
                      {post.author}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
