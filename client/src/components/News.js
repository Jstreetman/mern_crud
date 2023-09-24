import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import NewsNavbar from "./NewsNavbar";
import NewsSection from "./NewsSection";

function News() {
  return (
    <div>
      <NewsNavbar />
      <NewsSection />
    </div>
  );
}

export default News;
