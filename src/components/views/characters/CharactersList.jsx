import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import usePagination from "../../hooks/usePagination";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
const CharactersList = ({ data }) => {
  const { page, setPage, pages, visibleItems } = usePagination(data);
  return (
    <>
      <h2 className="text-3xl font-indie mb-4 font-semibold text-white">
        Characters
      </h2>

      <div className="flex items-center justify-center px-2 gap-6 w-full flex-wrap">
        {visibleItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-gray-200 bg-white p-2 rounded shadow-md"
          >
            <h2 className="font-fredoka font-semibold pb-2 text-neutral-700">
              {item.name}
            </h2>
            <img
              src={item.image}
              alt={item.name}
              className="w-[200px] h-[200px] object-cover rounded-md"
            />
            <div className="flex items-center justify-start gap-1 mt-2">
              <FaCircle
                size="12px"
                color={
                  item.status === "Alive"
                    ? "green"
                    : item.status === "Dead"
                    ? "red"
                    : "gray"
                }
              />
              <p className="font-fredoka text-neutral-800">{item.status} -</p>
              <p className="font-fredoka text-neutral-800">{item.species}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 bg-[#ffffff] p-2 bg-opacity-20 rounded-md mt-4">
        <button
          className="text-white rounded-full disabled:opacity-50 cursor-pointer"
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          aria-label="Ir a la página anterior"
        >
          <FaArrowAltCircleLeft color="#352b2b" size={"20px"} />
        </button>

        <p className="font-fredoka text-[15px] text-neutral-800">
          {page + 1} of {pages}
        </p>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, pages - 1))}
          disabled={page === pages - 1}
          className="text-white rounded-full disabled:opacity-50 cursor-pointer"
          aria-label="Ir a la página siguiente"
        >
          <FaArrowAltCircleRight color="#352b2b" size={"20px"} />
        </button>
      </div>
    </>
  );
};
CharactersList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default CharactersList;
