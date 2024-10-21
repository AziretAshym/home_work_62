import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Home from "./containers/Home/Home.tsx";
import Assortment from "./containers/Assortment/Assortment.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./containers/Portfolio/Portfolio.tsx";
import Booking from "./containers/Booking/Booking.tsx";

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/assortment" element={<Assortment />} />
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="booking" element={<Booking />} />
        </Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>Not Found</h1>}
        ></Route>
      </Routes>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
