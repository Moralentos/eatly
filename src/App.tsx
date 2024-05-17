import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Price from "./pages/Price";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/price" element={<Price></Price>} />
        <Route path="/favorites" element={<Favorites></Favorites>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
