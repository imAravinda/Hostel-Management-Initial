import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import content, { images } from './Data/Content';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Hooks/ScrollToTop';
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import RulesandRegulation from './Pages/RulesandRegulation';
import WardensandSubWardens from './Pages/WardensandSubWardens';
function App() {
  useEffect(() => {
    Aos.init({duration:1000}); 
  }, [])
  return (
    
      <Router>
      <div className="App">
      <Navbar/>
      <ScrollToTop/>
          <Switch>
            <Route exact path="/">
              <div>
                <Home Covertext={content[0]} CoverImage={images[0]}/>
              </div>
            </Route>
            <Route exact path="/RulesandRegulation">
              <div>
                <RulesandRegulation Covertext={content[1]} CoverImage={images[1]}/>
              </div>
            </Route>
            <Route exact path="/WardensandSubWardens">
              <div>
                <WardensandSubWardens Covertext={content[2]} CoverImage={images[2]}/>
              </div>
            </Route>
          </Switch>
          <Footer />
      </div>
    </Router>
    
  );
}

export default App;
