import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes , Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const About = (props) => {
  console.log(props)
  return(<h1>About Page</h1>);
}
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/hats" element={<h1>Hats</h1>} />
        <Route path="/jackets" element={<h1>Jackets</h1>} />
        <Route path="/sneakers" element={<h1>Sneakers</h1>} />
      </Routes>
    </>
  );
}

export default App;
