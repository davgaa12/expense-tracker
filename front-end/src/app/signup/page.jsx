import { Ft } from "@/app/components/icons/Ft";

import Link from "next/link";
export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center   ">
      <div className="w-1/2 h-full bg-white flex items-center justify-center">
        <div className="flex flex-col gap-10 w-[384px] h-[426px]">
          <div className="flex justify-center gap-[10px]">
            <div>
              <Ft />
            </div>
            <div className="font-bold text-[#0F172A]">Geld</div>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="flex justify-center text-[24px] font-bold text-[#0F172A] ">
              Create Geld account
            </div>
            <div className="flex justify-center text-[#334155]">
              Sign up below to create your Wallet account
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="text-[#A3A3A3] w-[384px] h-[48px] rounded-lg border border-[#F3F4F6] bg-[#F3F4F6] pl-2"
            />
            <input
              type="text"
              placeholder="email"
              className="text-[#A3A3A3] w-[384px] h-[48px] rounded-lg border border-[#F3F4F6] bg-[#F3F4F6] pl-2"
            />
            <input
              type="password"
              placeholder="password"
              className="text-[#A3A3A3] w-[384px] h-[48px] rounded-lg border border-[#F3F4F6] bg-[#F3F4F6] pl-2"
            />
            <input
              type="password"
              placeholder="rece-password"
              className="text-[#A3A3A3] w-[384px] h-[48px] rounded-lg border border-[#F3F4F6] bg-[#F3F4F6] pl-2"
            />
            <div className=" flex justify-center items-center text-[20px] text-white w-[384px] h-[48px] rounded-3xl border border-blue-700 bg-blue-700">
              Log in
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <div className="text-[#0F172A]">Don’t have account?</div>

            <Link className="text-[#0166FF]" href={"/"}>
              Logn in
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-800"></div>
    </div>
  );
}
