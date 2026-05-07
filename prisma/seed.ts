import { prisma } from "../src/db.config.js";

async function main() {
  await prisma.foodCategory.createMany({
    data: [
      { name: "한식" },
      { name: "중식" },
      { name: "일식" },
      { name: "양식" },
      { name: "분식" },
      { name: "카페" },
      { name: "치킨" },
      { name: "피자" },
    ],
    skipDuplicates: true,
  });

    await prisma.restaurant.createMany({
    data: [
      { regionId: 1, name: "맛있는 한식당", address: "서울시 강남구 역삼동 123", score: 4.5 },
      { regionId: 1, name: "황금 치킨", address: "서울시 강남구 논현동 456", score: 4.2 },
      { regionId: 1, name: "스시 오마카세", address: "서울시 강남구 청담동 789", score: 4.8 },
      { regionId: 2, name: "부산 돼지국밥", address: "서울시 마포구 합정동 321", score: 4.3 },
      { regionId: 2, name: "이탈리안 키친", address: "서울시 마포구 망원동 654", score: 4.1 },
      { regionId: 3, name: "전주 비빔밥", address: "서울시 종로구 인사동 111", score: 4.6 },
    ],
    skipDuplicates: true,
  });

  console.log("seed 완료");
}


main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());