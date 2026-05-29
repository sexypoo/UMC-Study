var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Post, Response, Route, Tags, Path } from "tsoa";
import { reviewAdd } from "../services/review.service.js";
import { success } from "../../../common/responses/response.js";
let ReviewController = class ReviewController extends Controller {
    /**
     * @summary 리뷰 등록을 처리하는 엔드포인트입니다.
     * @param restaurantId
     * @param body
     * @returns { ReviewAddResponse } 리뷰 등록 결과
     */
    async handleAddReview(restaurantId, body) {
        console.log("리뷰 등록을 요청했습니다.");
        console.log("body:", body);
        const review = await reviewAdd({ ...body, restaurantId });
        return success(review);
    }
};
__decorate([
    Post("{restaurantId}/reviews"),
    Response(200, '리뷰 등록 성공'),
    __param(0, Path()),
    __param(1, Body())
], ReviewController.prototype, "handleAddReview", null);
ReviewController = __decorate([
    Route("restaurants"),
    Tags("Review")
], ReviewController);
export { ReviewController };
//# sourceMappingURL=review.controller.js.map