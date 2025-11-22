import SkeletonCharacters from "./SkeletonCharacters";
import { useCharacter } from "./useCharacter";
import Error from "../../error/Error";
import { motion, AnimatePresence } from "framer-motion";
import CharactersList from "./CharactersList";

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
    <div className="w-full min-h-[81.7vh] h-full bg-[url('./assets/chbg.avif')] bg-cover bg-[position:center_65%] flex flex-col items-center justify-center gap-4 p-4">
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
    </div>
  );
};

export default Characters;
