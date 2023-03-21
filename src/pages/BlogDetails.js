import React from "react";
import BlogDetailsInner from "../components/BlogDetailsInner";
import Breadcrumb from "../components/Breadcrumb";
import FooterBottomOne from "../components/FooterBottomOne";
import FooterOne from "../components/FooterOne";
import NavbarOne from "../components/NavbarOne";
import SearchPopup from "../elements/SearchPopup";

const BlogDetails = () => {
  return (
    <>
      {/* Search Popup */}
      <SearchPopup />

      {/* Navbar One */}
      <NavbarOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"BLOG DETAILS"} />

      {/* Blog Details Inner */}
      <BlogDetailsInner />

      {/* Footer One */}
      <FooterOne />

      {/* Footer Bottom One */}
      <FooterBottomOne />
    </>
  );
};

export default BlogDetails;