import { UsersIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "object",
  icon: UsersIcon,
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "rating",
              title: "Rating",
              type: "number",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  description: "Important for SEO and accessiblity.",
                },
              ],
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
});
