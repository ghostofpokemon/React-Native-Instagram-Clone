import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: require("../assets/posts/post1.jpg"),
    user: USERS[0].user,
    likes: 7870,
    caption: "farm fresh eggs",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "the_dude",
        comment: "I like eggs",
      },
      {
        user: "atomicbomber",
        comment: "Wow, that's a lot of eggs 🥚",
      },
      {
        user: "holycow",
        comment: "I'm not sure I can eat that",
      },
      {
        user: "the_dude",
        comment: "I like eggs",
      },
      {
        user: "atomicbomber",
        comment: "Wow, that's a lot of eggs 🥚",
      },
      {
        user: "holycow",
        comment: "I'm not sure I can eat that",
      },
      {
        user: "the_dude",
        comment: "I like eggs",
      },
      {
        user: "atomicbomber",
        comment: "Wow, that's a lot of eggs 🥚",
      },
      {
        user: "holycow",
        comment: "I'm not sure I can eat that",
      },
    ],
  },
  {
    imageUrl: require("../assets/posts/post2.jpg"),
    user: USERS[1].user,
    likes: 1022,
    caption: "I'm a big fan of this",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "marksomebody",
        comment: "totally loving ur posts",
      },
      {
        user: "hannahbanana",
        comment: "grovy can't wait to see more",
      },
      {
        user: "amandapineapple",
        comment: "whats up",
      },
    ],
  },
  {
    imageUrl: require("../assets/posts/post3.jpg"),
    user: USERS[3].user,
    likes: 1777772,
    caption: "I'm a big fan of this",
    profile_picture: USERS[3].image,
    comments: [
      {
        user: "marksomebody",
        comment: "totally loving ur posts",
      },
    ],
  },
  {
    imageUrl: require("../assets/posts/post4.jpg"),
    user: USERS[4].user,
    likes: 9999922,
    caption: "I'm a big fan of this",
    profile_picture: USERS[4].image,
    comments: [
      {
        user: "marksomebody",
        comment: "totally loving ur posts",
      },
      {
        user: "hannahbanana",
        comment: "grovy can't wait to see more",
      },
      {
        user: "amandapineapple",
        comment: "whats up",
      },
    ],
  },
  {
    imageUrl: require("../assets/posts/post5.jpg"),
    user: USERS[5].user,
    likes: 10223232,
    caption: "You're a big fan of this",
    profile_picture: USERS[5].image,
    comments: [],
  },
];
