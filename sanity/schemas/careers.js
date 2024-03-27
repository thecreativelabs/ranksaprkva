import { DesktopIcon } from "@sanity/icons";
import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "careers",
  title: "Careers",
  type: "document",
  icon: DesktopIcon,
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "header",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "cta",
    }),

    // Images
    defineField({
      name: "images",
      title: "Images",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        ...Array.from({ length: 3 }, (_, i) =>
          defineField({
            name: `image${i + 1}`,
            title: `Image ${i + 1}`,
            type: "image",
            fields: [
              defineField({
                name: "alt",
                title: "Alt Text",
                type: "string",
              }),
            ],
          })
        ),
      ],
    }),

    // Testimonial Section
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "header",
          title: "Header",
          type: "header",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "testimonials",
          title: "Testimonials",
          type: "array",
          of: [
            defineArrayMember({
              name: "testimonial",
              title: "Testimonial",
              type: "object",
              fields: [
                defineField({
                  name: "media",
                  title: "Media",
                  type: "file",
                }),
                defineField({
                  name: "author",
                  title: "Author",
                  type: "string",
                }),
                defineField({
                  name: "role",
                  title: "Role",
                  type: "string",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            defineArrayMember({
              name: "card",
              title: "Card",
              type: "object",
              options: {
                collapsible: true,
              },
              fields: [
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  fields: [
                    defineField({
                      name: "alt",
                      title: "Alt Text",
                      description: "Alt text for the image",
                      type: "string",
                    }),
                  ],
                }),
                defineField({
                  name: "heading",
                  title: "Heading",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Mission and values section
    defineField({
      name: "missionValues",
      title: "Mission & Values",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "header",
          title: "Header",
          type: "header",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "values",
          title: "Values",
          type: "object",
          options: {
            collapsible: true,
          },
          fields: [
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
            }),
            defineField({
              name: "cards",
              title: "Cards",
              type: "array",
              of: [
                defineArrayMember({
                  name: "card",
                  title: "Card",
                  type: "object",
                  options: {
                    collapsible: true,
                  },
                  fields: [
                    defineField({
                      name: "icon",
                      title: "Icon",
                      type: "image",
                      fields: [
                        defineField({
                          name: "alt",
                          title: "Alt Text",
                          description: "Alt text for the image",
                          type: "string",
                        }),
                      ],
                    }),
                    defineField({
                      name: "heading",
                      title: "Heading",
                      type: "string",
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Scrolling who we are section
    defineField({
      name: "whoWeAre",
      title: "Who We Are",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "header",
          title: "Header",
          type: "header",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            defineArrayMember({
              name: "card",
              title: "Card",
              type: "object",
              options: {
                collapsible: true,
              },
              fields: [
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  fields: [
                    defineField({
                      name: "alt",
                      title: "Alt Text",
                      description: "Alt text for the image",
                      type: "string",
                    }),
                  ],
                }),
                defineField({
                  name: "heading",
                  title: "Heading",
                  type: "string",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // FAQs
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "faqs",
    }),

    // Openings
    defineField({
      name: "jobOpeningsSection",
      title: "Job Openings Section",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
      ],
    }),

    // FAQs
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "faqs",
    }),
  ],

  initialValue: {
    faqs: {
      closeable: false,
    },
  },

  preview: {
    select: {
      title: "header.title",
      media: "header.mainImage",
    },
  },
});
