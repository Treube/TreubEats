import { log } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import * as MealService from './orderItemService' ;

export const createOrderItem= async(req: NextRequest , res: NextResponse) => {
    // ensure that body has a name and items
    // retrieve name and items from req
    const request_data = await req.formData();
    const mealId = Number(request_data.get("mealId") as string);
    const orderId = Number(request_data.get("orderId") as string);
    const quantity = parseFloat(request_data.get("quantity") as string);
  

    if (!mealId || !orderId || quantity ) {
         console.log("AHH I AM MISSING ONEE!!!");
         return NextResponse.error();
      }
      console.log("IN controller");
    const newMenuItem = await MealService.createOrderItem(mealId, orderId, quantity);
    
    return newMenuItem;
    // respond with the created review
    
};