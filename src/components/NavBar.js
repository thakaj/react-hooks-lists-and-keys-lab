import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElements = links.map((links)=> {
    return <a key ={links} href={"#"+links}>{links}</a>
  })

  return <nav>{linksElements}</nav>;
}

export default NavBar;
