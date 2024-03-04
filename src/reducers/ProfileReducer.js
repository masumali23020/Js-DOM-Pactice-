import { actions } from "../actions"
const initialState = {
    user: null,
    posts: [],
    loading: false,
    error: null,
}

const profileReducer = (state, action) => {
    switch (actions.type) {
        case action.profile.DATA_FETCHING:{
            return {
                ...state,
                loading: true
            }
        }
        case actions.profile.DATA_FETCHED:{
            return {
                ...state,
                loading: false,
                user: action.data.user,
                posts: action.data.posts,
            }
        }
        case actions.profile.USER_DATA_EDITED:{
            return {
                ...state,
                loading: true
            }
        }
        case actions.profile.IMAGE_UPDATED:{
            return {
                ...state,
                loading: true
            }
        }
        case actions.profile.DATA_FETCHING_ERROE:{
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
            
           
    
        default:
           return state;
    }
}
export { initialState, profileReducer }
