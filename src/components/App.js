import CountButton from "./CountButton/CountButton";
import Header from "./Header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CountButton incrementBy={1} />
      <CountButton incrementBy={5} />
    </div>
  );
}

export default App;
