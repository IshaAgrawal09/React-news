import React, { useState, useEffect } from "react";
import "./RecentNews.css";
import CartContext from "./Context";
import { useContext } from "react";

const RecentNews = () => {
  const { recent } = useContext(CartContext);

  return (
    <div className="recentNewsMain">
      <h2>RECENT NEWS</h2>
      <div className="recentNews">
        {recent.length
          ? recent.map((item, index) => {
              return (
                <div className="recentNewsSingle" key={index}>
                  <div className="singleNews">
                    {item.urlToImage ? (
                      <img src={item.urlToImage} alt="" />
                    ) : (
                      <img src="noImage.jpeg" alt="" />
                    )}
                  </div>
                  <div className="recentNewsInfo">
                    <p>{item.source.name}</p>
                    <h4>{item.title}</h4>
                    <div className="extraInfo">
                      <div>
                        <i className="fa-solid fa-clock"></i>
                        {item.publishedAt.substring(0, 10)}
                      </div>
                      <div>
                        <i className="fa-solid fa-eye"></i>1.2K
                      </div>
                      <div>
                        <i className="fa-regular fa-comment"></i>16
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default RecentNews;
