import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="flex w-full h-auto border-b border-slate-800 justify-between items-center py-3 px-6 bg-slate-900 backdrop-blur-md sticky top-0 z-50">
      <div className="text-slate-50 font-bold">
        <h3 className="text-lg tracking-tight">Conference Manager</h3>
      </div>
      <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400 items-center">
        <p className="hover:text-slate-50 cursor-pointer transition-colors">
          Features
        </p>
        <p className="hover:text-slate-50 cursor-pointer transition-colors">
          Pricing
        </p>
        <p className="hover:text-slate-50 cursor-pointer transition-colors">
          Resources
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <Button
          variant="ghost"
          className="text-slate-400 hover:text-slate-50 hover:bg-slate-800"
        >
          Login
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20">
          Get Started
        </Button>
      </div>
    </nav>
  );
};
