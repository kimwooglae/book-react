import React, {useMemo} from 'react';
// import React, { useEffect, useReducer } from 'react';
// import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../state';

import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT } from '../common';
import { makeGetFriendsWithAgeLimit } from '../state/selector';

export default function FriendMain({ageLimit}) {
    const getFriendsWithAgeLimit = useMemo(makeGetFriendsWithAgeLimit, []);
    const friendsWithAgeLimit = useSelector(state => getFriendsWithAgeLimit(state, ageLimit));

    const dispatch = useDispatch();

    function onAdd() {
        const friend = getNextFriend();
        dispatch(addFriend(friend));
    }
    console.log("FriendMain render");

    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <NumberSelect onChange={v => dispatch(actions.setAgeLimit(v))}
                value={ageLimit}
                options={AGE_LIMIT_OPTIONS} 
                postfix="세 이하만 보기" 
            />
            <FriendList friends={friendsWithAgeLimit} />
        </div>
    );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
