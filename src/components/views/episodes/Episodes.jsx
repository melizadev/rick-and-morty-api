import SkeletonEpisodes from "./SkeletonEpisodes";
import EpisodesList from "./EpisodesList";
import { useEpisodes } from "./useEpisodes";
import Error from "../../error/Error";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="min-h-[81.7vh] h-full w-full bg-[url('./assets/episodes.avif')] bg-center bg-cover flex items-center justify-center">
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
    </div>
  );
};

export default Episodes;
