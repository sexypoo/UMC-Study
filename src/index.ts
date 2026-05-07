import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";

import { handleUserSignUp, handleListUserReview, handleListUserMission } from "./modules/users/controllers/user.controller.js";
import { handleAddReview } from "./modules/reviews/controllers/review.controller.js";
import { handleAddMission } from "./modules/missions/controllers/mission.controller.js";
import { handleStartMission } from "./modules/missions/controllers/user-mission.controller.js";
import { handleListRestaurantReviews, handleListRestaurantMissions } from "./modules/restaurants/controllers/restaurant.controller.js";

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

// 1. 환경 변수 설정
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// 2. 미들웨어 설정
app.use(cors());            // cors 방식 허용                 
app.use(express.static('public'));    // 정적 파일 접근      
app.use(express.json());              // request의 본문을 json으로 해석할 수 있도록 함(JSON 형태의 요청 body를 파싱하기 위함)     
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

// 3. 기본 라우트
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! This is TypeScript Server!");
});

// 회원가입
app.post("/api/v1/users/signup", handleUserSignUp);

// ===== chapter 5 =====

// 1-2 가게에 리뷰 추가
app.post("/api/v1/restaurants/:restaurantId/reviews", handleAddReview);

// 1-3 가게에 미션 추가
app.post("/api/v1/restaurants/:restaurantId/missions", handleAddMission);

// 1-4 미션 수락
app.post("/api/v1/users/:userId/missions", handleStartMission);

// ===== chapter 6 =====

// 가게에 속한 모든 리뷰 조회
app.get("/api/v1/restaurants/:restaurantId/reviews", handleListRestaurantReviews);

// 내가 작성한 리뷰 보기
app.get("/api/v1/users/:userId/reviews", handleListUserReview)

// 특정 가게의 미션 목록
app.get("/api/v1/restaurants/:restaurantId/missions", handleListRestaurantMissions);

// 특정 유저의 미션 목록
app.get("/api/v1/users/:userId/missions", handleListUserMission);

// 4. 서버 시작
app.listen(port, () => {
  console.log(`[server]: Server is running at <http://localhost>:${port}`);
});