export const responseFromStartMission = (mission) => {
    return {
        id: mission.id,
        userId: mission.userId,
        missionId: mission.missionId,
        status: mission.status,
        createdAt: mission.createdAt
    };
};
export const responseFromUserMissions = (missions) => {
    const lastMission = missions[missions.length - 1];
    return {
        data: missions,
        pagination: {
            cursor: lastMission ? lastMission.id : null,
        },
    };
};
//# sourceMappingURL=user-mission.dto.js.map