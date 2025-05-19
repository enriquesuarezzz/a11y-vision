import Coffe from "./svg/coffe";
import Github from "./svg/github";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200">
      {/* Navbar container */}
      <div className=" flex h-24 w-full items-center justify-between px-10">
        {/* Logo and title */}
        <div className="flex items-center gap-4">
          <img src="/images/logo.avif" alt="Logo" className="w-10 h-20" />
          <span className="text-xl font-semibold  pl-4">A11y Vision</span>
        </div>
        {/* Buy me a coffee and github */}
        <div className="flex items-center gap-3">
          <a href="https://www.buymeacoffee.com/enriquesuarez" target="_blank">
            <div className="flex items-center justify-center gap-1">
              <Coffe />
              <span className="text-sm font-semibold  hidden md:flex">
                Buy me a coffee
              </span>
            </div>
          </a>
          <a
            href="https://github.com/enriquesuarezzz/a11y-vision.git"
            target="_blank"
          >
            <div className="flex items-center justify-center gap-1">
              <Github />
              <span className="text-sm font-semibold hidden md:flex">
                Github
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
