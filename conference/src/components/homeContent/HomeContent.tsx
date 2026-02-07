import { Button } from "../ui/button";

export const HomeContent = () => {
  return (
    <div className="flex bg-slate-950 h-screen items-center">
      <div className="w-[45%] ml-[10%]">
        <h1 className="text-slate-50 text-5xl font-bold w-[80%]">
          Turn your audience into attendences.
        </h1>
        <h4 className="text-slate-400 text-xl w-[80%] mt-4">
          The easiest way to create, manage and sell out professional events and
          conferences
        </h4>
        <Button className="bg-blue-600 hover:bg-blue-500 mt-6" size={"lg"}>
          Start for free
        </Button>
        <Button className="bg-slate-800 hover:bg-slate-700 ml-4" size={"lg"}>
          Watch demo
        </Button>
      </div>
      <div className="[perspective:1100px]">
        <img
          className="border border-slate-800/50 shadow-2xl shadow-blue-500/10 rounded-xl [transform:rotateY(-15deg)rotateX(5deg)] 
               hover:[transform:rotateY(0deg)rotateX(0deg)] 
               transition-all duration-700 ease-out"
          src="/img/image1.png"
        />
      </div>
    </div>
  );
};
