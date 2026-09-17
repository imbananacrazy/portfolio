export default function PortfolioBox() {
  return (
    <div className="w-full h-full flex flex-col text-white">
      <div className="w-full min-h-10 bg-linear-to-r from-[#474973]/30 to-[#0d0c1d]/70 flex items-center p-2 rounded-t-sm">
        <h1>Project 4</h1>
      </div>
      <div className="w-full bg-linear-to-br from-[#161b33]/30 to-[#0d0c1d]/70 p-2 rounded-b-sm">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">Portfolio</h1>
          <p className="text-sm">This site. Made in Next.js.</p>
        </div>
      </div>
    </div>
  );
}
