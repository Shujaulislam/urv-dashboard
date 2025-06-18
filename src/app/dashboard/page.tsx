"use client"

import LineChart from "@/components/charts/LineChart";
import Card from "@/components/ui/Card";
import { ActivitySquare, UserRound } from "lucide-react";
import React from "react";

function page() {
  return (
    <main className="p-4 md:p-6 space-y-6">
    <section className="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
      <Card 
        title="Total Members"
        value="1,234"
        icon={<UserRound className="text-2xl text-blue-500" />}
        growth={{rate: "12%", positive: true}}
        />

      <Card 
        title="Online Users"
        value="150"
        icon={<ActivitySquare className="text-2xl text-green-500" />}
        // growth={{rate: "12%", positive: true}}
        />
{/* this page contains a hard coded and reusable component based card to suit whatever is required */}

      <Card 
        title="Active Roles"
        value="6"
        // icon={<UserRound className="text-2xl text-green-500" />}
        // growth={{rate: "12%", positive: true}}
        />
      
      {/* Below is a hard coded card design and approach */}

        {/* <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow 
        flex flex-col items-start border border-gray-200">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Online Users
          </span>
          <span className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
            150
          </span>
        </div> */}
        
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow 
      flex flex-col items-start border border-gray-200">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Messages Today
        </span>
        <span className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
          5,983
        </span>
      </div>
    </section>

      {/* Chart */}
      <section className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-white mb-4">
          Member Growth Over Time
        </h2>
        <div className="h-72">
          <LineChart />
        </div>
      </section>
    </main>
  );
}

export default page;
