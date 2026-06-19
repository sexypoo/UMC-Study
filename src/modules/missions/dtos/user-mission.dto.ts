export interface MissionStartRequest {
    missionId: number
}

export interface MissionStartResponse {
  id: number;
  userId: number,
  missionId: number,
  status: string
  createdAt:string;
}

export const responseFromStartMission = (mission: MissionStartResponse) =>{
    return{
        id: mission.id,
        userId: mission.userId,
        missionId: mission.missionId,
        status: mission.status,
        createdAt: mission.createdAt
    }
}

export interface UserMissionItem {
  id: number;
  userId: number;
  missionId: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  mission: {
    point: number;
    mealPrice: number;
    dueDate: string;
    restaurant: {
      name: string;
    };
  };
}

export interface UserMissionListResponse {
  data: UserMissionItem[];
  pagination: {
    cursor: number | null;
  };
}

export const responseFromUserMissions = (missions: UserMissionItem[]): UserMissionListResponse => {
  const lastMission = missions[missions.length - 1];
  return {
    data: missions,
    pagination: {
      cursor: lastMission ? lastMission.id : null,
    },
  };
};