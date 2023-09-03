import './App.css';
import Book from './Companent/Book';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from './Companent/List';
import Favorite from './Companent/Favorite';
import DetalUser from './Companent/DetalUser';


function App() {
  return (
    <Router>



      <div className="App">
        <section className='div-1'>
          <Link className='my-link' to="/">Home</Link>
          <Link className='my-link' to="/List">Filter</Link>
          <Link className='my-link' to="/Favorite">favourite</Link>

        </section>
        <div className='Book-List-1'>
          <Routes>
            <Route exact path="/" element={<Book />} ></Route>
            <Route exact path="/List" element={<List />} ></Route>
            <Route exact path="/Favorite" element={<Favorite />} ></Route>
            <Route exact path='/DetalUser' element={<DetalUser/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
