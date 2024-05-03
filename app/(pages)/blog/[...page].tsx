import React from "react";
import { client } from "@sanity/lib/client";
import { Article, Author } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";
import Link from "next/link";

type ArticleWithAuthor = Omit<Article, "author"> & { author: Author };

export default async function Page({ params }: { params?: { page: string } }) {
  const data = (await client.fetch(`*[_type == "article"] {
    ...,
    author->
  
  }`)) as ArticleWithAuthor[] | null;

  return (
    <main className="mt-16 mb-16">
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-18">
        {data?.map((post, index) => (
          <li key={index} className="mt-4">
            <Link href={`/blog/${post.slug?.current}`}>
              <div className="bg-violetExtraLight rounded-3xl overflow-hidden shadow">
                <img
                  src={urlForImage(post.coverImage)}
                  alt={post.coverImage?.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
                <div className="py-4 px-6">
                  <time className="text-dark-red text-sm">
                    {new Date(post._createdAt).toLocaleDateString()} •{" "}
                    {post.readingTime || "-"} read • Blog
                  </time>
                  <h2 className="text-xl mt-8 text-dark-red leading-snug font-bold tracking-tight mb-2 hover:text-light-pink">
                    {post.title}
                  </h2>
                  <span className="text-dark-red tracking-wide text-md text-ellipsis line-clamp-3">
                    {post.overview}
                  </span>
                  <div className="flex gap-2 mt-4 text-center items-center text-sm">
                    <img
                      src={urlForImage(post.author?.image)}
                      alt={post.author?.name}
                      className="bg-slate-50 rounded-full h-8 w-8"
                    />
                    <span className="text-gray-400 text-center justify-center">
                      {post.author?.name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
