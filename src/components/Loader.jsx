const Loader = () => {
  return (
    <>
      <article className="rounded-xl shadow-2xl bg-gray-800 mb-5 animate-[pulse_1.5s_ease-in-out_infinite] min-w-max">
        <div className="flex items-start gap-4 p-3">
          <div className="w-14 h-14 bg-gray-500 rounded-lg animate-[pulse_1.5s_ease-in-out_infinite]"></div>

          <div>
            <div className="h-6 bg-gray-500 rounded-md w-6/12 animate-[pulse_1.5s_ease-in-out_infinite] mb-3"></div>

            <div className="h-3 bg-gray-500 rounded-md w-96 mb-3 animate-[pulse_1.5s_ease-in-out_infinite]"></div>

            <div className="h-2 bg-gray-500 rounded-md w-96 min-h-10 mb-3 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Loader;
