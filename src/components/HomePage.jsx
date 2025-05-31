import Footer from "./Footer";
import Banner from "./Banner";
import Navigate from "./Navigate";
import PizzaOrder from "./PizzaOrder";

function HomePage() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <Navigate />
      </div>
      <div>
        <PizzaOrder />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
