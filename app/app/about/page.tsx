import Image from "next/image";

import styles from "./LandingPage.module.css";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import prisma from "@/backend/Prisma";
import OrderForm  from "../components/orderForm";




export default async function aboutPage() {

  return (
    <div>
        <hr></hr>
        <h1 className = "text-black text-3xl text-center space-y-10">TreubEats Founder & CEO</h1>
        <br></br>

        <p className = "text-black text-md">TreubEats is a self-made company providing Afro-centric food to the students of the RPI campus. After hearing tireless complaints regarding the dining hall food and the desire to just have a home cooked meal, TreubEats CEO and founder Reuben Abu started to make and deliver home cooked meals to the students of RPI. The phrase “Tap In” inspires others known to Reuben and his journey to endulge in a wonderful meal experience.</p>
    </div>
  )}