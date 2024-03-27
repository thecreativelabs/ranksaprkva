import { DesktopIcon } from "@sanity/icons";
import { defineType, defineArrayMember, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About",
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
          name: "primaryButton",
          title: "Primary Button",
          type: "reference",
          to: [{ type: "button" }],
        },
        {
          name: "secondaryButton",
          title: "Secondary Button",
          type: "reference",
          to: [{ type: "button" }],
        },
      ],
    },

    // team
    defineField({
      name: "teamSection",
      title: "Team Section",
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
          name: "cta",
          title: "CTA",
          type: "button",
        }),
        defineField({
          name: "teams",
          title: "Teams",
          type: "array",
          of: [
            defineArrayMember({
              name: "team",
              title: "Team",
              type: "object",
              fields: [
                {
                  name: "heading",
                  title: "Heading",
                  type: "string",
                },
                {
                  name: "subHeading",
                  title: "Sub Heading",
                  type: "string",
                },
                {
                  name: "members",
                  title: "Members",
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
                          name: "role",
                          title: "Role",
                          type: "string",
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
                              description:
                                "Important for SEO and accessiblity.",
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
            }),
          ],
        }),
      ],
    }),

    // Story
    defineField({
      name: "story",
      title: "Story",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "topText",
          title: "Top Text",
          type: "string",
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "body",
          title: "Body",
          type: "blockContent",
        }),
      ],
    }),

    // Features
    defineField({
      name: "featureGrid",
      title: "Feature Grid",
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
          name: "feature",
          title: "Feature",
          type: "object",
          fields: [
            defineField({
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

    // Testimonials
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "reference",
      to: [{ type: "testimonials" }],
    }),

    // Featured Case Study
    defineField({
      name: "featuredCaseStudy",
      title: "Featured Case Study",
      type: "reference",
      to: [{ type: "caseStudy" }],
    }),

    // Gallery
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "globalImages" }],
    }),

    // Custom Strategy Section
    defineField({
      name: "customStrategySection",
      title: "Custom Strategy Section",
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
        }),
        defineField({
          name: "cta",
          title: "CTA",
          type: "button",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "header.title",
      media: "header.mainImage",
    },
  },
});
