import SkeletonEpisodes from "./SkeletonEpisodes";
import EpisodesList from "./EpisodesList";
import { useEpisodes } from "./useEpisodes";
import Error from "../../error/Error";
import { motion, AnimatePresence } from "framer-motion";
import ProgressiveBackground from "../../ui/ProgressiveBg";
import bg from "../../../assets/episodes.avif";
import lowBg from "../../../assets/low-episodes.avif";

const Episodes = () => {
  const { data, error, loading, retry } = useEpisodes();

  let content;
  if (loading) {
    content = <SkeletonEpisodes />;
  } else if (error) {
    content = <Error retry={retry} error={error} />;
  } else {
    content = <EpisodesList data={data} />;
  }

  return (
    <ProgressiveBackground
      lowSrc={lowBg}
      src={bg}
      position="object-center"
      overlay
      className="min-h-[80vh] flex items-center"
    >
      {" "}
      <AnimatePresence mode="wait">
        <motion.div
          key={loading ? "loading" : error ? "error" : "data"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex flex-col items-center justify-center p-4 gap-4"
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </ProgressiveBackground>
  );
};

export default Episodes;
