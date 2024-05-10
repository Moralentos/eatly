import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/price" element={<Blog></Blog>} />
        <Route path="/contacts" element={<Blog></Blog>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
