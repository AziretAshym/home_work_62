import './Toolbar.css';
const Toolbar = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1><a href="#" className="logo">Travelulu</a></h1>
            <ul className="nav-list">
              <li><a href="#" className="nav-link">Home</a></li>
              <li><a href="#" className="nav-link">About us</a></li>
              <li><a href="#" className="nav-link">Contact</a></li>
              <li><a href="#" className="nav-link">Portfolio</a></li>
            </ul>
        </div>
      </header>
    </>
  );
};

export default Toolbar;