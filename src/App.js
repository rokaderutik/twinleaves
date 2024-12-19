import { Route, Routes } from "react-router";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import ProductDetails from "./components/Details/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ProductsGrid />} />
        <Route path="/details/:id" element={<ProductDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
