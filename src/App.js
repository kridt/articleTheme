import { Router } from '@reach/router';
import './App.css';
import Index from './pages/Index';
import Categories from "./pages/Categories"
import Articles from "./pages/Articles"
import Article from './pages/Article';

function App() {
  return (
    
    <Router className="App">
     
     <Index path="/" />
     <Categories path="category/:id" />
     <Articles path="articles/:id" />
     <Article path="article/:id" />
    </Router>
  );
}

export default App;
