import { DesktopIcon } from "@sanity/icons";
import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "methodPage",
  title: "Method Page",
  type: "document",
  icon: DesktopIcon,
  fields: [
    defineField({
      name: "header",
      title: "Header",
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
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        }),
      ],
      options: {
        hotspot: true,
      },
    }),

    // Section 1
    defineField({
      name: "section1",
      title: "Section 1",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "ctoCard",
          title: "CTO Card",
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Text",
              type: "text",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  description: "Important for SEO and accessiblity.",
                }),
              ],
            }),
            defineField({
              name: "cta",
              title: "CTA",
              type: "cta",
            }),
          ],
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "featureCards",
          title: "Feature Cards",
          type: "array",
          of: [
            defineArrayMember({
              name: "featureCard",
              type: "object",
              fields: [
                defineField({
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  fields: [
                    defineField({
                      name: "alt",
                      type: "string",
                      title: "Alternative text",
                      description: "Important for SEO and accessiblity.",
                    }),
                  ],
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
              name: "mainImage",
              title: "Main Image",
              type: "image",
              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  description: "Important for SEO and accessiblity.",
                }),
              ],
            }),
          ],
        }),
        ...Array.from({ length: 4 }, (_, idx) =>
          defineField({
            name: `serviceList${idx + 1}`,
            title: `Service List Item ${idx + 1}`,
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
                name: "services",
                title: "Services",
                type: "array",
                of: [
                  defineArrayMember({
                    name: "service",
                    type: "object",
                    options: {
                      collapsible: true,
                    },
                    fields: [
                      defineField({
                        name: "text",
                        title: "Text",
                        type: "string",
                      }),
                      defineField({
                        name: "subServices",
                        title: "Sub Services",
                        type: "array",
                        of: [
                          defineArrayMember({
                            type: "object",
                            fields: [
                              defineField({
                                name: "text",
                                title: "Text",
                                type: "string",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        ),
        defineField({
          name: "additionalServicesCard",
          title: "Additional Services Card",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "cards",
              title: "Cards",
              type: "array",
              of: [
                defineArrayMember({
                  name: "card",
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                    }),
                    defineField({
                      name: "icon",
                      title: "Icon",
                      type: "image",
                      fields: [
                        defineField({
                          name: "alt",
                          type: "string",
                          title: "Alternative text",
                          description: "Important for SEO and accessiblity.",
                        }),
                      ],
                    }),
                    defineField({
                      name: "services",
                      title: "Services",
                      type: "array",
                      of: [
                        defineArrayMember({
                          name: "service",
                          type: "object",
                          options: {
                            collapsible: true,
                          },
                          fields: [
                            defineField({
                              name: "text",
                              title: "Text",
                              type: "string",
                            }),
                            defineField({
                              name: "subServices",
                              title: "Sub Services",
                              type: "array",
                              of: [
                                defineArrayMember({
                                  type: "object",
                                  fields: [
                                    defineField({
                                      name: "text",
                                      title: "Text",
                                      type: "string",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
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
          name: "header",
          title: "Header",
          type: "header",
        }),
        defineField({
          name: "featureCards",
          title: "Feature Cards",
          type: "array",
          of: [
            defineArrayMember({
              name: "featureCard",
              type: "object",
              fields: [
                defineField({
                  name: "icon",
                  title: "Icon",
                  type: "image",
                  fields: [
                    defineField({
                      name: "alt",
                      type: "string",
                      title: "Alternative text",
                      description: "Important for SEO and accessiblity.",
                    }),
                  ],
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
                  name: "cta",
                  title: "CTA",
                  type: "cta",
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "mainImage",
          title: "Main Image",
          type: "image",
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "awardsSection",
      title: "Awards Section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "awards",
          title: "Awards",
          type: "array",
          of: [
            defineArrayMember({
              name: "award",
              type: "object",
              fields: [
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  fields: [
                    defineField({
                      name: "alt",
                      type: "string",
                      title: "Alternative text",
                      description: "Important for SEO and accessiblity.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "cta",
          title: "CTA",
          type: "cta",
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
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "featureSets",
          title: "Feature Sets",
          type: "array",
          of: [
            defineArrayMember({
              name: "featureSet",
              type: "object",
              options: {
                collapsible: true,
              },
              fields: [
                defineField({
                  name: "name",
                  title: "Name",
                  type: "string",
                }),
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  fields: [
                    defineField({
                      name: "alt",
                      type: "string",
                      title: "Alternative text",
                      description: "Important for SEO and accessiblity.",
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
                defineField({
                  name: "quote",
                  title: "Quote",
                  type: "object",
                  fields: [
                    defineField({
                      name: "text",
                      title: "Text",
                      type: "text",
                    }),
                    defineField({
                      name: "author",
                      title: "Author",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Section 5
    defineField({
      name: "section5",
      title: "Section 5",
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
          name: "logo",
          title: "Logo",
          type: "reference",
          to: [{ type: "logos" }],
        }),
        defineField({
          name: "caseStudiesCarousel",
          title: "Case Studies Carousel",
          type: "array",
          of: [
            defineArrayMember({
              name: "carouselItem",
              title: "Carousel Item",
              type: "object",
              options: {
                collapsible: true,
              },
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
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

    // Section 6
    defineField({
      name: "section6",
      title: "Section 6",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: "mainImage",
          title: "Main Image",
          type: "image",
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessiblity.",
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
        defineField({
          name: "cta",
          title: "CTA",
          type: "cta",
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
