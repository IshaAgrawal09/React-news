import React from "react";
import "./Searchnews.css";
import CartContext from "./Context";
import { useContext } from "react";
const SearchNews = () => {
  const { searchData } = useContext(CartContext);

  console.log(searchData);

  return (
    <div className="searchnews">
      {searchData.length
        ? searchData.map((item, index) => {
            console.log("helllooooo");
            return (
              <div className="searchNewsSingle" key={index}>
                <img src={item.urlToImage} alt="" />

                <div className="searchNewsInfo">
                  <p id="sourceName">{item.source.name}</p>
                  <a href={item.url}>{item.title}</a>
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

                  <p>{item.description}</p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default SearchNews;
