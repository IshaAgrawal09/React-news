import { createContext, useState, useEffect } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const [recent, setRecent] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [theme, setTheme] = useState({
    grayScale: 0.2,
  });

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=de713b26887d4c68a61209262645aa51"
    )
      .then((response) => response.json())
      .then((actualData) => {
        if (actualData.status == "ok") {
          setData(actualData.articles);
          setRecent([...actualData.articles].reverse());
        }
      });
  }, []);
  console.log(data);

  // SEARCH OPTION
  const submit = (event) => {
    setIsSubmit(false);

    if (event.key === "Enter") {
      fetch(
        ` https://newsapi.org/v2/everything?q=${query}&apiKey=de713b26887d4c68a61209262645aa51`
      )
        .then((response) => response.json())
        .then((actualData) => {
          setSearchData(actualData.articles);
        });
      setIsSubmit(true);
    }
  };

  const mode = (event) => {
    if (event.target.checked) {
      setTheme({
        grayScale: 1,
      });
    } else {
      setTheme({ grayScale: 0.2 });
    }
  };

  return (
    <CartContext.Provider
      value={{
        data,
        setData,
        query,
        setQuery,
        submit,
        recent,
        setRecent,
        isSubmit,
        setIsSubmit,
        searchData,
        setSearchData,
        theme,
        setTheme,
        mode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
