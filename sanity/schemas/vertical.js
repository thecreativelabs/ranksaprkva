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
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "header",
      title: "Header",
      type: "header",
    },

    // Top companies
    {
      name: "topCompanies",
      title: "Top Companies",
      type: "array",
      of: [
        {
          name: "company",
          title: "Company",
          description: "Company Logo",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },

    // Features
    {
      name: "featuresSection",
      title: "Features Section",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: "header",
          title: "Header",
          type: "header",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "features",
          title: "Features",
          type: "array",
          of: [
            {
              name: "feature",
              title: "feature",
              type: "object",
              options: {
                collapsible: true,
              },
              fields: [
                {
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  fields: [
                    {
                      name: "alt",
                      title: "Alt Text",
                      type: "string",
                      options: {
                        isHighlighted: true,
                      },
                    },
                  ],
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
              ],
            },
          ],
        },
      ],
    },

    // Next Section
    {
      name: "heroSection",
      title: "Hero Section",
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
          type: "blockContent",
        },
        {
          name: "mainImage",
          title: "Main Image",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              options: {
                isHighlighted: true,
              },
            },
          ],
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

    // Feature Section
    {
      name: "featureSection",
      title: "Feature Section",
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
          type: "blockContent",
        },
        {
          name: "features",
          title: "Features",
          type: "array",
          of: [
            {
              name: "feature",
              title: "Feature",
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
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },

    // CTA
    {
      name: "cta",
      title: "CTA",
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
          type: "text",
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
              title: "Alt Text",
              type: "string",
              options: {
                isHighlighted: true,
              },
            },
          ],
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
});
