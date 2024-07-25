const Navbar = ({ scrollToContact, scrollToService, scrollToReviews }) => {
  return (
    <header className="flex justify-end items-center p-4">
      <div className="flex mr-auto">
        <h1
          style={{ color: "#323350" }}
          className="font-sans font-bold text-3xl"
        >
          Track it
        </h1>
        <img
          src="location logo.png"
          className="w-5 h-5 cursor-pointer mt-2.5 ml-5"
          alt="running"
        />
      </div>
      <nav>
        <ul style={{ color: "#323350" }} className="font-sans font-light flex ">
          <li className="inline-block px-4">
            <a href="/" className="hover:text-indigo-900">
              Home
            </a>
          </li>
          <li className="inline-block px-4">
            <button onClick={scrollToService} className="hover:text-indigo-900">
              Service
            </button>
          </li>
          <li className="inline-block px-4">
            <button onClick={scrollToReviews} className="hover:text-indigo-900">
              Reviews
            </button>
          </li>
          <li className="inline-block px-4">
            <button onClick={scrollToContact} className="hover:text-indigo-900">
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
      <a className="font-sans font-medium text-red-500 ml-5" href="/login">
        <button
          className="font-sans font-light py-2.5 px-6 rounded-2xl cursor-pointer border-solid border-indigo-900 text-[#323350] hover:text-white hover:bg-indigo-900"
          style={{ borderWidth: "3px" }}
        >
          Get It Now
        </button>
      </a>
    </header>
  );
};

export default Navbar;
