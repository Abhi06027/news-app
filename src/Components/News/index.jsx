import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsItems from "./NewsItems";
import Pagination from "./Pagination";
import { fetchNews, setCurrentPage, setCategory } from "../../store/newsSlice";

const News = () => {
  const dispatch = useDispatch();
  const { articles, currentPage, postsPerPage, status, error, category } =
    useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [category, dispatch]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = articles.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(articles.length / postsPerPage)
    ) {
      dispatch(setCurrentPage(pageNumber));
    }
  };

  const handleCategoryChange = (newCategory) => {
    dispatch(setCategory(newCategory));
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl text-center font-medium my-6">Latest News</h1>
      <div className="flex justify-center items-center my-6">
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
        </select>
      </div>
      <div className="flex justify-center">
        {status === "loading" && (
          <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
            <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-14 w-14"></div>
          </div>
        )}
        {status === "failed" && <p>{error}</p>}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {currentPosts.map((news, index) => (
            <NewsItems
              key={index}
              title={news.title}
              description={news.description}
              urlToImage={news.urlToImage}
              url={news.url}
            />
          ))}
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={articles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default News;
