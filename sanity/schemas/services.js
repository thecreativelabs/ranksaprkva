export default {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
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
    {
      name: "subCategory",
      title: "Sub Category",
      type: "reference",
      to: [{ type: "services" }],
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
  ],
};
