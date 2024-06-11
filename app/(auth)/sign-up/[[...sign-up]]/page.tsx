"use client"

import { SignUp } from "@clerk/nextjs";
import {dark, shadesOfPurple} from "@clerk/themes"
import {useTheme} from "next-themes"

export default function Page() {
  const {resolvedTheme} = useTheme()
  return <SignUp path="/sign-in" appearance={{baseTheme: resolvedTheme === "dark" ? dark : shadesOfPurple}}/>;
}