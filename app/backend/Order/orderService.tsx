import { Meal,Order, OrderItem } from '@prisma/client';
import prisma from '../Prisma'
import { NextRequest, NextResponse } from 'next/server';


export async function createOrder(userId: string): Promise<any>{
    //have some requirements about user name and password 
    /**
     * ensure password is within some criteria
     */
    //Create the user using prisma client
    console.log("I am about to print new meal");
    const newOrder = await prisma.order.create({
        data: {
             userId: userId,
            },
        }
    );
    console.log("I am about to print new neal");
    console.log(newOrder);
    return newOrder;
};


export async function addOrderItem(orderid: number,item: OrderItem): Promise<any>{
    //have some requirements about user name and password 
    /**
     * ensure password is within some criteria
     */
    //Create the user using prisma client
    const found_order = await prisma.order.findUnique({
        where:{
            id: orderid,
        }
      }
    );

    if(!found_order){
        console.log("We cannot find the order!!!");
        return NextResponse.error();
    }
    
    found_order


};

