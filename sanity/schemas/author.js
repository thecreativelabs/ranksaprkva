import { defineType } from "sanity";

const SOCIALS = [
  {
    title: "Twitter",
    value: "twitter",
  },
  {
    title: "LinkedIn",
    value: "linkedin",
  },
  {
    title: "GitHub",
    value: "github",
  },
];

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              options: {
                list: SOCIALS,
              },
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
});
