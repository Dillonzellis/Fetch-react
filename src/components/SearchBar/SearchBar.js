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
    </div>
  );
};

export default SearchBar;
