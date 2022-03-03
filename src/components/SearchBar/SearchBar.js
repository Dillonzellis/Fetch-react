import { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const searchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const clearBtnHandler = (e) => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  const filterProducts = props.products.filter((product) => {
    return product.includes(searchValue);
  });

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        name=""
        id=""
        onChange={searchValueHandler}
      />
      {shouldDisplayButton && <button onClick={clearBtnHandler}>Clear</button>}

      <ul>
        {filterProducts.map((product) => {
          return <li key={product}>{product}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
