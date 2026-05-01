export interface MissionStartRequest {
    userId: number,
    missionId: number,
    status: string
}

export const bodyToUserMission = (body: MissionStartRequest) => {
  return {
    userId: body.userId,
    missionId: body.missionId,
    status: body.status
  }
};

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
        userId: mission.user_id,
        missionId: mission.mission_id,
        status: mission.status,
        createdAt: mission.created_at
    }
}