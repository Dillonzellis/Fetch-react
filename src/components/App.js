import Header from "./Header/Header";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CountButton incrementBy={1} />
      <CountButton incrementBy={5} />
      <SearchBar />
    </div>
  );
}

export default App;
