import React from "react";
import BlogDetailsInner from "../components/BlogDetailsInner";
import Breadcrumb from "../components/Breadcrumb";
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
    </>
  );
};

export default BlogDetails;
