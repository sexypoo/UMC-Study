import { prisma } from "../../../db.config.js"

export const getRestaurantById = async (restaurantId: number) => {
  return await prisma.user.findFirstOrThrow({
    where: {
      id: restaurantId
    }
  });
};

export const getAllRestaurantReviews = async (restaurantId: number, cursor:number) =>{
  const reviews = await prisma.review.findMany({
    select:{
      id: true,
      content: true,
      rating: true,
      restaurantId: true,
      userId: true,
      restaurant: true,
      user: true
    },
    where:{
      restaurantId,
      id:{
        gt: cursor,
      }
    },
    orderBy:{
      id: "asc"
    },
    take: 5,
  });

  return reviews;
}