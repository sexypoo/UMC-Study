import { prisma } from "../../../db.config.js";
export const getRestaurantById = async (restaurantId) => {
    return await prisma.restaurant.findFirst({
        where: {
            id: restaurantId
        }
    });
};
export const getAllRestaurantReviews = async (restaurantId, cursor) => {
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
            restaurantId,
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
//# sourceMappingURL=restaurant.repository.js.map