import Header from "./components/header";
import RightPanel from "./components/right-panel";

//Colour palette: https://coolors.co/palette/f1dac4-a69cac-474973-161b33-0d0c1d

/*
0d0c1d
161b33
474973
a69cac
f1dac4
*/

export default function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <img src="background.gif" className="fixed w-full h-full" />
      <div className="w-[55%] bg-linear-to-br from-[#0d0c1d]/90 to-[#161b33]/30 backdrop-blur-2xl z-1 shadow-[0px_0px_6px_4px_rgba(0,0,0,0.5)]">
        <Header />
        <div className="flex flex-row w-full h-full p-7 gap-10">
          <div className="h-full w-[70%]">
            <div className="bg-blue-300 w-full h-full"></div>
          </div>
          <div className="h-full w-[30%]">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
