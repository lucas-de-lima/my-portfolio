import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: '',
    dataset: '',
    apiVersion: '',
    useCdn: true,
    token: '',
})

export default client;
