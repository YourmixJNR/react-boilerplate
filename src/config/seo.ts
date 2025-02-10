const image = "https://linktoopengraphimaage.cdn";
const creator = "YourmixJNR";
const author = creator;

export const url = (slug?: string) => {
  return `https://linktowebsite.com/${slug ?? ""}`;
};

const SEO_DATA = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "React Boilerplate | Set up react projects faster -  Just clone it",
    description: "Your description here",
  },
  aboutUsPage: {
    image,
    author,
    creator,
    url: url("about"),
    title: "About | Mission | Vision | Achievements",
    description: "description to about us page",
  },
  // add more pages
};

export default SEO_DATA;
