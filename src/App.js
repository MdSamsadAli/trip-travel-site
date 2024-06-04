import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./common/Footer";
import Archive from "./pages/Archive";
import CategoryPage from "./pages/CategoryPage";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
