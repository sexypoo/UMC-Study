import { prisma } from "../../../db.config.js";

export const getUserMissionByUserIdAndMissionId = async (
  userId: number,
  missionId: number
): Promise<boolean> => {
  try {
    const userMission = await prisma.userMission.findFirst({
      where: {
        userId,
        missionId,
        status: "진행중",
      },
    });

    return userMission !== null;
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  }
};

export const addUserMission = async (data: any): Promise<number> => {
  try {
    const userMission = await prisma.userMission.create({
      data: {
        userId: data.userId,
        missionId: data.missionId,
        status: data.status,
      },
    });

    return Number(userMission.id);
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  }
};

export const getUserMission = async (userMissionId: number): Promise<any | null> => {
  try {
    const userMission = await prisma.userMission.findUnique({
      where: { id: userMissionId },
    });

    return userMission;
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  }
};

export const getAllUserMissions = async (userId: number, cursor: number) => {
  const missions = await prisma.userMission.findMany({
    where: {
      userId,
      id: { gt: cursor },
    },
    include: {
      mission: true,
    },
    orderBy: { id: "asc" },
    take: 5,
  });

  return missions;
};