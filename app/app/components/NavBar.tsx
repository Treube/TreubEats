"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Image from "next/image";
import { UserButton, auth, currentUser, SignInButton, SignUpButton} from "@clerk/nextjs";
import {useUser} from "@clerk/clerk-react"
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const {user, isLoaded} = useUser();
  return (
    <Navbar position = "sticky">
      <NavbarBrand>
      <Image src= "/TreubeLogo.png" width = {90} height = {90} className="logo" alt = "TreubeLogo"></Image>
        <p className="font-bold text-inherit">TreubeEats</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Order
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      {user && (
      <>
        <NavbarContent justify="end">

        <NavbarItem className="hidden lg:flex">
            <UserButton />
        </NavbarItem>
        </NavbarContent>
      </>)}
      {!user && (
      <>
        <NavbarContent justify="end">

        <NavbarItem className="hidden lg:flex">
          <SignUpButton>
            <Button >Sign Up</Button>
          </SignUpButton>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SignInButton>
            <Button >Login</Button>
          </SignInButton>
        </NavbarItem>
        </NavbarContent>
      </>)}
      
    </Navbar>
  );
}
