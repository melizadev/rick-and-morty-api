import SkeletonLocations from "./SkeletonLocations";
import LocationList from "./LocationsList";
import { useLocations } from "./useLocations";
import Error from "../../error/Error";
import { motion, AnimatePresence } from "framer-motion";
import lowBg from "../../../assets/low-location.avif";
import bg from "../../../assets/location.avif";
import ProgressiveBackground from "../../ui/ProgressiveBg";
const Locations = () => {
  const { data, loading, error, retry } = useLocations();
  let content;
  if (loading) {
    content = <SkeletonLocations />;
  } else if (error && loading === false) {
    content = <Error retry={retry} error={error} />;
  } else {
    content = <LocationList data={data} />;
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
export default Locations;
