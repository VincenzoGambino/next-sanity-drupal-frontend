import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: process.env.SANITY_USE_CDN,
  apiVersion: '2023-02-15'// `false` if you want to ensure fresh data
});
export default client;