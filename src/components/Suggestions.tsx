import React from "react";

const Suggestions = () => {
  return (
    <div className="w-full h-full flex flex-col max-lg:justify-end justify-between items-start pb-4">
      <div className="flex-1 w-full flex flex-col justify-center items-center max-lg:hidden">
        <svg
          width="340"
          height="126"
          viewBox="0 0 340 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[43px] w-[120px]"
        >
          <g filter="url(#filter0_d_1649_18)">
            <path
              d="M298.539 34.251C298.539 32.6065 299.869 31.2733 301.509 31.2733H307.029C308.67 31.2733 310 32.6065 310 34.251V92.0837C310 93.7283 308.67 95.0614 307.029 95.0614H301.247C300.206 95.0614 299.241 94.5153 298.703 93.6219L274.839 53.9699C274.528 53.4534 273.736 53.6743 273.736 54.2775V92.0837C273.736 93.7283 272.406 95.0614 270.765 95.0614H265.245C263.605 95.0614 262.275 93.7283 262.275 92.0837V34.251C262.275 32.6065 263.605 31.2733 265.245 31.2733H271.387C272.43 31.2733 273.397 31.8223 273.934 32.7194L297.435 71.9942C297.745 72.5122 298.539 72.2919 298.539 71.6879V34.251Z"
              fill="white"
            ></path>
            <path
              d="M30.0398 79.4134C29.7479 77.7952 31.1051 76.4511 32.7457 76.4511H38.2157C39.8283 76.4511 41.1016 77.7807 41.6955 79.2835C43.1816 83.0434 47.4034 85.9565 53.1224 85.9565C60.2176 85.9565 63.9168 81.9511 63.9168 76.9891C63.9168 72.0272 60.0963 69.9348 54.6385 68.5L46.5731 66.288C32.686 62.7609 30.2603 54.5109 30.2603 48.9511C30.2603 37.6522 40.3269 30 52.2128 30C63.0791 30 71.7153 36.0459 73.117 46.2192C73.3414 47.8483 71.9864 49.1902 70.3457 49.1902H64.9468C63.3062 49.1902 62.0337 47.8214 61.5174 46.2604C60.2962 42.5677 56.7279 40.1033 51.9096 40.1033C45.906 40.1033 41.7823 43.8098 41.7823 48.8315C41.7823 53.8533 42.3281 54.2717 49.7871 56.2446L57.4887 58.4565C67.6159 61.2065 75.4388 66.4076 75.4388 76.5706C75.4388 86.7337 65.5541 96 52.8799 96C41.3856 96 31.7367 88.8212 30.0398 79.4134Z"
              fill="white"
            ></path>
            <path
              d="M101.721 39.6653C90.4129 50.8128 89.3326 67.7455 97.6187 80.3765C98.5899 81.8569 100.685 81.97 101.949 80.7234L105.964 76.7652C107.009 75.7355 107.117 74.1171 106.372 72.8594C101.498 64.6304 102.015 54.3398 109.225 47.2321C116.438 40.1209 127.029 39.4716 135.429 44.235C136.705 44.9587 138.339 44.8494 139.38 43.8232L143.369 39.8908C144.634 38.6441 144.519 36.5789 143.017 35.6215C130.205 27.4529 113.028 28.5178 101.721 39.6653Z"
              fill="white"
            ></path>
            <g filter="url(#filter1_i_1649_18)">
              <path
                d="M144.864 49.1805C143.82 50.21 143.712 51.8277 144.452 53.0875C149.342 61.4102 148.604 71.905 141.428 78.9792C134.257 86.0486 123.748 86.6043 115.376 81.7665C114.098 81.0284 112.452 81.1327 111.405 82.1648L107.392 86.121C106.13 87.365 106.241 89.4251 107.737 90.3848C120.554 98.6094 137.757 97.4787 149.061 86.3347C160.365 75.1906 161.512 58.2312 153.169 45.5961C152.196 44.1217 150.106 44.0124 148.844 45.2564L144.864 49.1805Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
            </g>
            <path
              d="M227.735 49.1434C226.692 50.1739 226.584 51.793 227.322 53.0545C232.195 61.3812 231.445 71.8887 224.27 78.9798C217.099 86.0659 206.603 86.6353 198.247 81.8027C196.971 81.0648 195.327 81.1694 194.282 82.2025L190.264 86.1733C189.003 87.419 189.114 89.4821 190.609 90.4423C203.4 98.6586 220.581 97.505 231.884 86.335C243.187 75.165 244.355 58.1859 236.04 45.5459C235.069 44.0688 232.981 43.959 231.72 45.2048L227.735 49.1434ZM184.659 39.6659C173.352 50.8394 172.252 67.7915 180.509 80.4276C181.478 81.9108 183.571 82.0243 184.835 80.7759L188.855 76.8032C189.898 75.7724 190.006 74.1526 189.263 72.8933C184.406 64.6604 184.935 54.3574 192.145 47.233C199.358 40.1048 209.935 39.4417 218.319 44.1998C219.593 44.9233 221.225 44.8137 222.265 43.7865L226.259 39.8395C227.522 38.5911 227.407 36.5228 225.906 35.565C213.12 27.4047 195.966 28.4925 184.659 39.6659Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_d_1649_18"
              x="0"
              y="0"
              width="340"
              height="126"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset></feOffset>
              <feGaussianBlur stdDeviation="15"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1649_18"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1649_18"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter1_i_1649_18"
              x="106.523"
              y="44.3999"
              width="52.0917"
              height="51.3532"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset></feOffset>
              <feGaussianBlur stdDeviation="5"></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1649_18"
              ></feBlend>
            </filter>
          </defs>
        </svg>
        <p className="mt-2 text-white font-bold text-center">
          Use this AI to fastrack your web3 progress
        </p>
      </div>
      <div className="w-full grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col justify-start items-start p-2 rounded-md w-full h-full gap-y-1 text-white font-medium text-lg bg-gradient-to-r from-transparent to-[hsla(349,67%,51%)] transition-all duration-500 ease-in-out shadow-gray-400 shadow-sm cursor-pointer hover:shadow-none">
          <p>🤨</p>
          <p>What is Solana?</p>
        </div>
        <div className="flex flex-col justify-start items-start p-2 rounded-md w-full h-full gap-y-1 text-white font-medium text-lg bg-gradient-to-r from-transparent to-[hsla(349,67%,51%)] transition-all duration-500 ease-in-out shadow-gray-400 shadow-sm cursor-pointer hover:shadow-none">
          <p>⁉</p>
          <p>What is SOON?</p>
        </div>
        <div className="flex flex-col justify-start items-start p-2 rounded-md w-full h-full gap-y-1 text-white font-medium text-lg bg-gradient-to-r from-transparent to-[hsla(349,67%,51%)] transition-all duration-500 ease-in-out shadow-gray-400 shadow-sm cursor-pointer hover:shadow-none">
          <p>🛠️</p>
          <p>Suggest me some cool project ideas to build with the SOON SDK</p>
        </div>
        <div className="flex flex-col justify-start items-start p-2 rounded-md w-full h-full gap-y-1 text-white font-medium text-lg bg-gradient-to-r from-transparent to-[hsla(349,67%,51%)] transition-all duration-500 ease-in-out shadow-gray-400 shadow-sm cursor-pointer hover:shadow-none">
          <p>💭</p>
          <p>How do I add a wallet connection functionality in my app?</p>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
