import { MenuItem } from '@prisma/client';
import prisma from '../Prisma'

export async function createMenuSection( name: string, items: MenuItem[] ): Promise<any>{
    const newMenuSection = await prisma.menuSection.create({
        data: {
            name: name,
            MenuItem: items
        },
    });
    return newMenuSection;
}

export async function updateMenuSection( sectionId: number, newname: string, newitems: MenuItem[] ): Promise<any>{
    const updateMenuSection = await prisma.menuSection.update({
      where: {
        id: sectionId
      },
      data: {
        name: newname,
        MenuItem: newitems,
      },
    });
    return updateMenuSection;
}

export async function deleteMenuSection( userId: number, sectionId: number): Promise<any>{
    const updateMenuSection = await prisma.menuSection.delete({
      where: {
        id: sectionId
      },
    });
    return updateMenuSection
}