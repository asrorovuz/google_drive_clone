import Navbar from "@/components/shared/navbar";
import Saidbar from "@/components/shared/saidbar";
import { ChildProps } from "@/types";
import React from "react";

const AuthLayout = ({ children }: ChildProps) => {
  return (
    <div className="relative">
      <div className = "absolute inset-0 z-40 h-screen bg-black/50 "/>
      <Navbar />
      <Saidbar/>
      <main className="w-full h-[90vh] flex items-center justify-center z-50 relative">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
