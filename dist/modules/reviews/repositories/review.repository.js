import { prisma } from "../../../db.config.js";
export const addReview = async (data) => {
    const created = await prisma.review.create({
        data: {
            restaurantId: BigInt(data.restaurantId),
            userId: data.userId,
            rating: data.rating,
            content: data.content,
        },
    });
    return created.id;
};
export const getReview = async (reviewId) => {
    return await prisma.review.findFirst({
        where: { id: BigInt(reviewId) },
    });
};
export const getAllUserReviews = async (userId, cursor) => {
    const reviews = await prisma.review.findMany({
        select: {
            id: true,
            content: true,
            rating: true,
            restaurantId: true,
            userId: true,
            restaurant: true,
            user: true
        },
        where: {
            userId,
            id: {
                gt: cursor,
            }
        },
        orderBy: {
            id: "asc"
        },
        take: 5,
    });
    return reviews;
};
//# sourceMappingURL=review.repository.js.map