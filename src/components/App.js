import { useEffect, useState } from "react";

import Header from "./Header/Header";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";

import "./App.css";

const App = () => {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product.title;
        });
        setProductsState(newProductsState);
      });
  }, []);

  const hasProducts = productsState.length > 0;

  return (
    <div className="App">
      <Header />
      <CountButton incrementBy={1} />
      <CountButton incrementBy={5} />
      {hasProducts ? <SearchBar products={productsState} /> : "Loading..."}
    </div>
  );
};

export default App;
