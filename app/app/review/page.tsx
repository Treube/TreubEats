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
        <h1 className = "text-black text-3xl text-center space-y-10">Reviews!</h1>
        <br></br>

    </div>
  )}