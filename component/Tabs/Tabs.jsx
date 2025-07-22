"use client";

import { useState } from "react";

export default function Tabs() {
  const tabs = ["Tab One", "Tab Two", "Tab Three"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="relative bg-gray-100 rounded-full overflow-hidden border flex">
        {/* Sliding background bar */}
        <div
          className={`absolute top-0 left-0 h-full w-1/3 bg-blue-500 rounded-full transition-transform duration-300 ease-in-out`}
          style={{
            transform: `translateX(${activeTab * 100}%)`,
          }}
        />

        {/* Tabs */}
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              activeTab === index ? "text-white" : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow text-gray-700 transition duration-300">
        {activeTab === 0 && "This is the content of Tab One."}
        {activeTab === 1 && "Here is what you see in Tab Two."}
        {activeTab === 2 && "Welcome to Tab Three’s content."}
      </div>
    </div>
  );
}
