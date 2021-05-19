import React, { useLayoutEffect } from "react";

import logo from "../../assets/adox-logo.svg";
const classNames = require("classnames");

export default function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  useLayoutEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={classNames("navbar-container", { scrolled: scrolled })}>
      <div className="link-container left"></div>
      <img src={logo} className="logo" alt="logo" width={60} />
      <div className="link-container right"></div>
    </nav>
  );
}
