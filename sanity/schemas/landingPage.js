import { DesktopIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "landingPage",
  title: "Home Page",
  type: "document",
  icon: DesktopIcon,
  fields: [
    // header
    {
      name: "header",
      title: "Header",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "button",
          title: "Button",
          type: "reference",
          to: [{ type: "button" }],
        },
        {
          name: "mainImage",
          title: "Main Image",
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
        {
          name: "secondaryImage",
          title: "Secondary Image",
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
    // features
    {
      name: "section1",
      title: "Section 1",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "stats",
          title: "Stats",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
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
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "blockContent",
        },
        {
          name: "button",
          title: "Button",
          type: "reference",
          to: [{ type: "button" }],
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
    // section2
    {
      name: "section2",
      title: "Section 2",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "features",
          title: "Features",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "blockContent",
                },
              ],
            },
          ],
        },
        {
          name: "featuresAlt",
          title: "Features Alt",
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                    {
                      name: "description",
                      title: "Description",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "whoWeServe",
          title: "Who We Serve",
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },
    // section3
    {
      name: "section3",
      title: "Section 3",
      type: "object",
      options: {
        collapsible: true,
      },

      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "button",
          title: "Button",
          type: "reference",
          to: [{ type: "button" }],
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
    // faqs
    {
      name: "faqs",
      title: "FAQs",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "faqs",
          title: "FAQs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "question",
                  title: "Question",
                  type: "string",
                },
                {
                  name: "answer",
                  title: "Answer",
                  type: "blockContent",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],

  preview: {
    select: {
      title: "header.title",
      media: "header.mainImage",
    },
  },
});
