import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { UserSignUpRequest, bodyToUser } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";

export const handleUserSignUp = async(req: Request, res: Response, next: NextFunction) => {
    console.log("회원가입을 요청했습니다.");
    console.log("body:", req.body);

    // 서비스 로직 호출
    const user = await userSignUp(bodyToUser(req.body as UserSignUpRequest));
    // 성공 응답 보내기
    res.status(StatusCodes.OK).json({result:user});
}