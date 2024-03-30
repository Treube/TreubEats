import prisma from '../Prisma'

export async function createMenuItem( name: string, description: string, price: number, sectionId: number): Promise<any>{
    const newMenuItem = await prisma.menuItem.create({
        data: {
            name: name,
            description: description,
            price: price,
            sectionId: sectionId
        },
    });
    return newMenuItem;
}