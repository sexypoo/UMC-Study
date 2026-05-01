import e from "express";

export interface MissionAddRequest {
    restaurantId:number,
    point:number,
    mealPrice:number,
    dueDate:string
}

export const bodyToMission = (body: MissionAddRequest) => {
  return {
    restaurantId: body.restaurantId,
    point:body.point,
    mealPrice: body.mealPrice,
    dueDate: body.dueDate
  }
};

export interface MissionAddResponse {
  id: number;
  restaurantId:number,
  point:number,
  mealPrice:number,
  dueDate:string
  createdAt:string;
}

export const responseFromMission = (mission: MissionAddResponse) =>{
    return{
        id: mission.id,
        restaurantId: mission.restaurant_id,
        point: mission.point,
        dueDate: mission.due_date,
        createdAt: mission.created_at
    }
}