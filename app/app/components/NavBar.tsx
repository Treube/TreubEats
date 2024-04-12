import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";


export default function Navigation() {
  return (
    <Navbar>
      <NavbarBrand>
      <Image src= "/TreubeLogo.png" width = {90} height = {90} className="logo" alt = "TreubeLogo"></Image>
        <p className="font-bold text-inherit">TreubeEats</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="start">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
            <UserButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
