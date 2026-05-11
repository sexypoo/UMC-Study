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
import { StatusCodes } from "http-status-codes";
import { listRestaurantReviews, listRestaurantMissions } from "../services/restaurant.service.js";
import { ApiResponse, success } from "../../../common/responses/response.js";
import { ReviewListResponse } from "../../reviews/dtos/review.dto.js";
import { MissionListResponse } from "../../missions/dtos/mission.dto.js"

@Route("restaurants")
@Tags("Restaurants")
export class RestaurantController extends Controller{ 

    @Get("{resId}/reviews")
    public async handleListRestaurantReviews(
        @Path() resId: number,
        @Query() cursor: number=0
    ): Promise<ApiResponse<ReviewListResponse>>{
        const reviews = await listRestaurantReviews(resId, cursor);
        return success(reviews);
    }

    @Get("{resId}/missions")
    public async handleListRestaurantMissions(
        @Path() resId: number,
        @Query() cursor: number=0
    ): Promise<ApiResponse<MissionListResponse>>{
        const missions = await listRestaurantMissions(resId, cursor);
        return success(missions);
    }

}