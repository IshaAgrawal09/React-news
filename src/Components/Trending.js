import React from "react";
import "./Trending.css";
import CartContext from "./Context";
import { useContext } from "react";

const Trending = () => {
  const { data } = useContext(CartContext);

  const scrollLeft = () => {
    document.getElementById("trendingNews").scrollLeft -= 100;
  };
  const scrollRight = () => {
    document.getElementById("trendingNews").scrollLeft += 100;
  };

  // console.log(data[0]);
  return (
    <>
      <div className="headlines">
        <h2>HEADLINES</h2>
        <div className="trendingMain">
          <div className="trendingBtn" onClick={scrollLeft}>
            &lt;
          </div>
          <div className="trending" id="trendingNews">
            {Object.keys(data).length
              ? data.map((item, index) => {
                  return index < 18 ? (
                    <div className="signleTrending" key={index}>
                      <div className="single">
                        {item.urlToImage ? (
                          <img src={item.urlToImage} alt="" />
                        ) : (
                          <img src="noImage.jpeg" alt="" />
                        )}
                        <p>{item.title}</p>
                      </div>
                    </div>
                  ) : null;
                })
              : null}
          </div>

          <div className="trendingBtn" onClick={scrollRight}>
            &gt;
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
