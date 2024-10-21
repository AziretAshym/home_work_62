import "./Assortment.css";
const Assortment = () => {
  return (
    <>
      <div className="plan_block">
        <div className="container">
          <div className="text_plan_block">
            <h2 className="plan_block_title">
              Use our assortment of travel plan tools
            </h2>
            <p className="plan_block_desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque pulvinar lorem justo, Lorem ipsum dolor sit amet,
              consectetur
            </p>
          </div>
          <div className="cards">
            <a href="#" className="card">
              <div className="card_1">
                <h5 className="card_title">Plan Trip Dates</h5>
                <p className="card_desc">
                  orem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <span className="card_link">LEARN MORE</span>
              </div>
            </a>
            <a href="#" className="card">
              <div className="card_2">
                <h5 className="card_title">Plan Trip Dates</h5>
                <p className="card_desc">
                  orem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <span className="card_link">LEARN MORE</span>
              </div>
            </a>
            <a href="#" className="card">
              <div className="card_3">
                <h5 className="card_title">Plan Trip Dates</h5>
                <p className="card_desc">
                  orem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <span className="card_link">LEARN MORE</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assortment;
