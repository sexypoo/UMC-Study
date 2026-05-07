import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { UserSignUpRequest, bodyToUser } from "../dtos/user.dto.js";
import { userSignUp, listUserReviews, listUserMissions } from "../services/user.service.js";

export const handleUserSignUp = async(req: Request, res: Response, next: NextFunction) => {
    console.log("회원가입을 요청했습니다.");
    console.log("body:", req.body);

    // 서비스 로직 호출
    const user = await userSignUp(bodyToUser(req.body as UserSignUpRequest));
    // 성공 응답 보내기
    res.status(StatusCodes.OK).json({result:user});
}

export const handleListUserReview = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const userId = parseInt(req.params.userId as string, 10);

        const cursor = typeof req.query.cursor === "string"
                    ? parseInt(req.query.cursor, 10)
                    : 0;
        const reviews = await listUserReviews(userId, cursor);
        res.status(StatusCodes.OK).json(reviews);
    }
    catch(err){
        next(err);
    };
}

export const handleListUserMission = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const userId = parseInt(req.params.userId as string, 10);

        const cursor = typeof req.query.cursor === "string"
                    ? parseInt(req.query.cursor, 10)
                    : 0;
        const missions = await listUserMissions(userId, cursor);
        res.status(StatusCodes.OK).json(missions);
    }
    catch(err){
        next(err);
    };
}