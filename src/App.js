import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import InsurancePage from './components/InsurancePage.js';
import DetailsPage from './components/DetailsPage.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="PageContent">    
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/insurance">
              <InsurancePage />
            </Route>
            <Route exact path="/insurance/details">
              <DetailsPage />
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
