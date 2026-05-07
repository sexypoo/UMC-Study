import { prisma } from "../../../db.config.js";

// 1. User 데이터 삽입
export const addUser = async (data: any) => {
  const user = await prisma.user.findFirst({ where: { email: data.email }});

  if (user){
    return null;
  }

  const created = await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: data.password,
      gender: data.gender,
      birth: data.birth,
      address: data.address,
      detailAddress: data.detailAddress,
      phoneNumber: data.phoneNumber,
    }
  });

  return created.id;

};

// 2. 사용자 정보 얻기
export const getUser = async (userId: number) => {
  return await prisma.user.findFirstOrThrow({
    where: {
      id: userId
    }
  });
};

// 3. 음식 선호 카테고리 매핑
export const setPreference = async (userId: number, foodCategoryId: number) => {
  
  await prisma.userFavorCategory.create({
    data:{
      userId: userId,
      foodCategoryId: foodCategoryId
    },
  });
};

// 4. 사용자 선호 카테고리 반환
export const getUserPreferencesByUserId = async (userId: number) => {
  return await prisma.userFavorCategory.findMany({
    where: {
      userId: userId
    },
    include:{
      foodCategory: true,
    },
    orderBy: {
      foodCategoryId: "asc"
    },
  });
};