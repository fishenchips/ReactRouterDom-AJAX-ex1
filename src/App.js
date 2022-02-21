import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ListofPunsPage from './pages/ListofPunsPage';
import Navbar from './components/Navbar';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<ListofPunsPage />} ></Route>
          <Route path="/posts/:id" element={<PostPage />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
