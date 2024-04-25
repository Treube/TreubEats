import { NextResponse } from 'next/server';
import prisma from '../Prisma'
import * as userService from './mealService' ;

export async function createMeal( name: string, price: number): Promise<any>{
    //have some requirements about user name and password 
    /**
     * ensure password is within some criteria
     */
    //Create the user using prisma client
    console.log("I am about to print new neal");
    const newMeal= await prisma.meal.create({
        data: {
            name:name,
            description: "this is an amazing meal",
            price: price,
            },
        }
    );
    console.log("I am about to print new neal");
    console.log(newMeal);
    return newMeal;
};

export async function getAllMeals(){

     const Allmeals = await prisma.meal.findMany();
     if(!Allmeals){
        console.log("Cannot find any meals")
        return  NextResponse.error();
     }
     
     return Allmeals;

}
