import { prisma } from "../../../db.config.js"

export const addMission = async (data: any) => {
  try {
    const mission = await prisma.mission.create({
      data: {
        restaurantId: data.restaurantId,
        point: data.point,
        mealPrice: data.mealPrice,
        dueDate: new Date(data.dueDate),
      },
    });

    return mission.id;
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  }
};

export const getMission = async (missionId: number) => {
  try {
    const mission = await prisma.mission.findUnique({
      where: { id: missionId },
    });

    return mission; // 없으면 Prisma가 null 반환
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  }
};


export const getAllRestaurantMissions = async (restaurantId: number, cursor: number) => {
  const missions = await prisma.mission.findMany({
    select:{
      id: true,
      restaurantId: true,
      point: true,
      mealPrice: true,
      dueDate: true,
      restaurant: true

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

  return missions;
}