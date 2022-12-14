import './App.css';
import Header from './components/home/header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import HomePages from './components/pageConnent/HomePages';
import Footer from './components/home/work/Footer';


function App() {
  return (
    <>
    
    <Router>
    <Header/>
    <Switch>
      <Route path='/' exact component={HomePages}/>
    </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
