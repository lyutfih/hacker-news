import { useState, useEffect } from "react";
import News from "./components/News";
import axios from "axios";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    setLoading(true);
    try {
      const results = await axios.get(
        "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=15&page=2"
      );
      setNews(results.data.hits);
      console.log(results.data.hits);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
      setErrorDetails(err);
    }
  };

  return (
    <>
      <Header />
      <section className="text-white">
        <div className="mx-auto max-w-screen-lg pt-0 pb-4 py-16 lg:flex lg:h-full lg:items-center flex-col px-4">
          {loading ? <Loader /> : <News allNews={news} />}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
