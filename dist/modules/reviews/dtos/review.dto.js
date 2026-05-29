export const responseFromReview = (review) => {
    return {
        id: review.id,
        restaurantId: review.restaurantId,
        userId: review.userId,
        rating: review.rating,
        content: review.content,
        createdAt: review.createdAt
    };
};
export const responseFromReviews = (reviews) => {
    const lastReview = reviews[reviews.length - 1];
    return {
        data: reviews,
        pagination: {
            cursor: lastReview ? lastReview.id : null,
        },
    };
};
//# sourceMappingURL=review.dto.js.map