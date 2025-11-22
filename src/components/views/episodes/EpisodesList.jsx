import PropTypes from "prop-types";
const EpisodesList = ({ data }) => {
  return (
    <>
      <h2 className="text-4xl font-indie font-semibold text-white">
        List of Episodes
      </h2>

      <div className="lg:w-[80%] md:w-[80%] w-full border-gray-200 rounded-md overflow-hidden shadow-md">
        <table className="w-full">
          <thead className="bg-gray-200 border-b border-gray-200 rounded-md">
            <tr>
              <th className="text-gray-700 font-fredoka text-left px-2 py-2">
                Episode
              </th>
              <th className="text-gray-700 text-center font-fredoka px-2 py-2">
                Characters
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((episode) => (
              <tr
                key={episode.id}
                className="odd:bg-gray-50 even:bg-gray-100 border-b text-gray-700 border-gray-200 hover:bg-gray-200 transition-colors h-[45px]"
              >
                <td className="w-[20%] font-fredoka p-2">
                  <span className="font-semibold">{episode.name}</span>
                  <span className="text-[14px] block">
                    {episode.episode}
                    <br />
                    {episode.air_date}
                  </span>
                </td>
                <td className="w-[80%] p-2">
                  <div className="flex flex-wrap gap-x-1">
                    {episode.characters.slice(0, 14).map((char, idx) => (
                      <span className="font-fredoka" key={char.id}>
                        {char.name}
                        {idx < episode.characters.length - 1 ? ", " : "."}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
EpisodesList.propTypes = {
  data: PropTypes.array.isRequired,
};
export default EpisodesList;
