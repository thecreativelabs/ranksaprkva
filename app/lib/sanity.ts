import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "btb9magv",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-03-10", // use current date (YYYY-MM-DD) to target the latest API version
});

export default client;
