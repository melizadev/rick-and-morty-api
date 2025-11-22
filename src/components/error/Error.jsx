const Error = ({ error, retry }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center">
      <div className="bg-white bg-opacity-90 p-6 rounded-md shadow-md">
        <p className="text-neutral-700 font-fredoka font-semibold text-3xl mb-4">
          {error?.message || "Error."}
        </p>
        <button
          onClick={() => retry?.()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Error;
