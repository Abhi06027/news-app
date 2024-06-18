import React from "react";
import defaultImage from "../../../assets/news.jpg";

const NewsItems = ({ title, description, url, urlToImage }) => {
  return (
    <>
      <div className="bg-white gap-6 p-4 text-black shadow-md rounded-xl md:w-80 lg:w-96 h-full ">
        <img
          src={urlToImage ? urlToImage : defaultImage}
          alt="news img"
          className="rounded-xl w-full h-48 bg-cover "
        />
        <div className="mt-4">
          <h5 className="text-lg leading-tight	font-medium">
            {title.slice(0, 40)}
          </h5>
          <p className="text-sm py-2">
            {description
              ? description.slice(0, 150)
              : "Batting first Nepal led by inspiring spell from Sompal Kami, who struck with the first ball, restricted Bangladesh to a paltry 106 in 19.3 overs"}
          </p>
          <button className="my-5">
            <a href={url} className="bg-[#9450ff] rounded-md text-white p-2 ">
              Read More
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsItems;
