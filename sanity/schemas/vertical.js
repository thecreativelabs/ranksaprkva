import { defineType } from "sanity";

const TYPES = [
  {
    title: "Industry",
    value: "industry",
  },
  {
    title: "Platform",
    value: "platform",
  },
  {
    title: "Market",
    value: "market",
  },
];

export default defineType({
  name: "vertical",
  title: "Vertical",
  type: "document",
  fields: [
    {
      name: "pageMeta",
      title: "Page Meta",
      type: "meta",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: TYPES,
      },
    },
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
          name: "color",
          title: "Color",
          type: "string",
          options: {
            list: [
              { title: "Red", value: "#e55447" },
              { title: "Green", value: "#8AC7C7" },
              { title: "Yellow", value: "#F0B342" },
            ],
          },
        },
      ],
    },

    // Featured Case Study
    {
      name: "featuredCaseStudy",
      title: "Featured Case Study",
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
          name: "caseStudy",
          title: "Case Study",
          type: "reference",
          to: [{ type: "caseStudy" }],
        },
      ],
    },

    // features
    {
      name: "features",
      title: "Features",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "grid",
          title: "Grid",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
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
              name: "grid",
              title: "Grid",
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
                    {
                      name: "icon",
                      title: "Icon",
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
        },
        {
          name: "bulletList",
          title: "Bullet List",
          type: "array",
          of: [
            {
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
                  name: "list",
                  title: "List",
                  type: "array",
                  of: [
                    {
                      type: "string",
                    },
                  ],
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
        {
          name: "numberList",
          title: "Number List",
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
              name: "list",
              title: "List",
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
      ],
    },

    // cta
    {
      name: "cta",
      title: "CTA",
      type: "object",
      options: {
        collapsible: true,
      },
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
          name: "button",
          title: "Button",
          type: "button",
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

    // Testimonials
    {
      name: "testimonials",
      title: "Testimonial Section",
      type: "testimonials",
    },

    // FAQs
    {
      name: "faqs",
      title: "FAQs",
      type: "faqs",
    },
  ],
  preview: {
    select: {
      title: "pageMeta.name",
      subtitle: "type",
      media: "pageMeta.icon",
    },
  },
});
