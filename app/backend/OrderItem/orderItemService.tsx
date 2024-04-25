import { Meal,Order } from '@prisma/client';
import prisma from '../Prisma'


export async function createOrderItem( mealId: number, orderid : number, quantity: number ): Promise<any>{

    console.log("I am about to print new meal");
    const newOrderItem = await prisma.orderItem.create({
        data: {
            quantity: quantity,
            mealId : mealId,
            orderId : orderid,
            },
        }
    );
    console.log("I am about to print new orderitem");
    // add it to the order cart 
    
    console.log(newOrderItem);
    return newOrderItem;
};

