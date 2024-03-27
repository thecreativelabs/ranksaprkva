import { ArrowRightIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  icon: ArrowRightIcon,
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
      name: "button",
      title: "CTA Button",
      type: "button",
    },
  ],
});
