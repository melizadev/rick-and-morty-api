import PropTypes from "prop-types";

const LocationsList = ({ data }) => {
  return (
    <>
      <h2
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          py-3
          font-indie
          font-semibold
          text-white
        "
      >
        List of Locations
      </h2>

      {/* Wrapper que permite scroll horizontal */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px] max-w-3xl mx-auto rounded-lg shadow-md">
          <table className="w-full rounded-lg overflow-hidden">
            <thead className="bg-gray-200/90">
              <tr>
                <th className="px-4 py-2 text-left font-fredoka text-gray-700">
                  Name
                </th>
                <th className="px-4 py-2 text-left font-fredoka text-gray-700">
                  Type
                </th>
                <th className="px-4 py-2 text-left font-fredoka text-gray-700">
                  Dimension
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.map((loc) => (
                <tr
                  key={loc.id}
                  className="odd:bg-gray-50/90 even:bg-gray-100/90"
                >
                  <td className="px-4 py-2 font-fredoka whitespace-nowrap">
                    {loc.name}
                  </td>
                  <td className="px-4 py-2 font-fredoka whitespace-nowrap">
                    {loc.type}
                  </td>
                  <td className="px-4 py-2 font-fredoka whitespace-nowrap">
                    {loc.dimension}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

LocationsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LocationsList;
