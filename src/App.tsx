import './App.css'
import Toolbar from './components/Toolbar/Toolbar.tsx';
import Home from './containers/Home/Home.tsx';
import AboutUs from './containers/AboutUs/AboutUs.tsx';
import Contacts from './containers/Contacts/Contacts.tsx';

function App() {

  return (
    <>

      <body>
      <div className="container">
        <Toolbar/>
        <Home/>
        <AboutUs/>
        <Contacts />
      </div>
      </body>
    </>
  )
}

export default App
