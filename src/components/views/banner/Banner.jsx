const Banner = () => {
  return (
    <div className="min-h-[81.7vh] h-full flex flex-col items-center justify-center bg-[url('./assets/info.avif')] bg-center sm:bg-center md:bg-center lg:bg-[position:center_5%] bg-cover">
      <div className="w-full h-full text-white flex items-center justify-start">
        <p className="bg-white ml-2 sm:w-[55%] md:w-[40%] lg:w-[40%] w-[55%] p-2 text-sm text-gray-900 md:text-lg font-fredoka">
          Rick and Morty follows the perilous interdimensional adventures of a
          genius scientist and sociopath, Rick Sanchez, and his teenage
          grandson, Morty Smith. Together, they explore a vast multiverse,
          facing aliens, alternate realities, and cosmic hazards, while dealing
          with family dynamics and their own dysfunctions.
        </p>
      </div>
    </div>
  );
};
export default Banner;
