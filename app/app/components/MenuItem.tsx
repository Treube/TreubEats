import styles from "./styles/MenuItem.module.css";
import prisma from "@/backend/Prisma";
import Image from "next/image";
import { useState } from "react";

export default async function MenuItem(){
    const items = await prisma.menuItem.findMany();
    return (<div>
        {items.map((item) => item.id % 2 == 0 ? (
        
         <div key={item.id} className = {styles.menuRow}>
            <div className = {styles.menuImage}>
                1
            </div>
            <div className = {styles.menuDesc}>
                <li key = {item.name}>{item.name}</li>
                <hr></hr>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
        </div>
        
        )
       

:

        <div key={item.id} className = {styles.menuRow}>
            <div className = {styles.menuDesc}>
                <h1 className = "text-white text-5xl text-center">{item.name}</h1>
                <hr className= {styles.descBar}></hr>
                <p className = {styles.descStyle}>{item.description}</p>
                <p className = {styles.descPrice}>{item.price}</p>
            </div>

            <div className = {styles.menuImage}>
                <Image src= "/TreubeFood.jpg" width={0} height={0} sizes="100vw" style={{ width: '450px', height: '400px' }} className={styles.menuImage}  alt = {item.id.toString()}></Image>
            </div>
        </div>
     )}
    </div>)

}
