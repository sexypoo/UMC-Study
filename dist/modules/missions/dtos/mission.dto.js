export const responseFromMission = (mission) => {
    return {
        id: mission.id,
        restaurantId: mission.restaurantId,
        mealPrice: mission.mealPrice,
        point: mission.point,
        dueDate: mission.dueDate,
        createdAt: mission.createdAt,
        updatedAt: mission.updatedAt
    };
};
export const responseFromMissions = (missions) => {
    const lastMission = missions[missions.length - 1];
    return {
        data: missions,
        pagination: {
            cursor: lastMission ? lastMission.id : null,
        },
    };
};
//# sourceMappingURL=mission.dto.js.map