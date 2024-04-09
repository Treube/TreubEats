import prisma from '../Prisma'
import * as userService from './mealService' ;

export async function createMeal( name: string, description: string, price: number ): Promise<any>{
    //have some requirements about user name and password 
    /**
     * ensure password is within some criteria
     */
    //Create the user using prisma client
    const newMeal= await prisma.meal.create({
        data: {
            name: name,
            description: description,
            price: price,
        },
    });
    return newMeal;
};

export async function editMeal( mealId: number, name: string, description: string, price: number ): Promise<any>{
    //have some requirements about user name and password 
    /**
     * ensure password is within some criteria
     */
    //Create the user using prisma client
    const updateMeal= await prisma.meal.update({
        where: {
            id: mealId
        },
        data: {
            name: name,
            description: description,
            price: price,
        },
    });
    return updateMeal;
};

// this will not be shown on the main website, only admin logins can see this
export async function deleteMeal( userId: number, mealId: number): Promise<any>{
    const deletedMeal = await prisma.meal.delete({
      where: {
        id: mealId
      },
    });
    return deletedMeal;
}