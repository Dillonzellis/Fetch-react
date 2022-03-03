import Header from "./Header/Header";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";

import "./App.css";

const products = ["David", "Jack", "John", "Joy", "Venom"];

function App() {
  return (
    <div className="App">
      <Header />
      <CountButton incrementBy={1} />
      <CountButton incrementBy={5} />
      <SearchBar products={products} />
    </div>
  );
}

export default App;
