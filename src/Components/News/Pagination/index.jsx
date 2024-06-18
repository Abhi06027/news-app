import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col items-center my-8">
      <div className="flex gap-4">
        <button
          className={`text-white bg-[#9450ff] font-medium  rounded-lg text-sm px-5 py-2.5 text-center ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          &larr; Previous
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 rounded ${
              number === currentPage
                ? "bg-[#9450ff] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          className={`text-white bg-[#9450ff] font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
          onClick={() => paginate(currentPage + 1)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
