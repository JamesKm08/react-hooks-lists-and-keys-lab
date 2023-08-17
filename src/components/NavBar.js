import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <ol>
      <li><a href="#home" key={links[0]}>{links[0]}</a></li>
      <li><a href="#about" key={links[1]}>{links[1]}</a></li>
      <li><a href="#projects" key={links[2]}>{links[2]}</a></li>
    </ol>
  </nav>;
}

export default NavBar;
