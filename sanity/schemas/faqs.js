import { DocumentTextIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "faqs",
  title: "FAQs",
  type: "object",
  icon: DocumentTextIcon,
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
    {
      name: "closeable",
      title: "Closeable",
      type: "boolean",
    },
  ],

  initialValue: {
    closeable: true,
  },
});
