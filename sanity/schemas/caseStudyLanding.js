import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudyLanding",
  title: "Case Study Landing Page",
  type: "document",
  fields: [
    defineField({
      name: "topText",
      title: "Top Text",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "featuredAwards",
      title: "Featured Awards",
      type: "array",
      of: [{ type: "reference", to: [{ type: "award" }] }],
    }),

    // Section 1
    defineField({
      name: "featuredCaseStudiesSection",
      title: "Featured Case Studies Section",
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
          name: "featuredCaseStudies",
          title: "Featured Case Studies",
          type: "array",
          of: [
            defineArrayMember({
              name: "caseStudy",
              title: "Case Study",
              type: "object",
              fields: [
                defineField({
                  name: "caseStudy",
                  title: "Case Study",
                  type: "reference",
                  to: [{ type: "caseStudy" }],
                }),
                defineField({
                  name: "cta",
                  title: "CTA",
                  type: "button",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Section 2
    defineField({
      name: "section2",
      title: "Section 2",
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

    // Section 3
    defineField({
      name: "section3",
      title: "Section 3",
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
          name: "description",
          title: "Description",
          type: "blockContent",
        }),
      ],
    }),

    // Section 4
    defineField({
      name: "section4",
      title: "Section 4",
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

    // Section 5
    defineField({
      name: "faqSection",
      title: "FAQ Section",
      type: "reference",
      to: [{ type: "faqs" }],
    }),
  ],
});
