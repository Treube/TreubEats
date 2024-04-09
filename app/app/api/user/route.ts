
import * as userController from '../../../backend/Users/userController'
import { NextRequest, NextResponse } from 'next/server';

//function handles the user API routes
export async function POST (
    req: NextRequest,
    res: NextResponse ) {
        //check the body to make sure
        userController.createUser(req ,res);
        console.log("we are here!!!!!");
        return NextResponse.json({message: "we are here!!!!"});

}

export async function GET (
    req: NextRequest,
    context: any) {
        //check the body to make sure
        console.log("we are here!!!!!");
        return NextResponse.json({message: "we are here!!!!"});

}