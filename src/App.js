import { Navbar, Footer } from "./widgets/";
import "./styles/index.scss";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <div className="page__content">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
