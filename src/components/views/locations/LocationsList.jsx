import PropTypes from "prop-types";
const LocationsList = ({ data }) => {
  return (
    <>
      <h2 className="text-3xl font-indie font-semibold text-gray-50">
        List of Locations
      </h2>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
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
              <tr key={loc.id} className="odd:bg-gray-50 even:bg-gray-100">
                <td className="px-4 py-2 font-fredoka">{loc.name}</td>
                <td className="px-4 py-2 font-fredoka">{loc.type}</td>
                <td className="px-4 py-2 font-fredoka">{loc.dimension}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
LocationsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LocationsList;
