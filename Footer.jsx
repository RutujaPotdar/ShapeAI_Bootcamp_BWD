import React from "react";

function Footer() {
  var cur_Year = new Date().getFullYear();
  return (
    <footer>
      <p>copyright@{cur_Year}</p>
    </footer>
  );
}
export default Footer;
