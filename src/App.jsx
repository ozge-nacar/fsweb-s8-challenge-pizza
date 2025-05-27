import DoughSelector from "./components/DoughSelector";
import ExtraIngredients from "./components/ExtraIngredients";
import Header from "./components/Header";

import SizeSelector from "./components/SizeSelector";

function App() {
  return (
    <div>
      <Header />
      <SizeSelector />
      <DoughSelector />
      <ExtraIngredients />
    </div>
  );
}

export default App;
