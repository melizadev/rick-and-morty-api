import SkeletonLocations from "./SkeletonLocations";
import LocationList from "./LocationsList";
import { useLocations } from "./useLocations";
import Error from "../../error/Error";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="w-full min-h-screen  bg-[url('./assets/location.avif')] bg-center bg-cover flex flex-col items-center justify-center p-4 gap-4 bg">
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
export default Locations;
