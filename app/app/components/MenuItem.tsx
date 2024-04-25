import styles from "./styles/MenuItem.module.css";
import prisma from "@/backend/Prisma";
import Image from "next/image";
import { useState } from "react";
import Navigation from "./NavBar";


export default async function MenuItem(){
    const items = await prisma.meal.findMany(); 
    return (
        
        <div>
        
        {items.map((item) => item.id % 2 == 0 ? (
        
        <div key={item.id} className = {styles.menuRow}>
        <div className = {styles.menuImage}>
            <Image src= "/curryChicken.jpeg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} className={styles.menuImage}  alt = {item.id.toString()}></Image>
        </div>
        <div className = {styles.menuDesc}>
            <h1 className = " text-orange text-5xl text-center ">{item.name}</h1>
            <br></br>
            <h2 className = "text-center text-xl"></h2>
            <center>
            <hr className= {styles.descBar}></hr>
            </center>
            <p className = {styles.descStyle}>{item.description}</p>
            <p className = {styles.descPrice}>Price: ${item.price}</p>
        </div>

        
    </div>
        
        )
       

:

        <div key={item.id} className = {styles.menuRow}>
            <div className = {styles.menuDesc}>
                <h1 className = "text-orange text-5xl text-center ">{item.name}</h1>
                <br></br>
                <h2 className = "text-center text-md"></h2>
                <hr className= {styles.descBar}></hr>
                <p className = {styles.descStyle}>{item.description}</p>
                <p className = {styles.descPrice}>Price: ${item.price}</p>
            </div>

            <div className = {styles.menuImage}>
                <Image src= "/cajunPhoto.jpeg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} className={styles.menuImage}  alt = {item.id.toString()}></Image>
            </div>
        </div>
     )}
    </div>)

}
