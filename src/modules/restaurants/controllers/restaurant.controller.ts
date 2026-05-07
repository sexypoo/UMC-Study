import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { listRestaurantReviews, listRestaurantMissions } from "../services/restaurant.service.js";

export const handleListRestaurantReviews = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const resId = parseInt(req.params.restaurantId as string, 10);

        const cursor = typeof req.query.cursor === "string"
            ? parseInt(req.query.cursor, 10)
            : 0;
        const reviews = await listRestaurantReviews(resId, cursor);
        res.status(StatusCodes.OK).json(reviews);
    } catch(err){
        next(err);
    }
};

export const handleListRestaurantMissions = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const resId = parseInt(req.params.restaurantId as string, 10);

        const cursor = typeof req.query.cursor === "string"
            ? parseInt(req.query.cursor, 10)
            : 0;
        const missions = await listRestaurantMissions(resId, cursor);
        res.status(StatusCodes.OK).json(missions);
    } catch(err){
        next(err);
    }
};