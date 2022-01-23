import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "7DpozlsMzj0s7AggsvOI4wtt",
  cache: {
    clear: "auto",
    type: "memory"
  }
});

export default Storyblok;
