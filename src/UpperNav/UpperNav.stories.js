import UpperNav from "./UpperNav";
import * as SocialLinkStories from "../SocialLink/SocialLink.stories";

export default {
  title: "Nav/UpperNavbar",
  component: UpperNav,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    socialLinks: [
      {
        title: "Twitter",
        icon: "fab fa-twitter",
        link: "#",
      },
      {
        title: "Facebook",
        icon: "fab fa-facebook-square",
        link: "#",
      },
      {
        title: "Pinterest",
        icon: "fab fa-pinterest",
        link: "#",
      },
      {
        title: "YouTube",
        icon: "fab fa-youtube",
        link: "#",
      },
    ],
  },
};
