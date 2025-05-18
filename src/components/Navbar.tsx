import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className=" flex h-24 w-full items-center justify-between px-10">
        <div className="flex items-center gap-4">
          <img src="/images/logo.avif" alt="Logo" className="w-10 h-20" />
          <span className="text-xl font-semibold  pl-4">A11y Vision</span>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Buy me a coffee
          </Button>
          <Button size="sm" className=" bg-blue-700 hover:bg-blue-800">
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
