import React from "react";
import BlogView from "../components/BlogView";
import Breadcrumb from "../components/Breadcrumb";
import FooterBottomOne from "../components/FooterBottomOne";
import FooterOne from "../components/FooterOne";
import NavbarOne from "../components/NavbarOne";
import SearchPopup from "../elements/SearchPopup";

const Blog = () => {
  return (
    <>
      {/* Search Popup */}
      <SearchPopup />

      {/* Navbar One */}
      <NavbarOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"BLOG"} />

      {/* Blog View */}
      <BlogView />

      {/* Footer One */}
      <FooterOne />

      {/* Footer Bottom One */}
      <FooterBottomOne />
    </>
  );
};

export default Blog;
