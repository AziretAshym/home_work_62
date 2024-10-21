import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main_block_text">
            <h1 className="main_title">Plan your next big trip overseas.</h1>
            <div className="buttons">
              <Link to="/portfolio" className="main_link_1">
                BEGIN PLANS
              </Link>
              <Link to="assortment" className="main_link_2">
                REVIEW PLANS
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className="container">
        <div className="contact_block">
          <h2 className="contact_block_title">
            Need more information to get started?
          </h2>
          <Link to="/contacts" className="contact_link">
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
