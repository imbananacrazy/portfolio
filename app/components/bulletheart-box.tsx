export default function BulletheartBox() {
  return (
    <div className="w-full h-full flex flex-col text-white">
      <div className="w-full min-h-10 bg-linear-to-r from-[#474973]/30 to-[#0d0c1d]/70 flex items-center p-2 rounded-t-sm">
        <h1>Project 1</h1>
      </div>
      <div className="w-full bg-linear-to-br from-[#161b33]/30 to-[#0d0c1d]/70 p-2 rounded-b-sm">
        <div className="flex flex-col gap-2 h-full">
          <div className="flex lg:flex-row sm:flex-col gap-2 h-full">
            <div className="bg-black h-25 w-50 shrink-0 border border-[#a69cac]">
              <img
                src="bulletheart.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg font-bold">BULLETHEART</h1>
              <p className="text-sm">
                A first-person shooter made in Unreal Engine 5. Development
                started in September of 2023 and the game has garnered over 700
                wishlists on Steam.
              </p>
            </div>
          </div>
          <div className="flex flex-row h-full gap-2">
            <a
              className="rounded-md w-50 h-10 min-w-10 bg-[#0d0c1d] hover:cursor-pointer hover:bg-[#161b33] transition-all duration-100 
            flex items-center justify-center gap-1"
              href="https://store.steampowered.com/app/3326770/BULLETHEART/"
            >
              <svg
                fill="white"
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.102 12.129c0-0 0-0 0-0.001 0-1.564 1.268-2.831 2.831-2.831s2.831 1.268 2.831 2.831c0 1.564-1.267 2.831-2.831 2.831-0 0-0 0-0.001 0h0c-0 0-0 0-0.001 0-1.563 0-2.83-1.267-2.83-2.83 0-0 0-0 0-0.001v0zM24.691 12.135c0-2.081-1.687-3.768-3.768-3.768s-3.768 1.687-3.768 3.768c0 2.081 1.687 3.768 3.768 3.768v0c2.080-0.003 3.765-1.688 3.768-3.767v-0zM10.427 23.76l-1.841-0.762c0.524 1.078 1.611 1.808 2.868 1.808 1.317 0 2.448-0.801 2.93-1.943l0.008-0.021c0.155-0.362 0.246-0.784 0.246-1.226 0-1.757-1.424-3.181-3.181-3.181-0.405 0-0.792 0.076-1.148 0.213l0.022-0.007 1.903 0.787c0.852 0.364 1.439 1.196 1.439 2.164 0 1.296-1.051 2.347-2.347 2.347-0.324 0-0.632-0.066-0.913-0.184l0.015 0.006zM15.974 1.004c-7.857 0.001-14.301 6.046-14.938 13.738l-0.004 0.054 8.038 3.322c0.668-0.462 1.495-0.737 2.387-0.737 0.001 0 0.002 0 0.002 0h-0c0.079 0 0.156 0.005 0.235 0.008l3.575-5.176v-0.074c0.003-3.12 2.533-5.648 5.653-5.648 3.122 0 5.653 2.531 5.653 5.653s-2.531 5.653-5.653 5.653h-0.131l-5.094 3.638c0 0.065 0.005 0.131 0.005 0.199 0 0.001 0 0.002 0 0.003 0 2.342-1.899 4.241-4.241 4.241-2.047 0-3.756-1.451-4.153-3.38l-0.005-0.027-5.755-2.383c1.841 6.345 7.601 10.905 14.425 10.905 8.281 0 14.994-6.713 14.994-14.994s-6.713-14.994-14.994-14.994c-0 0-0.001 0-0.001 0h0z"></path>
              </svg>

              <h1 className="sm:hidden lg:block">View on Steam</h1>
            </a>
            <a
              className="rounded-md w-50 h-10 bg-[#0d0c1d] hover:cursor-pointer hover:bg-[#161b33] transition-all duration-100 
            flex flex-row items-center justify-center gap-1"
              href="https://www.youtube.com/@BulletheartGame"
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 -3 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-300.000000, -7442.000000)"
                    fill="white"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                        id="youtube-[#168]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>

              <h1 className="sm:hidden lg:block">Devlogs</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
