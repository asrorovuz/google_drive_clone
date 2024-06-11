import Navbar from "@/components/shared/navbar";
import Saidbar from "@/components/shared/saidbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-min-[100vh] relative">
      <Navbar />
      <Saidbar />
      <main className="h-[90vh] relative top-[10vh] ml-72 p-4 bg-[#f6f9fc] dark:bg-[#1f1f1f]">
        <div className="h-[85vh] rounded-md ml-4 bg-white dark:bg-black p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
