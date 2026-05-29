import dotenv from "dotenv";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import jwt from "jsonwebtoken";
import { prisma } from "./db.config.js"

dotenv.config();

// 1. JWT 토큰 생성 함수
export const generateAccessToken = (user: {id: number; email: string}) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email // 실제 정보
        },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
    )
}

export const generateRefreshToken = (user: {id: number}) => {
    return jwt.sign(
        { id: user.id }, // 최소한의 정보만 담음
        process.env.JWT_SECRET!,
        { expiresIn: "14d" }
    )
}

// 2. Google Verify 로직
const googleVerify = async (profile: Profile) => {
    const email = profile.emails?.[0]?.value;
    if (!email) throw new Error("구글 프로필에 이메일이 없습니다.");

    let user = await prisma.user.findFirst({ where: {email} });

    if (!user){
        user = await prisma.user.create({
            data:{
                email,
                name: profile.displayName,
                gender: "추후 수정",
                birth: new Date(1970,0,1),
                address: "추후 수정",
                detailAddress: "추후 수정",
                phoneNumber: "추후 수정"
            }
        });
    }

    return { id: user.id, email: user.email, name: user.name };
}

export const googleStrategy = new GoogleStrategy(
    {
        clientID: process.env.PASSPORT_GOOGLE_CLIENT_ID!,
        clientSecret: process.env.PASSPORT_GOOGLE_CLIENT_SECRET!,
        callbackURL: "/oauth2/callback/google",
        scope: ["email", "profile"],
    },
    async (_accessToken, _refreshToken, profile, cb) =>{
        try{
            const user = await googleVerify(profile);
            const tokens = {
                accessToken: generateAccessToken(user),
                refreshToken: generateRefreshToken(user)
            };
            return cb(null, tokens);
        } catch(err){
            return cb(err as Error)
        }
    }
);

export const jwtStrategy = new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET!, // 이 키로 토큰 서명 검증
    },
    async (payload, done) => { // 검증 성공시 실행
        try{
            const user = await prisma.user.findFirst({ // 실제 DB 조회
                where: {id: payload.id}
            });
            return user ? done(null, user) : done(null, false); // 있으면 req.user = user
        } catch (err){
            return done(err, false); // 없으면 인증 실패
        }
    }
);