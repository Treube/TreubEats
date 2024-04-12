import { Meal,Order } from '@prisma/client';
import prisma from '../Prisma'


export async function createOrder(userId: String): Promise<any>{
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

