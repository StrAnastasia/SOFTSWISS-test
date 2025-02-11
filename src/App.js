import { Navbar, Footer } from "./widgets/";
import "./styles/index.scss";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <div className="pageContent">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
