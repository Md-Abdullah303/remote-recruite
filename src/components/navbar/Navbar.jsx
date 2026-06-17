import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3">
      <nav className="flex items-center justify-between bg-blue-600 text-white w-full max-w-[90%] md:max-w-[70%] py-3 px-6 rounded-3xl shadow-lg transition-all duration-300">
        {/* Logo Container */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-8 w-auto object-contain" />
        </div>

        {/* Buttons Container */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className="text-sm md:text-base font-medium hover:text-blue-200 transition-colors px-3 py-1.5 rounded-xl">
            Sign In
          </button>
          <button className="text-sm md:text-base font-medium bg-white text-blue-600 hover:bg-blue-50 transition-colors px-4 py-1.5 rounded-xl shadow-sm">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
