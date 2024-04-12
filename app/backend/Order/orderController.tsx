import { log } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import * as OrderService from './orderService' ;

export const createOrder= async(req: NextRequest , res: NextResponse) => {
    // ensure that body has a name and items
    // retrieve name and items from req
    const request_data = await req.formData();
    const userId = request_data.get("userId") as string;

  

    if (!userId ) {
         console.log(userId);
         return NextResponse.error();
      }
      console.log("IN controller");
    const newMenuItem = await OrderService.createOrder(userId)
    return newMenuItem;
    // respond with the created review
    
};