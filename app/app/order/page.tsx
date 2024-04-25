import Image from "next/image";

import styles from "./LandingPage.module.css";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import prisma from "@/backend/Prisma";
import OrderForm  from "../components/orderForm";




export default async function orderPage() {

  return (
    <OrderForm />
  )}