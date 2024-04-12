import { log } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import * as OrderService from './orderService' ;

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
    const newMenuItem = await OrderService.createOrder(nam, price)
    return newMenuItem;
    // respond with the created review
    
};