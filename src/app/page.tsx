import TopNavigation from "./components/Navigation/TopNavigation";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { Oswald } from "next/font/google";
import Footer from "./components/Footer/Footer";
import TextOverText from "./components/TextOverText/TextOverText";

const oswald = Oswald({ subsets: ["latin"] });

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <TopNavigation />
      <div className="py-6">
        <Scoreboard />
        <TextOverText text="Liga" />
        <div className={`${oswald.className} tracking-wide`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta
          beatae est quis debitis similique culpa, suscipit quasi accusantium
          voluptatem dolores asperiores quia. Laboriosam minima fugiat ea unde
          soluta rerum aliquid velit dolore iste quidem vitae, harum distinctio
          adipisci natus ut animi explicabo quod provident labore numquam alias
          aperiam magni consequatur! Modi rerum eius, dolorem nemo quas
          pariatur, minima et adipisci officiis perspiciatis similique odio sint
          laudantium. Aperiam qui corrupti minus asperiores nulla pariatur
          inventore iure debitis, labore, laboriosam, distinctio id? Nobis.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
