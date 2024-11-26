"use client";
import Navbar from "@/components/Navbar";
import StarsBg from "@/components/StarsBg";
import Suggestions from "@/components/Suggestions";
import React, { useState } from "react";

const ChatPage = () => {
  const [textAreaHeight, setTextAreaHeight] = useState("40px");

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const lines = e.target.value.split("\n").length;
    if (lines >= 2) {
      setTextAreaHeight("60px"); // Adjust height for 2 lines
    } else {
      setTextAreaHeight("40px"); // Reset height for any other number of lines
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col justify-start items-start p-8 pt-16 bg-black">
      <div className="absolute top-[-20px] w-screen left-0 z-[90]">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen">
        <StarsBg />
      </div>
      <div className="shadow-md rounded-md w-full h-full overflow-hidden backdrop-blur-sm relative z-50 p-3 flex flex-col justify-start items-start">
        <div className="w-full h-[calc(100%-60px)]">
          {/* TODO: Create a state called 'stage' and render this component conditionally */}
          <Suggestions/>
        </div>
        <div className="absolute bottom-3 left-0 w-full p-3 flex flex-row justify-between items-center gap-x-2">
          <textarea
            className="flex-1 rounded-md bg-black shadow-sm shadow-gray-50 border border-solid border-gray-600 resize-none overflow-auto p-2 text-white focus:border-white focus:outline-none placeholder:text-white/80"
            placeholder="Ask anything about building with web3"
            style={{ height: textAreaHeight }}
            onChange={handleTextAreaChange}
          />
          <button
            style={{ height: textAreaHeight }}
            className="bg-white px-3 rounded-md text-black font-bold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
