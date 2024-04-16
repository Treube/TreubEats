import * as mealController from '../../../backend/Meals/mealController'
import { NextRequest, NextResponse } from 'next/server';

export async function POST (
    req: NextRequest,
    res: NextResponse ) {
        //check the body to make sure
        mealController.createMeal(req ,res);
        return NextResponse.json({message: "we are here!"});

}

export async function GET(
    req: NextRequest,
    res: NextResponse ) {
        //check the body to make sure
        console.log("we are here starting now!!!");
        const data = mealController.getAllMeals(req ,res);
        if (!data){
            return NextResponse.json({message: "we are here getting all meals!"});
        }

       
        return NextResponse.json({messages: data});
}

