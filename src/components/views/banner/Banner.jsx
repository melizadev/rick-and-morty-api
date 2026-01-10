import ProgressiveBackground from "../../ui/ProgressiveBg";
import bgLow from "../../../assets/low-info.avif";
import bgFull from "../../../assets/info.avif";

const Banner = () => {
  return (
    <ProgressiveBackground
      lowSrc={bgLow}
      src={bgFull}
      position="object-center"
      className="min-h-[80vh] flex items-center"
    >
      <p className="bg-white ml-2 lg:w-[40%] w-[80%] p-2  text-gray-900 rounded-lg shadow-lg">
        Rick and Morty follows the perilous interdimensional adventures of a
        genius scientist and sociopath, Rick Sanchez, and his teenage grandson,
        Morty Smith. Together, they explore a vast multiverse, facing aliens,
        alternate realities, and cosmic hazards, while dealing with family
        dynamics and their own dysfunctions.
      </p>
    </ProgressiveBackground>
  );
};

export default Banner;
