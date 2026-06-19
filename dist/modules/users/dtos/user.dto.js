export const responseFromUser = ({ user, preferences }) => {
    const preferCategory = preferences.map((p) => p.foodCategory.name);
    return {
        id: user.userId,
        preferences: preferCategory
    };
};
//# sourceMappingURL=user.dto.js.map