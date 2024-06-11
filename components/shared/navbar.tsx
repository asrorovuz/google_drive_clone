// 'use client'
import { auth } from "@clerk/nextjs/server";
import  Link  from "next/link";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "./mode-toggles";
import { HelpCircle, Settings } from "lucide-react";
import UserBox from "./user-box";
import { AvatarIcon } from "@radix-ui/react-icons";

const Navbar = () => {

  const  userId  = auth().userId;

  return (
    <div className="h-[10vh] fixed top-0 left-0 right-0 z-30 bg-[#f6f9fc] dark:bg-[#1f1f1f] box-border border-b">
      <div className="flex items-center justify-between my-4 mx-6">
        <Link href="/">
          <div className="flex items-center bg-transparent">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="pl-2 text-[22px] opacity-75">Drive</span>
          </div>
        </Link>

        <div className="flex items-center space-x-2">
          <ModeToggle/>
          <div className="p-2 hover:bg-secondary rounded-full transition" role="button">
            <HelpCircle className="w-5 h-5"/>
          </div>
          <div className="p-2 hover:bg-secondary rounded-full transition" role="button">
            <Settings className="w-5 h-5"/>
          </div>
          {
            userId ? (
              <UserBox/>
            ) : (
              <div className="cursor-pointer"><AvatarIcon className="w-5 h-5"/></div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
