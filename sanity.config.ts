// sanity.config.ts
import { defineConfig } from "sanity";
import schemaTypes from "./sanity/schemas";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { pageStructure, singletonPlugin } from "./sanity/plugins/settings";
import settings from "./sanity/schemas/settings";
import landingPage from "./sanity/schemas/landingPage";
import { table } from "@sanity/table";
import { codeInput } from "@sanity/code-input";
import logos from "./sanity/schemas/logos";
import pricing from "./sanity/schemas/pricing";
import testimonials from "./sanity/schemas/testimonials";
import faqs from "./sanity/schemas/faqs";
import cta from "./sanity/schemas/cta";
import careers from "./sanity/schemas/careers";
import about from "./sanity/schemas/about";
import methodPage from "./sanity/schemas/methodPage";
import caseStudyLanding from "@sanity/schemas/caseStudyLanding";
import termsAndConditions from "@sanity/schemas/termsAndConditions";
import privacyPolicy from "@sanity/schemas/privacyPolicy";

export default defineConfig({
  name: "rankspark2",
  title: "RankSpark2",
  projectId: "f23a5mbc",
  dataset: "production",
  basePath: "/admin",
  plugins: [
    structureTool({
      structure: pageStructure([
        settings,
        logos,
        pricing,
        landingPage,
        careers,
        about,
        methodPage,
        caseStudyLanding,
        termsAndConditions,
        privacyPolicy,
      ]),
    }),
    visionTool(),
    singletonPlugin([
      "settings",
      "landingPage",
      "methodPage",
      "caseStudyLanding",
      "termsAndConditions",
      "privacyPolicy",
      "careers",
    ]),
    table(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
