import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/NavBar/NavBar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import content from './Data/Content';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    
      <Router>
      <div className="App">
      {/* <GlobalStyle/> */}
      <Navbar/>
      {/* <ScrollToTop/>  */}
          <Switch>
            <Route exact path="/">
              <div>
                <Home Covertext={content[0]}/>
              </div>
            </Route>
            <Route exact path="/destination">
              <div>
                {/* <Destination Covertext={content[1]}/> */}
              </div>
            </Route>
          </Switch>
          <Footer />
          {/* <Footer/> */}
      </div>
    </Router>
    
  );
}

export default App;
