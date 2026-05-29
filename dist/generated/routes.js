import { fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../modules/users/controllers/user.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReviewController } from './../modules/reviews/controllers/review.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { RestaurantController } from './../modules/restaurants/controllers/restaurant.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserMissionController } from './../modules/missions/controllers/user-mission.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MissionController } from './../modules/missions/controllers/mission.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "UserSignUpResponse": {
        "dataType": "refObject",
        "properties": {
            "userId": { "dataType": "double", "required": true },
            "preferences": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_UserSignUpResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "UserSignUpResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FailResponse_null_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["FAIL"], "required": true },
            "error": { "dataType": "nestedObjectLiteral", "nestedProperties": { "data": { "dataType": "enum", "enums": [null], "required": true }, "reason": { "dataType": "string", "required": true }, "errorCode": { "dataType": "string", "required": true } }, "required": true },
            "data": { "dataType": "enum", "enums": [null], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserSignUpRequest": {
        "dataType": "refObject",
        "properties": {
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "gender": { "dataType": "string", "required": true },
            "birth": { "dataType": "datetime", "required": true },
            "address": { "dataType": "string" },
            "detailAddress": { "dataType": "string" },
            "phoneNumber": { "dataType": "string", "required": true },
            "preferences": { "dataType": "array", "array": { "dataType": "double" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewItem": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "restaurantId": { "dataType": "double", "required": true },
            "userId": { "dataType": "double", "required": true },
            "rating": { "dataType": "double", "required": true },
            "content": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "string", "required": true },
            "user": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewListResponse": {
        "dataType": "refObject",
        "properties": {
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "ReviewItem" }, "required": true },
            "pagination": { "dataType": "nestedObjectLiteral", "nestedProperties": { "cursor": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "enum", "enums": [null] }], "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ReviewListResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "ReviewListResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMissionItem": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "userId": { "dataType": "double", "required": true },
            "missionId": { "dataType": "double", "required": true },
            "status": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "string", "required": true },
            "updatedAt": { "dataType": "string", "required": true },
            "mission": { "dataType": "nestedObjectLiteral", "nestedProperties": { "restaurant": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true } }, "required": true }, "dueDate": { "dataType": "string", "required": true }, "mealPrice": { "dataType": "double", "required": true }, "point": { "dataType": "double", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMissionListResponse": {
        "dataType": "refObject",
        "properties": {
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "UserMissionItem" }, "required": true },
            "pagination": { "dataType": "nestedObjectLiteral", "nestedProperties": { "cursor": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "enum", "enums": [null] }], "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_UserMissionListResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "UserMissionListResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateUserResponse": {
        "dataType": "refObject",
        "properties": {
            "userId": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_UpdateUserResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "UpdateUserResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateUserRequest": {
        "dataType": "refObject",
        "properties": {
            "phoneNumber": { "dataType": "string" },
            "birth": { "dataType": "string" },
            "address": { "dataType": "string" },
            "detailAddress": { "dataType": "string" },
            "gender": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewAddResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "restaurantId": { "dataType": "double", "required": true },
            "userId": { "dataType": "double", "required": true },
            "rating": { "dataType": "double", "required": true },
            "content": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ReviewAddResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "ReviewAddResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewAddRequest": {
        "dataType": "refObject",
        "properties": {
            "userId": { "dataType": "double", "required": true },
            "rating": { "dataType": "double", "required": true },
            "content": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ReviewAddRequest_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "ReviewAddRequest", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionItem": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "restaurantId": { "dataType": "double", "required": true },
            "point": { "dataType": "double", "required": true },
            "mealPrice": { "dataType": "double", "required": true },
            "dueDate": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "string", "required": true },
            "updatedAt": { "dataType": "string", "required": true },
            "restaurant": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionListResponse": {
        "dataType": "refObject",
        "properties": {
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "MissionItem" }, "required": true },
            "pagination": { "dataType": "nestedObjectLiteral", "nestedProperties": { "cursor": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "enum", "enums": [null] }], "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_MissionListResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "MissionListResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionStartResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "userId": { "dataType": "double", "required": true },
            "missionId": { "dataType": "double", "required": true },
            "status": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_MissionStartResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "MissionStartResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FailResponse": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["FAIL"], "required": true },
            "error": { "dataType": "nestedObjectLiteral", "nestedProperties": { "data": { "dataType": "enum", "enums": [null], "required": true }, "reason": { "dataType": "string", "required": true }, "errorCode": { "dataType": "string", "required": true } }, "required": true },
            "data": { "dataType": "enum", "enums": [null], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionStartRequest": {
        "dataType": "refObject",
        "properties": {
            "missionId": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionAddResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "restaurantId": { "dataType": "double", "required": true },
            "point": { "dataType": "double", "required": true },
            "mealPrice": { "dataType": "double", "required": true },
            "dueDate": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "string", "required": true },
            "updatedAt": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_MissionAddResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "MissionAddResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionAddRequest": {
        "dataType": "refObject",
        "properties": {
            "point": { "dataType": "double", "required": true },
            "mealPrice": { "dataType": "double", "required": true },
            "dueDate": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
export function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    const argsUserController_handleUserSignUp = {
        body: { "in": "body", "name": "body", "required": true, "ref": "UserSignUpRequest" },
    };
    app.post('/users/signup', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleUserSignUp)), async function UserController_handleUserSignUp(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleUserSignUp, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleUserSignUp',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleGuestPage = {};
    app.get('/users/guest', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleGuestPage)), async function UserController_handleGuestPage(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleGuestPage, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleGuestPage',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleLoginPage = {};
    app.get('/users/login', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleLoginPage)), async function UserController_handleLoginPage(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleLoginPage, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleLoginPage',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleMypage = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/users/mypage', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleMypage)), async function UserController_handleMypage(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleMypage, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleMypage',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleSetLogin = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/users/set-login', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleSetLogin)), async function UserController_handleSetLogin(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleSetLogin, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleSetLogin',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleSetLogout = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/users/set-logout', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleSetLogout)), async function UserController_handleSetLogout(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleSetLogout, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleSetLogout',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleListUserReview = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "double" },
        cursor: { "default": 0, "in": "query", "name": "cursor", "dataType": "double" },
    };
    app.get('/users/:userId/reviews', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleListUserReview)), async function UserController_handleListUserReview(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleListUserReview, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleListUserReview',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleListUserMission = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "double" },
        cursor: { "default": 0, "in": "query", "name": "cursor", "dataType": "double" },
    };
    app.get('/users/:userId/missions', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleListUserMission)), async function UserController_handleListUserMission(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleListUserMission, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleListUserMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleUpdateUser = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        body: { "in": "body", "name": "body", "required": true, "ref": "UpdateUserRequest" },
    };
    app.patch('/users/me', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleUpdateUser)), async function UserController_handleUpdateUser(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleUpdateUser, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleUpdateUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsReviewController_handleAddReview = {
        restaurantId: { "in": "path", "name": "restaurantId", "required": true, "dataType": "double" },
        body: { "in": "body", "name": "body", "required": true, "ref": "ReviewAddRequest" },
    };
    app.post('/restaurants/:restaurantId/reviews', ...(fetchMiddlewares(ReviewController)), ...(fetchMiddlewares(ReviewController.prototype.handleAddReview)), async function ReviewController_handleAddReview(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsReviewController_handleAddReview, request, response });
            const controller = new ReviewController();
            await templateService.apiHandler({
                methodName: 'handleAddReview',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsRestaurantController_handleListRestaurantReviews = {
        resId: { "in": "path", "name": "resId", "required": true, "dataType": "double" },
        cursor: { "default": 0, "in": "query", "name": "cursor", "dataType": "double" },
    };
    app.get('/restaurants/:resId/reviews', ...(fetchMiddlewares(RestaurantController)), ...(fetchMiddlewares(RestaurantController.prototype.handleListRestaurantReviews)), async function RestaurantController_handleListRestaurantReviews(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsRestaurantController_handleListRestaurantReviews, request, response });
            const controller = new RestaurantController();
            await templateService.apiHandler({
                methodName: 'handleListRestaurantReviews',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsRestaurantController_handleListRestaurantMissions = {
        resId: { "in": "path", "name": "resId", "required": true, "dataType": "double" },
        cursor: { "default": 0, "in": "query", "name": "cursor", "dataType": "double" },
    };
    app.get('/restaurants/:resId/missions', ...(fetchMiddlewares(RestaurantController)), ...(fetchMiddlewares(RestaurantController.prototype.handleListRestaurantMissions)), async function RestaurantController_handleListRestaurantMissions(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsRestaurantController_handleListRestaurantMissions, request, response });
            const controller = new RestaurantController();
            await templateService.apiHandler({
                methodName: 'handleListRestaurantMissions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserMissionController_handleStartMission = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "double" },
        body: { "in": "body", "name": "body", "required": true, "ref": "MissionStartRequest" },
    };
    app.post('/users/:userId/missions', ...(fetchMiddlewares(UserMissionController)), ...(fetchMiddlewares(UserMissionController.prototype.handleStartMission)), async function UserMissionController_handleStartMission(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserMissionController_handleStartMission, request, response });
            const controller = new UserMissionController();
            await templateService.apiHandler({
                methodName: 'handleStartMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMissionController_handleAddMission = {
        restaurantId: { "in": "path", "name": "restaurantId", "required": true, "dataType": "double" },
        body: { "in": "body", "name": "body", "required": true, "ref": "MissionAddRequest" },
    };
    app.post('/restaurants/:restaurantId/missions', ...(fetchMiddlewares(MissionController)), ...(fetchMiddlewares(MissionController.prototype.handleAddMission)), async function MissionController_handleAddMission(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_handleAddMission, request, response });
            const controller = new MissionController();
            await templateService.apiHandler({
                methodName: 'handleAddMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map