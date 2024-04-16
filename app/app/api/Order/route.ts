import * as orderController from '../../../backend/Order/orderController'
import { NextRequest, NextResponse } from 'next/server';

export async function POST (
    req: NextRequest,
    res: NextResponse ) {
        //check the body to make sure
        console.log("we are here starting now!!!");
        orderController.createOrder(req ,res);
  
        return NextResponse.json({message: "we are here!"});

}

export async function GET (
    req: NextRequest,
    res: NextResponse ) {
        //check the body to make sure
        console.log("we are here starting now!!!");
        orderController.createOrder(req ,res);
  
        return NextResponse.json({message: "we are here!"});

}