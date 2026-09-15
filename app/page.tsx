import Header from "./components/header";

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
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <img src="background.gif" className="fixed w-full h-full" />
      <div className="h-full w-[45%] bg-linear-to-br from-[#0d0c1d]/90 to-[#161b33]/30 backdrop-blur-2xl z-1 shadow-[0px_0px_6px_4px_rgba(0,0,0,0.5)]">
        <Header />
      </div>
    </div>
  );
}
