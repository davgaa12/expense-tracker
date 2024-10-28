"use client";
import { Ft } from "@/app/components/icons/Ft";
import { Nemh } from "@/app/components/icons/Nemh";
import Link from "next/link";
import { BsXLg } from "react-icons/bs";

export const Header = () => {
  return (
    <div className="w-full h-[72px] flex items-center justify-between px-20 bg-white ">
      <div className="w-[225px] flex justify-between">
        <div>
          <Ft />
        </div>
        <Link className="text-[#0F172A]" href={"/dashboard"}>
          Dashboard
        </Link>

        <Link className="text-[#0F172A]" href={"/records"}>
          Records
        </Link>
      </div>
      <div className="flex w-[163px] justify-between">
        <div className="w-[99px] h-[32px] bg-blue-700 rounded-3xl flex gap-2 justify-center items-center">
          <div>
            <Nemh />
          </div>
          <button
            className="text-white font-bold"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Record
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-[792px] h-[512px] flex flex-col  ">
              <div className="h-[68px] w-[792px] flex items-center justify-between px-4 ">
                <div className="text-[20px]">Add Record</div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">
                      <BsXLg className="w-5 h-5 font-bold" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="w-[248px] h-[40px] rounded-3xl bg-[#F3F4F6] ">
                  <button></button>
                </div>

                <div>
                  <div className="h-[76px] w-[348px] border-[#D1D5DB] bg-[#F3F4F6] rounded-lg flex flex-col justify-center gap-2 pl-4 ">
                    <p>Amount</p>
                    <input
                      type="number"
                      placeholder="₮ 000.00"
                      className="bg-[#F3F4F6]"
                    />
                  </div>
                  <div>
                    <p>Category</p>
                    <select className="select w-full max-w-xs">
                 \
                    
                    </select>
                  </div>
                  <div className="flex"> 
                    <div>
                      <p>date</p>
                      <select className="select w-full max-w-xs">
                      
                      </select>
                    </div>
                    <div>
                      <p>time</p>
                      <select className="select w-full max-w-xs">
                       
                      </select>
                    </div>
                  </div>
                  <div className="w-[248px] h-[40px] rounded-3xl bg-[#0166FF] ">
                 add record
                </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>
        <div></div>
      </div>
    </div>
  );
};
