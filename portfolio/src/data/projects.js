import projectmusic from "../assets/projectmusic.png";
import projectevensorodds from "../assets/projectevensorodds.png";
import projectchat from "../assets/projectchat.png";
import projectnews from "../assets/projectnews.png";

const PROJECTS = [
  {
    id: 1,
    title: "Evens or Odds Game",
    description:
      "A game which collects records locally and utilizes a deckofcards API call.",
    link: "/evens-or-odds",
    github: "https://github.com/JonAmparo/react-project/tree/master/portfolio/src/projects/evens-or-odds",
    image: projectevensorodds
  },
  {
    id: 2,
    title: "Music Player",
    description: "Music player that uses a Spotify API wrapper.",
    link: "/music-master",
    github: "https://github.com/JonAmparo/react-project/tree/master/portfolio/src/projects/music-master",
    image: projectmusic
  },
  {
    id: 3,
    title: "Reaction Chat",
    description:
      "A chat reaction where people can post and add reaction to that comment!",
    link: "/chat-reaction",
    github: "https://github.com/JonAmparo/react-project/tree/master/portfolio/src/projects/chat-reaction",
    image: projectchat
  },
  // {
  //   id: 4,
  //   title: "Hacker News Replica",
  //   description: "A replica of Hacker News that calls an API using an API",
  //   link: "https://hacker-news-replica.herokuapp.com",
  //   github: "https://github.com/JonAmparo/react-project/tree/master/news",
  //   image: projectnews
  // }
];

export default PROJECTS;
