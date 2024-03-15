import prisma from '../Prisma'

export async function createReview( userId: number, rating: number, description: string): Promise<any>{
    const newReview = await prisma.review.create({
        data: {
            userId : userId,
            rating: rating,
            description: description,
            likes: 0,
            dislikes: 0
        },
    });
    return newReview;
}