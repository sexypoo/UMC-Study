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
import { StatusCodes } from "http-status-codes";
import { listRestaurantReviews, listRestaurantMissions } from "../services/restaurant.service.js";
import { ApiResponse, success, FailResponse } from "../../../common/responses/response.js";
import { ReviewListResponse } from "../../reviews/dtos/review.dto.js";
import { MissionListResponse } from "../../missions/dtos/mission.dto.js"

@Route("restaurants")
@Tags("Restaurants")
export class RestaurantController extends Controller{ 

    /**
     * @summary 식당별 리뷰를 조회하는 엔드포인트입니다.
     * @param resId
     * @param cursor 
     */
    @Get("{resId}/reviews")
    @Response<ApiResponse<ReviewListResponse>>(200, "리뷰 목록 조회 성공")
    @Response<FailResponse<null>>(404, "존재하지 않는 식당 — RestaurantNotFoundError (R001)", {
        resultType: "FAIL",
        error: {
            errorCode: "R001",
            reason: "해당 식당을 찾을 수 없습니다.",
            data: null,
        },
        data: null,
    })
    public async handleListRestaurantReviews(
        @Path() resId: number,
        @Query() cursor: number=0
    ): Promise<ApiResponse<ReviewListResponse>>{
        const reviews = await listRestaurantReviews(resId, cursor);
        return success(reviews);
    }

    /**
     * @summary 식당별 미션을 조회할 수 있는 엔드포인트입니다.
     * @param resId
     * @param cursor
     */
    @Get("{resId}/missions")
    @Response<ApiResponse<MissionListResponse>>(200, "리뷰 목록 조회 성공")
    public async handleListRestaurantMissions(
        @Path() resId: number,
        @Query() cursor: number=0
    ): Promise<ApiResponse<MissionListResponse>>{
        const missions = await listRestaurantMissions(resId, cursor);
        return success(missions);
    }

}