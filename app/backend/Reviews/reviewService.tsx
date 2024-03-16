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

export async function updateReview( userId: number, reviewId: number, newrating: number, newdescription: string): Promise<any>{
    const updateReview = await prisma.review.update({
      where: {
        id: reviewId
      },
      data: {
        rating: newrating,
        description: newdescription,
      },
    });
    return updateReview;
}

export async function deleteReview( userId: number, reviewId: number): Promise<any>{
    const updateReview = await prisma.review.delete({
      where: {
        id: reviewId
      },
    });
    return updateReview;
}

export async function likeReview( userId: number, reviewId: number): Promise<any>{
    const updateReview = await prisma.review.update({
      where: {
        id: reviewId
      },
      data: {
        likes: {
            increment: 1,
        },
      },
    });
    return updateReview;
}

export async function dislikeReview( userId: number, reviewId: number): Promise<any>{
    const updateReview = await prisma.review.update({
      where: {
        id: reviewId
      },
      data: {
        likes: {
            decrement: 1,
        },
      },
    });
    return updateReview;
}