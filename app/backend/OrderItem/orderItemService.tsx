import { Meal,Order } from '@prisma/client';
import prisma from '../Prisma'


export async function createOrderItem( mealId: number, quantity: number, meal: Meal , order : Order): Promise<any>{
    //have some requirements about user name and password 
    /**
     * ensure password is within some criteria
     */
    //Create the user using prisma client
    console.log("I am about to print new meal");
    const newOrderItem = await prisma.orderItem.create({
        data: {
            quantity: quantity,
            meal : meal,
            order : order,
            },
        }
    );
    console.log("I am about to print new neal");
    console.log(newOrderItem);
    return newOrderItem;
};

