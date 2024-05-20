import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Price from "./pages/Price";
import Favorites from "./pages/Favorites";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/price" element={<Price></Price>} />
        <Route path="/favorites" element={<Favorites></Favorites>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
