import React from "react";
import TopNavigation from "../Navigation/TopNavigation";
import "./style.css";
import Image from "next/image";
import { Button } from "antd";

const PlayerProfileLayout = () => {
  return (
    <div>
      <TopNavigation />
      <div>
        <div className="flex bg-[#2F2E2E] h-80 px-10">
          <div className="flex flex-col justify-center gap-[2px]  w-1/2">
            <header>
              <h1 className="text-white">Stats Card</h1>
            </header>
            <div className="flex text-white" id="stats">
              <div className="bg-[url('/svg/parallelogram-bg.svg')] w-48 h-12 bg-cover">
                <div className="flex flex-col text-center">
                  <span>PPG</span>
                  <span>10</span>
                </div>
              </div>
              <div className="bg-[url('/svg/parallelogram-bg.svg')] w-48 h-12 bg-cover">
                <div className="flex flex-col text-center">
                  <span>PPG</span>
                  <span>10</span>
                </div>
              </div>
              <div className="bg-[url('/svg/parallelogram-bg.svg')] w-48 h-12 bg-cover">
                <div className="flex flex-col text-center">
                  <span>PPG</span>
                  <span>10</span>
                </div>
              </div>
            </div>
            <div className="flex ml-[-30px] text-white" id="stats">
              <div className="bg-[url('/svg/parallelogram-bg.svg')] w-48 h-12 bg-cover flex justify-center items-center">
                <div className="flex flex-col text-center">
                  <span className=" font-thin text-xs">RPG</span>
                  <span>10</span>
                </div>
              </div>
              <div className="bg-[url('/svg/parallelogram-bg.svg')] w-48 h-12 bg-cover">
                <div className="flex flex-col text-center">
                  <span>PPG</span>
                  <span>10</span>
                </div>
              </div>
              <div className="bg-[url('/svg/parallelogram-bg.svg')] w-48 h-12 bg-cover">
                <div className="flex flex-col text-center">
                  <span>PPG</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-24 w-1/2">
            <div className="flex flex-col gap-8 justify-center">
              <header className="text-white text-right">
                <h1 className="text-2xl">Ja Morant</h1>
                <h2 className="text-xs">Free Agent</h2>
              </header>
              <div>
                <div className="flex gap-1">
                  <Button className="text-white bg-[#534D4D] border-none text-xs">
                    Add Friend
                  </Button>
                  <Button className="text-white bg-[#534D4D] border-none text-xs">
                    Message
                  </Button>
                </div>
              </div>
            </div>
            <Image
              src="/svg/profile.svg"
              alt="Profile"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-12 px-24 py-10">
        <div className="w-[506px] h-[523px] bg-white bg-opacity-20 rounded-[10px] border border-neutral-400 backdrop-blur-[30px] p-10">
          <div className="grid grid-cols-4 grid-rows-9 gap-2">
            <div className="col-span-2 row-span-3 bg-slate-500">1</div>
            <div className="col-span-2 row-span-6 col-start-3 bg-slate-500">
              3
            </div>
            <div className="col-span-2 row-span-4 col-start-1 row-start-6 bg-slate-500">
              6
            </div>
            <div className="col-span-2 row-span-3 col-start-3 row-start-7 bg-slate-500">
              7
            </div>
            <div className="col-span-2 row-span-2 col-start-1 row-start-4 bg-slate-500">
              8
            </div>
          </div>
        </div>
        <div className="w-[789px] h-[473px] bg-white bg-opacity-20 rounded-[10px] border border-neutral-400 backdrop-blur-[30px] flex gap-10 p-12">
          <div className="flex flex-col gap-2">
            <div className="w-[210px] h-[100px] bg-zinc-300 rounded-[20px] shadow-lg"></div>
            <div className="w-[210px] h-[100px] bg-zinc-300 rounded-[20px] shadow-lg"></div>
            <div className="w-[210px] h-[100px] bg-zinc-300 rounded-[20px] shadow-lg"></div>
          </div>
          <div className="w-[453px] h-[314px] bg-zinc-300 rounded-[20px] shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfileLayout;
