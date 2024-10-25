"use client";
import { Home } from "@/app/components/icons/Home";
import { BiSolidChevronUp } from "react-icons/bi";
import { BiSolidChevronDown } from "react-icons/bi";
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // Энд нэмсэн
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Бүртгэх элементүүд
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // Энд нэмсэн
  Title,
  Tooltip,
  Legend
);


export const Dashboard = () => {
  // Bar графикийн өгөгдөл
  const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Bar графикийн тохиргоо
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart Example",
      },
    },
  };

  // Doughnut графикийн өгөгдөл
  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Votes",
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Doughnut графикийн тохиргоо
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doughnut Chart Example",
      },
    },
  };
  return (
    <div className="h-[1128px] w-full bg-slate-100 px-20 py-10 flex justify-center ">
      <div className=" w-[1200px]  h-[1052px] gap-10 flex flex-col py-4 bg-slate-100 ">
        <div className="flex justify-between">
          <div className="w-[384px] h-[216px] rounded-xl border  bg-white "></div>
          <div className="w-[384px] h-[216px] rounded-xl border bg-white ">
            <div className=" h-[56px]  gap-2 flex items-center pl-6">
              <div className="h-2 w-2 rounded-[50%] bg-green-700"></div>
              <div className="text-black text-[16px]">Your Income...</div>
            </div>
            <div className="flex flex-col gap-4 pl-6 justify-center">
              <div>
                <div className="text-[36px] text-black">1,200,000₮</div>
                <div className="text-[#64748B] text-[18px]">
                  Your Income Amount
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-green-700 rounded-[50%] flex items-center justify-center">
                  <BiSolidChevronUp />
                </div>
                <div className="text-black text-[18px]">
                  32% from last month
                </div>
              </div>
            </div>
          </div>
          <div className="w-[384px] h-[216px] rounded-xl border  bg-white ">
            <div className=" h-[56px]  gap-2 flex items-center pl-6">
              <div className="h-2 w-2 rounded-[50%] bg-blue-700"></div>
              <div className="text-black text-[16px]">Your Income</div>
            </div>
            <div className="flex flex-col gap-4 pl-6 justify-center">
              <div>
                <div className="text-[36px] text-black">-1,200,000₮</div>
                <div className="text-[#64748B] text-[18px]">
                  Your expence Amount
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 bg-blue-700 rounded-[50%] flex items-center justify-center">
                  <BiSolidChevronDown />
                </div>
                <div className="text-black text-[18px]">
                  32% from last month
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[588px] h-[284px] rounded-xl border  bg-white  dataCart customerCart">
            <div className="h-[56px] flex items-center pl-7 text-black border border-b-black">
              Income - Expense
            </div>
            <div
              className="h-[226px]
                w-[588px] px-5 py-5"
            >
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
          <div className="w-[588px] h-[284px] rounded-xl border  bg-white  dataCart customerCart">
            <div className="h-[56px] flex items-center pl-7 text-black border border-b-black">
              Income - Expense
            </div>
            <div
              className="h-[226px]
                w-[588px] px-5 py-5"
            >
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>
        <div className="h-[456px] w-full bg-white rounded-2xl ">
          <div className="h-[56px] w-full flex items-center ps-5 text-[#0F172A]">
            Last Records
          </div>
          <div className="h-[80px] w-full bg-white flex items-center justify-between gap-3 px-5 border border-y-black">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#0166FF] rounded-full flex items-center justify-center">
                <Home />
              </div>
              <div>
                <div className="text-[#0F172A]">Lending & Renting</div>
                <div className="#6B7280">3 hours ago</div>
              </div>
            </div>
            <div>- 1,000₮</div>
          </div>
        </div>
      </div>
    </div>
  );
};
