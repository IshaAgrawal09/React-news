import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/Context";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
