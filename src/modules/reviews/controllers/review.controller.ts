import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { ReviewAddRequest, bodyToReview } from "../dtos/review.dto.js";
import { reviewAdd } from "../services/review.service.js";

export const handleAddReview = async(req: Request, res: Response, next: NextFunction) => {
    console.log("리뷰 등록을 요청했습니다.");
    console.log("body:", req.body);

    const restaurantId = Number(req.params.restaurantId);
    const { userId, rating, content } = req.body;

    // 서비스 로직 호출
    const review = await reviewAdd(bodyToReview({
        restaurantId,
        userId,
        rating,
        content
    } as ReviewAddRequest));
    // 성공 응답 보내기
    res.status(StatusCodes.OK).json({result:review});
}
