export default function Header() {
  return (
    <div className="flex flex-row justify-between w-full h-60 top-0 items-center text-white p-7 gap-10">
      <div className="w-[70%] h-full flex flex-row gap-6 items-center">
        <div className="w-40 h-40 border-white border rounded-lg shrink-0">
          <img
            src="chunk.png"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full h-40 justify-center">
          <h1 className="text-3xl h-10 font-semibold">Raf Carriere</h1>
          <h2 className="font-light h-10">Calgary, Alberta, Canada</h2>
          <h2 className="break-normal h-10 text-sm">
            A SAIT Software Development student with a passion for game, web,
            and mobile app creation.
          </h2>
        </div>
      </div>
      <div className="h-full w-[30%] flex flex-col justify-center">
        <div className="flex flex-col w-full h-40 justify-center gap-2">
          <div className="flex flex-row gap-2 items-center h-10">
            <h1 className="font-light text-2xl">Years</h1>
            <div className="border-red-400 border-2 rounded-full h-8 w-8 flex items-center justify-center">
              6
            </div>
          </div>
          <div className="flex flex-row h-10 gap-1 w-full">
            <button
              className="rounded-md w-full h-full bg-[#0d0c1d] hover:cursor-pointer hover:bg-[#161b33] transition-all duration-100 
            flex flex-row items-center justify-center gap-1"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
              </svg>

              <h1>Contact</h1>
            </button>
            <button
              className="rounded-md w-full h-full bg-[#0d0c1d] hover:cursor-pointer hover:bg-[#161b33] transition-all duration-100 
            flex flex-row items-center justify-center gap-1"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </button>
          </div>
          <br className="h-10" />
        </div>
      </div>
    </div>
  );
}
