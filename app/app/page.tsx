import Image from "next/image";
import ProductCard from "./components/ProductCard";
import styles from "./LandingPage.module.css";
import {LoginButton} from "./components/LogIn";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div>
    <div className = {styles.banner}>
      
      <Image src= "/TreubeLogo.png" width = {150} height = {150} className="logo" alt = "TreubeLogo"></Image>
      <div className = {styles.logo}>
        <SignInButton>
          <Button >Login</Button>
        </SignInButton>

        <SignUpButton>
          <Button >Sign Up</Button>
        </SignUpButton>
      </div>
      
      <hr className = {styles.bannerBar}></hr>
        <div className = {styles.menuLinks}>
          
          <a href = "/">Menu</a>
          <a href = "/">Order</a>
          <a href = "/">About</a>
          <a href = "/">Review</a>

        </div>
      </div>

      <div className = {styles.cookingVid}>
      <video loop autoPlay muted width = '100%' height = '100%'>
                            <source src={('/food.mp4')}/>
                        </video>
      </div>
      </div>

  );
}
