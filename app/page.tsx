import BulletheartBox from "./components/bulletheart-box";
import DiscordCloneBox from "./components/discord-clone-box";
import Header from "./components/header";
import HealthmaxTrackingBox from "./components/healthmax-tracking-box";
import MarieBox from "./components/marie-box";
import PortfolioBox from "./components/portfolio-box";
import RightPanel from "./components/right-panel";
import WinfrayBox from "./components/winfray-box";

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
      <img src="background.gif" className="w-full h-full fixed object-cover" />
      <div
        className="lg:w-[55%] sm:w-full overflow-y-scroll h-full bg-linear-to-br sm:gap-35 sm:flex sm:flex-col lg:gap-0 from-[#0d0c1d]/90 to-[#161b33]/30 z-1 
      shadow-[0px_0px_6px_4px_rgba(0,0,0,0.5)] scrollbar-none backdrop-blur-lg"
      >
        <Header />
        <div className="flex lg:flex-row sm:flex-col w-full lg:h-full p-7 gap-10 lg:mb-8">
          <div className="h-full lg:w-[70%] sm:w-full flex flex-col gap-5">
            <BulletheartBox />
            <MarieBox />
            <DiscordCloneBox />
            <PortfolioBox />
            <HealthmaxTrackingBox />
            <WinfrayBox />
          </div>
          <div className="h-full lg:w-[30%] sm:w-full">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
