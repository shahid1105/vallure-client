const Navbar = () => {
  const navOption = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Shop</a>
      </li>
      <li>
        <a>Jewelry</a>
      </li>
      <li>
        <a>Watches</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#000000] text-white md:px-[140px] lg:px-[140px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <a className="text-xl">Vallure</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end flex md:gap-5 lg:gap-5 md:pe-12 lg:pe-12">
        <button>Search</button>
        <h2>Cart</h2>
      </div>
    </div>
  );
};

export default Navbar;
