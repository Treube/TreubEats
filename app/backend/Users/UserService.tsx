import prisma from '../Prisma'

export async function createUser( email: string, username: string, password:string): Promise<any>{
    //have some requirements about user name and password 
    /**
     * ensure password is within some criteria
     */

    //Create the user using prisma client
    const newUser= await prisma.user.create({
        data: {
            email,
            username: username,
            },
        }
    );
    console.log(newUser);
    
}

