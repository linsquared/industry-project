import cross from "../../assets/icons/close.png";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Comments from "../../components/Comments/Comments";
import { useState } from "react";
import listen from "../../assets/images/listen.png";

import "./HomePage.scss";

const podcasts = [
  {
    id: "IOJ0BE",
    podcast_name: "Design Matters with Debbie Millman",
    podcast_title: "Susanna Hoffs",
    description:
      "In this episode, Debbie Millman interviews musician Susanna Hoffs about her creative process and career.",
    podcast_episode_number: 1,
    audio_file:
      "https://open.spotify.com/embed/episode/6y3pJZTMcr3znOS0Z7FbJj?utm_source=generator&theme=0&t=15",
    length: 29,
    likes: 44,
    dislikes: 966,
    comments: 35,
    shares: 17,
    saves: 81,
    posted_date: "Apr 3",
    image: require("../../assets/images/designmatters.png"),
  },
  {
    id: "293HLM",
    podcast_name: "Anything Goes with Emma Chamberlain",
    podcast_title: "Character assassination",
    description:
      "Emma Chamberlain explores the topic of character assassination in the age of social media. ",
    podcast_episode_number: 1,
    audio_file:
      "https://open.spotify.com/embed/episode/2iMzFtiH7BQvvstzMWKxHB?utm_source=generator&theme=0&t=15",
    length: 53,
    likes: 58,
    dislikes: 399,
    comments: 16,
    shares: 7,
    saves: 2,
    posted_date: "Mar 27",
    image: require("../../assets/images/anythinggoes.png"),
  },
  {
    id: "SAPVJK",
    podcast_name: "Call Her Daddy",
    podcast_title: "Getting Over a Cheater",
    description:
      "In this candid and humorous episode, Call Her Daddy hosts discuss the difficult topic of getting over a cheating partner. ",
    podcast_episode_number: 1,
    audio_file:
      "https://open.spotify.com/embed/episode/6ph25EJ5YkvASNm8HaPydg?utm_source=generator&theme=0&t=15",
    length: 39,
    likes: 55,
    dislikes: 818,
    comments: 66,
    shares: 3,
    saves: 100,
    posted_date: "Apr 2",
    image: require("../../assets/images/callherdaddy.png"),
  },

  {
    id: "S1A3RW",
    podcast_name: "Radiolab",
    podcast_title: "The Good Samaritan",
    description:
      "In this episode, Radiolab explores the parable of The Good Samaritan and its relevance in today's world.",
    podcast_episode_number: 1,
    audio_file:
      "https://open.spotify.com/embed/episode/5lSf7dh8g4yLvtCegBlVcE?utm_source=generator&theme=0&t=15",
    length: 22,
    likes: 493,
    dislikes: 803,
    comments: 95,
    shares: 29,
    saves: 99,
    posted_date: "Apr 03",
    image: require("../../assets/images/radiolab.png"),
  },
  {
    id: "3LA4X3",
    podcast_name: "Serial",
    podcast_title: "The Coldest Case In Laramie ",
    description:
      "Serial investigates a decades-old cold case in Laramie, Wyoming, and uncovers surprising details about the victim and the suspects.",
    podcast_episode_number: 8,
    audio_file:
      "https://open.spotify.com/embed/show/0Z4uNINH9BXtmGpuf7DkQL?utm_source=generator&theme=0&t=15",
    length: 40,
    likes: 270,
    dislikes: 990,
    comments: 80,
    shares: 76,
    saves: 66,
    posted_date: "Thursday",
    image: require("../../assets/images/serial.png"),
  },

  {
    id: "LLM0LE",
    podcast_name: "The Adventure Zone",
    podcast_title: "The Adventure: Steeplechase ",
    description:
      "With humor and heart, the podcast delivers a thrilling and immersive storytelling experience.",
    podcast_episode_number: 17,
    audio_file:
      "https:////open.spotify.com/embed/show/6OoAQesdLgYBOyfx8ji0bZ?utm_source=generator&theme=0&t=15",
    length: 48,
    likes: 858,
    dislikes: 962,
    comments: 41,
    shares: 45,
    saves: 60,
    posted_date: "Mar 31",
    image: require("../../assets/images/adventurezone.png"),
  },
];

export default function HomePage() {
  const [commentModal, setCommentModal] = useState(false)

  return (
    <div className="homepage">
      <div className="homepage__navigation">
        <img src={cross} className="homepage__cross" />
        <Button />
      </div>
      <div className="homepage__container">

        {/* <Card commentModal={commentModal} setCommentModal={setCommentModal} /> */}
        {podcasts.map((podcast) => {
          return <Card p={podcast} />;
        })}
      </div>
      <Comments commentModal={commentModal} setCommentModal={setCommentModal} />
    </div>
  );
}
