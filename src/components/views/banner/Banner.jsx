import ProgressiveBackground from "../../ui/ProgressiveBg";
import bgLow from "../../../assets/low-info.avif";
import bgFull from "../../../assets/info.avif";

const Banner = () => {
  return (
    <main>
      <ProgressiveBackground
        lowSrc={bgLow}
        src={bgFull}
        position="object-center"
        overlay
        className="min-h-[80vh] flex items-center"
      >
        <div className="lg:ml-12 max-w-4xl p-4 space-y-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-indie font-bold text-white
            drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
          >
            Rick and Morty Universe
          </h1>

          <p className="bg-white/90 sm:w-[70%] w-full p-4 text-gray-900 rounded-lg shadow-lg">
            Rick and Morty follows the perilous interdimensional adventures of a
            genius scientist and sociopath, Rick Sanchez, and his teenage
            grandson, Morty Smith. Together, they explore a vast multiverse,
            facing aliens, alternate realities, and cosmic hazards, while
            dealing with family dynamics and their own dysfunctions.
          </p>
        </div>
      </ProgressiveBackground>
    </main>
  );
};

export default Banner;
