import { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import {
  FaRegClock,
  FaRegUser,
  FaUpDown,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import Modal from "./Modal";

TimeAgo.addDefaultLocale(en);

const News = ({ allNews }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleModal = (data) => {
    setModalOpen((prev) => !prev);
    setModalData(data);
  };

  return (
    <>
      {allNews.length === 0 ? (
        <div className="bg-orange-600 text-white py-2 px-4 rounded-lg mb-4">
          <p>No posts found!</p>
        </div>
      ) : (
        allNews.map((newPost, id) => (
          <article
            key={id}
            className="rounded-xl shadow-2xl bg-gray-800 mb-5 max-w-screen-xl min-w-full"
          >
            <div className="flex items-start gap-4 p-3 pb-0">
              <a href="#" className="block shrink-0">
                <img
                  alt=""
                  src={`https://xsgames.co/randomusers/assets/avatars/male/${id}.jpg`}
                  className="size-14 rounded-lg object-cover"
                />
              </a>

              <div className="flex flex-col max-w-screen-xl min-w-full max-sm:min-w-min sm:min-w-min">
                <h3 className="font-medium sm:text-lg">
                  {newPost.url ? (
                    <>
                      <a
                        href={newPost.url}
                        className="text-orange-500 hover:text-orange-300 transition-colors"
                        target="_blank"
                      >
                        {newPost.title}
                      </a>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 px-3 py-0 text-xs text-orange-600 ml-2">
                        Link {<FaArrowUpRightFromSquare />}
                      </span>
                    </>
                  ) : (
                    <>
                      <a
                        onClick={() => handleModal(newPost)}
                        className="text-orange-500 hover:text-orange-300 transition-colors cursor-pointer"
                        target="_blank"
                      >
                        {newPost.title}
                      </a>
                      <span className="whitespace-nowrap rounded-full bg-orange-600 px-3 py-0 text-xs text-gray-100 ml-2">
                        Post
                      </span>
                    </>
                  )}
                </h3>

                <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                  <div className="flex items-center gap-1 text-gray-400">
                    <p className="text-xs">
                      <FaRegClock />
                    </p>

                    <p className="text-xs">
                      <ReactTimeAgo date={newPost.created_at} locale="en-US" />
                    </p>
                    <span className="hidden sm:block" aria-hidden="true">
                      &middot;
                    </span>
                    <p className="text-xs text-gray-400">
                      <FaRegUser />
                    </p>

                    <p className="text-xs sm:text-gray-400">
                      Posted by {newPost.author}
                    </p>
                    <span className="hidden sm:block" aria-hidden="true">
                      &middot;
                    </span>
                    <p className="text-xs text-gray-400 max-sm:hidden">
                      <FaUpDown />
                    </p>
                    <p className="text-xs sm:text-gray-400 max-sm:hidden">
                      {newPost.points} points
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end p-2 pt-0">
              {newPost.url ? (
                <button className="inline-flex items-center py-1.5 px-3 ml-2 text-sm font-medium text-white bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Go To Page
                </button>
              ) : (
                <button
                  onClick={() => handleModal(newPost)}
                  className="inline-flex items-center py-1.5 px-3 ml-2 text-sm font-medium text-white bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Read More
                </button>
              )}
            </div>

            {!newPost.url && modalOpen && modalData && (
              <Modal
                modalOpen={modalOpen}
                data={modalData}
                handleModal={handleModal}
              />
            )}
          </article>
        ))
      )}
    </>
  );
};

export default News;
