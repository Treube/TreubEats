import { log } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import * as MealService from './mealService' ;

export const createMeal= async(req: NextRequest , res: NextResponse) => {
    // ensure that body has a name and description and price
    // retrieve name and items from req
    const request_data = await req.formData();
    const name = request_data.get("name") as string;
    const description = request_data.get("description") as string;
    const price = parseFloat(request_data.get("price") as string);

    if (!name || !price ) {
      console.log(name,price);
      return NextResponse.error();
    }
    const newMenuItem = await MealService.createMeal(name, description, price)
    return newMenuItem;
    // respond with the created meal
};

export const editMeal= async(req: NextRequest , res: NextResponse) => {
  // ensure that body has a name and description and price
  // retrieve name and items from req
  const request_data = await req.formData();
  const name = request_data.get("name") as string;
  const description = request_data.get("description") as string;
  const price = parseFloat(request_data.get("price") as string);
  const id = parseInt(request_data.get("id") as string);

  if (!id && (!name || !price || !description )) {
    console.log(id,name,description,price);
    return NextResponse.error();
  }
  const editMeal = await MealService.editMeal(id, name, description, price)
  return editMeal;
  // respond with the created meal
};

export const deleteMeal= async(req: NextRequest , res: NextResponse) => {
  // ensure that body has a name and description and price
  // retrieve name and items from req
  const request_data = await req.formData();
  const userId = parseInt(request_data.get("userId") as string);
  const mealId = parseInt(request_data.get("mealId") as string);

  if (!userId && !mealId) {
    console.log(userId, mealId);
    return NextResponse.error();  
  }
  const deletedMeal = await MealService.deleteMeal(mealId, userId);
  return deletedMeal;
  // respond with the created meal
};