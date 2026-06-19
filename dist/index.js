import "dotenv/config";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import { RegisterRoutes } from "./generated/routes.js";
import swaggerUi from "swagger-ui-express";
import path from "path";
import fs from "fs";
import passport from "passport";
import { googleStrategy, jwtStrategy } from "./auth.config.js";
import { isLogin } from "./common/middlewares/auth.middleware.js"; // 추가
BigInt.prototype.toJSON = function () {
    return this.toString();
};
// 1. 환경 변수 설정
dotenv.config();
passport.use(googleStrategy);
passport.use(jwtStrategy);
const app = express();
const port = process.env.PORT || 3000;
app.use((req, res, next) => {
    res.error = function ({ errorCode = null, message = null, data = null }) {
        return this.json({
            resultType: "FAILED",
            error: { errorCode, message, data },
            data: null,
        });
    };
    next();
});
// 2. 미들웨어 설정
app.use(cors()); // cors 방식 허용                 
app.use(express.static('public')); // 정적 파일 접근      
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함(JSON 형태의 요청 body를 파싱하기 위함)     
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석
app.use(morgan('dev'));
app.use(cookieParser());
app.use(passport.initialize());
// 3. 기본 라우트
app.get("/", (req, res) => {
    res.send("Hello World! This is TypeScript Server!");
});
// OAuth 라우트
app.get("/oauth2/login/google", passport.authenticate("google", { session: false }));
app.get("/oauth2/callback/google", passport.authenticate("google", { session: false, failureRedirect: "/login-failed" }), (req, res) => {
    res.status(200).json({ success: true, tokens: req.user });
});
app.get('/mypage', isLogin, (req, res) => {
    res.status(200).json({
        message: `인증 성공! ${req.user.name}님의 마이페이지입니다.`,
        user: req.user,
    });
});
// Express.js에 생성한 엔드 포인트들을 register
const router = express.Router();
RegisterRoutes(router);
app.use("/api/v1", router);
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    console.log(err);
    res.status(err.statusCode || 500).error({
        errorCode: err.errorCode || "unknown",
        message: err.message || null,
        data: err.data || null,
    });
});
// 4. 서버 시작
app.listen(port, () => {
    console.log(`[server]: Server is running at <http://localhost>:${port}`);
});
// ========== Swagger 설정 ==========
// 1. TSOA가 설정한 swagger.json 읽어오기
const swaggerFile = JSON.parse(fs.readFileSync(path.resolve("dist/swagger.json"), "utf8"));
// 2. Swagger UI 연결
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
//# sourceMappingURL=index.js.map