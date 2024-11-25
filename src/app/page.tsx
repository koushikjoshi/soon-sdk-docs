"use client";
import dynamic from "next/dynamic";
import StarsBg from "@/components/StarsBg";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Dynamic import for Scene component
const Scene = dynamic(
  () => import("@/components/Scene").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

export default function Home() {
  return (
    <div className="w-screen flex flex-col justify-start items-start overflow-x-hidden overflow-y-scroll">
      <Navbar/>
      <StarsBg />
      <Scene />
      <div className="absolute w-screen top-0 flex flex-col justify-start items-center">
        <img
          src={"https://soo.network/assets/hackathon-pc-CZsl__wL.png"}
          alt=""
          className="w-full h-auto max-md:w-auto max-md:h-[500px] object-cover pointer-events-none select-none"
        />
      </div>
      <div className="absolute top-[70%] w-screen flex flex-col justify-end items-center gap-y-5 p-7 z-20">
        <Link
          href={"/docs"}
          className="rounded-full px-5 py-2 bg-[hsla(349,67%,51%)] hover:bg-red-500 transition-all duration-300 text-white"
        >
          Explore the SDK →
        </Link>
        <Link
          href={"/chat"}
          className="rounded-full px-5 py-2 transition-all duration-300 text-white underline underline-offset-2 hover:text-yellow-50"
        >
          Chat/Brainstorm with our AI
        </Link>
      </div>
    </div>
  );
}
