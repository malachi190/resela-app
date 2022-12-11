import React from "react";
import {Navbar, SearchBar} from '../homepage'

const Header = () => {
  return (
    <header
      className={`mx-auto bg-gradient-to-r from-primaryColor to-cyan-500 w-full overflow-hidden py-12 px-5 m-0 h-auto header-responsive sm:max-w-full`}
    >
      <Navbar />
      <div className="flex justify-between items-center">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
