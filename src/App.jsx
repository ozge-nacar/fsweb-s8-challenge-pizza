import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import OrderForm from "./components/OrderForm";
import "./components/Header.css";
import SuccessPage from "./components/SuccessPage";
import { useState } from "react";

function App() {
  const [orderData, setOrderData] = useState(null);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route
          path="/OrderForm"
          render={() => (
            <OrderForm orderData={orderData} setOrderData={setOrderData} />
          )}
        />

        <Route
          path="/success"
          render={() => <SuccessPage orderData={orderData} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
