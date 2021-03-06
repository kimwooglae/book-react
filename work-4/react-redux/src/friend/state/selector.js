import { createSelector } from 'reselect';

const getFriends = state => state.friend.friends;
export const getAgeLimit = (_, ageLimit) => ageLimit;
export const getShowLimit = state => state.friend.showLimit;

// export const getFriendsWithAgeLimit = createSelector(
//     [getFriends, getAgeLimit],
//     (friends, ageLimit) => friends.filter(friend => friend.age <= ageLimit)
// );

// export const getFriendsWithAgeShowLimit = createSelector(
//     [getFriendsWithAgeLimit, getShowLimit],
//     (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit)
// );

export const makeGetFriendsWithAgeLimit = () => {
    return createSelector([getFriends, getAgeLimit], (friends, ageLimit) => 
        friends.filter(friend => friend.age <= ageLimit)
    );
};

// export const makeGetFriendsWithAgeShowLimit = () => {
//     return createSelector([getFriendsWithAgeLimit, getShowLimit], (friendsWithAgeLimit, showLimit) => 
//         friendsWithAgeLimit.slice(0, showLimit)
//     );
// };