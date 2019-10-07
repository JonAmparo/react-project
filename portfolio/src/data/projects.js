// import project1 from "../assets/project1.png";
// import project2 from '../assets/project2.png';
// import project3 from "../assets/project3.png";

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
    link: "evens-or-odds",
    image: projectevensorodds
  },
  {
    id: 2,
    title: "Music Player",
    description: "Music player that uses a Spotify API wrapper.",
    link: "music-master",
    image: projectmusic
  },
  {
    id: 3,
    title: "Reaction Chat",
    description:
      "A chat reaction where people can post and add reaction to that comment!",
    link: "chat-reaction",
    image: projectchat
  },
  {
    id: 4,
    title: "Hacker News Replica",
    description: "A replica of Hacker News that calls an API using an API",
    link: "https://hacker-news-replica.herokuapp.com",
    image: projectnews
  }
];

export default PROJECTS;
