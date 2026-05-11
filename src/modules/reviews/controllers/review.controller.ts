import { 
    Body,
    Controller,
    Get,
    Middlewares,
    Post,
    Request,
    Res,
    Route,
    Tags,
    Path,
    Query
} from "tsoa";

import { Request as ExpressRequest } from "express";
import { ReviewAddRequest, ReviewAddResponse } from "../dtos/review.dto.js";
import { reviewAdd } from "../services/review.service.js";
import { ApiResponse, success } from "../../../common/responses/response.js";

@Route("restaurants")
@Tags("Review")
export class ReviewController extends Controller{ 

    @Post("{restaurantId}/reviews")
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