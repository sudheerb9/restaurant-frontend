import { COMMENTS } from '../components/shared/comments';
import { PROMOTIONS } from '../components/shared/promotions';
import { LEADERS } from '../components/shared/leaders';
import { DISHES } from '../components/shared/dishes';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) =>{
    return state;
};