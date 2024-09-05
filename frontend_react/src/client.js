import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'nly1kmp4',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skpLU1rEBPOmA16qpOzufwcH2WtiwbwOxxqhegCJ1OHmOpwBVnLUmjpZqHvDflaQOQbLBwtRNQq9lUDggi8Ceq8o23STIISYyyMUbgyDSsKISupfAfGJRE604HOQepGfMOiavIFJqSanIWE4khSPFsibumr9apC5GoiVUzzNFW2tgDO2MWtV',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
