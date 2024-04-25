import { log } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import * as MealService from './mealService' ;

export const createMeal= async(req: NextRequest , res: NextResponse) => {
    // ensure that body has a name and items
    // retrieve name and items from req
    const request_data = await req.formData();
    const name = request_data.get("name") as string;
    const price = parseFloat(request_data.get("price") as string);
  

    if (!name || !price ) {
         console.log(name,price);
         return NextResponse.error();
      }
      console.log("IN controller");
    const newMenuItem = await MealService.createMeal(name, price)
    return newMenuItem;
    // respond with the created review
    
};

export const getAllMeals= async(req: NextRequest , res: NextResponse) => {
  // ensure that body has a name and items
  // retrieve name and items from req
  //const request_data = await req.formData();
  console.log("IN controller");
  const allMeals= await MealService.getAllMeals();
  console.log("allMeals:",allMeals )

  return allMeals;
  // respond with the created review
  
};