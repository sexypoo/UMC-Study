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
  updatedAt:string;
}

export const responseFromMission = (mission: MissionAddResponse) =>{
    return{
        id: mission.id,
        restaurantId: mission.restaurantId,
        mealPrice: mission.mealPrice,
        point: mission.point,
        dueDate: mission.dueDate,
        createdAt: mission.createdAt,
        updatedAt: mission.updatedAt
    }
}


export interface MissionItem {
  id: number;
  restaurantId: number;
  point: number;
  mealPrice: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;

  restaurant:{
    name: string;
  }
}

export interface MissionListResponse {
  data: MissionItem[];
  pagination: {
    cursor: number | null;
  };
}

export const responseFromMissions = (missions: MissionItem[]): MissionListResponse => {
  const lastMission = missions[missions.length - 1];
  return {
    data: missions,
    pagination: {
      cursor: lastMission ? lastMission.id : null,
    },
  };
};