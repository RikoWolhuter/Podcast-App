import Podcast from "./Podcast";
import POD1 from "../../assets/podcast.jpeg";
import POD2 from "../../assets/podcast2.png";

const Podcasts = () => {
  const podcasts = [
    {
      id: 1,
      title: "Something Was Wrong",
      img: POD1,
      genre: ["Personal Growth", "True Crime", "Investigative Journalism"],
      description:
        "Something Was Wrong is an Iris Award-winning true-crime docuseries about the discovery, trauma, and recovery from shocking life events and abusive relationships.",
      updated: "Nov 3, 2022",
      seasons: 14,
    },
    {
      id: 2,
      title: "This Is Actually Happening",
      img: POD2,
      genre: ["True Crime", "Investigative Journalism"],
      description:
        "What if your mother left to follow a cult… or you woke up in a morgue… or if your boat got caught in a storm and began to sink -- what would you do?   This is Actually Happening brings you extraordinary true stories of life-changing events told by the people who lived",
      updated: "Nov 1, 2022",
      seasons: 12,
    },
  ];

  return (
    <div>
      <Podcast podcasts={podcasts} />
    </div>
  );
};

export default Podcasts;
