import { 
    Body,
    Controller,
    Get,
    Middlewares,
    Post,
    Request,
    Response,
    Route,
    Tags,
    Path,
    Query
} from "tsoa";

import { Request as ExpressRequest, Response as ExpressResponse } from "express";
import { ReviewAddRequest, ReviewAddResponse } from "../dtos/review.dto.js";
import { reviewAdd } from "../services/review.service.js";
import { ApiResponse, success } from "../../../common/responses/response.js";

@Route("restaurants")
@Tags("Review")
export class ReviewController extends Controller{ 

    /**
     * @summary 리뷰 등록을 처리하는 엔드포인트입니다.
     * @param restaurantId 
     * @param body 
     * @returns { ReviewAddResponse } 리뷰 등록 결과
     */
    @Post("{restaurantId}/reviews")
    @Response<ApiResponse<ReviewAddRequest>>(200, '리뷰 등록 성공')
    public async handleAddReview(
        @Path() restaurantId: number,
        @Body() body: ReviewAddRequest
    ): Promise<ApiResponse<ReviewAddResponse>>{
        console.log("리뷰 등록을 요청했습니다.");
        console.log("body:", body);
        const review = await reviewAdd({ ...body, restaurantId });
        return success(review);
    }
}