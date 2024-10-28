import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

import { Nemh } from "../icons/Nemh";
import { Home } from "../icons/Home";
export const All = () => {
  return (
    <div className="h-[1128px] w-full bg-slate-100 px-20 py-10  ">
      <div className=" w-screen   gap-10 flex   bg-slate-100 ">
        <div className="w-[282px] h-auto  bg-white px-4 py-4 flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="text-[#1F2937]">Records</div>
            <div className="w-[250px] h-[32px] bg-blue-700 rounded-3xl flex gap-2 justify-center items-center">
              <div>
                <Nemh />
              </div>
              <div className="text-white font-bold">add</div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="text-[#A3A3A3] w-[250px] h-[32px] rounded-lg border border-[#F3F4F6] bg-[#F3F4F6] pl-2"
          />
          <div className="flex flex-col gap-4">
            <div className="text-[#1F2937]">Type</div>
            <div>
              <div className="flex gap-2">
                <div>
                  <input className="w-4 h-4 " type="checkbox" />
                </div>
                <div className="text-[#1F2937]">All</div>
              </div>
              <div className=" flex gap-2">
                <div>
                  <input className="w-4 h-4 " type="checkbox" />
                </div>
                <div className="text-[#1F2937]">Income</div>
              </div>
              <div className=" flex gap-2">
                <div>
                  <input className="w-4 h-4 " type="checkbox" />
                </div>
                <div className="text-[#1F2937]">Expense</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="text-[#1F2937]">Category</div>
              <div className="text-[#1F2937]">clear</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className=" flex gap-2">
                <div>
                  <input className="w-4 h-4 " type="checkbox" />
                </div>
                <div className="text-[#1F2937]">Expense</div>
              </div>
              <div className="flex gap-2">
                <div className="text-blue-800 font-extrabold text-[16px]">+</div>
                <div className="text-[#1F2937]">Add Category</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[894px]">
          <div className=" w-[894px] flex justify-between">
            <div className="flex items-center gap-4">
              <button className="w-[32px] h-[32px] bg-[#E5E7EB] rounded-md flex justify-center items-center">
                <BiChevronLeft className="text-black w-7 h-7" />
              </button>
              <div className="text-black">Last 30 Days</div>
              <button className="w-[32px] h-[32px] bg-[#E5E7EB] rounded-md flex justify-center items-center">
                <BiChevronRight className="text-black w-7 h-7" />
              </button>
            </div>
            <div className="w-[180px] h-[48px] bg-white rounded-lg flex gap-10 justify-center items-center ">
              <div className="text-black text-[16px]">Newest first</div>
              <div>
                <BiCaretDown className="text-black w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="text-black text-[16px] font-bold">Today</div>
              <div className="h-[64px] w-[894px] bg-white rounded-xl flex items-center">
                <div className="flex justify-between px-6 w-screen items-center ">
                  <div className="flex gap-4 items-center ">
                    <div>
                      <div className="w-10 h-10 bg-[#0166FF] rounded-full flex items-center justify-center">
                        <Home />
                      </div>
                    </div>
                    <div>
                      <div className="text-black text-[16px]">
                        Lending & Renting
                      </div>
                      <div className="text-[#6B7280]">14:00</div>
                    </div>
                  </div>
                  <div className="text-[#23E01F] text-[16px] font-extrabold">
                    + 1,000
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div>
              <div className="text-black text-[16px] font-bold">Yesterday</div>
              <div className="h-[64px] w-[894px] bg-white rounded-xl flex items-center">
                <div className="flex justify-between px-6 w-screen items-center ">
                  <div className="flex gap-4 items-center ">
                    <div>
                      <div className="w-10 h-10 bg-[#0166FF] rounded-full flex items-center justify-center">
                        <Home />
                      </div>
                    </div>
                    <div>
                      <div className="text-black text-[16px]">
                        Lending & Renting
                      </div>
                      <div className="text-[#6B7280]">14:00</div>
                    </div>
                  </div>
                  <div className="text-[#23E01F] text-[16px] font-extrabold">
                    + 2,000
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
