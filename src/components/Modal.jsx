import parse from "html-react-parser";
import { FaRegCircleQuestion } from "react-icons/fa6";

const Modal = ({ modalOpen, data, handleModal }) => {
  return (
    <div
      className="rounded-2xl shadow-2xl bg-gray-800 p-4  sm:p-6 lg:p-8"
      role="alert"
      style={!modalOpen ? { display: "none" } : null}
    >
      <div className="flex items-center gap-4">
        <span className="rounded-full bg-orange-600 pt-2 pb-1 px-3 text-white text-lg">
          <FaRegCircleQuestion />
        </span>

        <p className="font-medium sm:text-lg text-orange-600">{data.title}</p>
      </div>

      <p className="mt-4 text-gray-500">{parse(data.story_text)}</p>

      <div className="mt-6 sm:flex sm:gap-4">
        <button
          className="mt-2 inline-block w-full rounded-lg bg-orange-600 px-5 py-1 text-center text-sm font-semibold text-gray-200 sm:mt-0 sm:w-auto"
          onClick={() => handleModal()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
