import { useState, useEffect } from "react";
import News from "./components/News";
import axios from "axios";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import "./index.css";

function App() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getNews();
  }, [searchQuery, page]);

  const getNews = async () => {
    setLoading(true);
    try {
      const results = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=15&page=${page}&query=${searchQuery}`
      );
      setNews(results.data.hits);
      setTotalPages(results.data.nbPages);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
      setErrorDetails(err);
    }
  };

  const handleSearch = (e, query) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  const handlePage = (e, page) => {
    e.preventDefault();
    setPage(page);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <section className="text-white">
        <div className="mx-auto max-w-screen-lg pt-0 pb-4 py-16 lg:flex lg:h-full lg:items-center flex-col px-4">
          {loading ? (
            <Loader />
          ) : error ? (
            <div>{errorDetails}</div>
          ) : (
            <>
              <News allNews={news} />
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                handlePage={handlePage}
              />
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
