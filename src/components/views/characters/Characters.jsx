import SkeletonCharacters from "./SkeletonCharacters";
import { useCharacter } from "./useCharacter";
import Error from "../../error/Error";
import { motion, AnimatePresence } from "framer-motion";
import CharactersList from "./CharactersList";
import ProgressiveBackground from "../../ui/ProgressiveBg";
import lowBg from "../../../assets/low-chbg.avif";
import bg from "../../../assets/chbg.avif";

const Characters = () => {
  const { data, loading, error, retry } = useCharacter();
  let content;
  if (loading) {
    content = <SkeletonCharacters />;
  } else if (error) {
    content = <Error retry={retry} error={error} />;
  } else {
    content = <CharactersList data={data} />;
  }
  return (
    <ProgressiveBackground
      lowSrc={lowBg}
      showFullImg={!loading}
      src={bg}
      position="object-center"
      overlay
      className="min-h-[80vh] flex items-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={loading ? "loading" : error ? "error" : "content"}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="w-full flex flex-col items-center justify-center"
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </ProgressiveBackground>
  );
};

export default Characters;
