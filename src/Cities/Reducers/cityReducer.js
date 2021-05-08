import {Types} from "../Actions/actionTypes";

const initState={
    error:null,
    city:[],
    fetching:false,

}

function cityReducer(state=initState,action){
    switch(action.type){
        case Types.FETCH_CITY:
            return{
                ...state,
                fetching:true,
            };
        case Types.FETCH_CITY_SUCCESS:
            return{
                ...state,
                fetching:false,
                city:action.data,
            };
        case Types.FETCH_CITY_FAILED:
            return{
                ...state,
                fetching:false,
                error:action.error,
            };
        default:
            return state;
    }
}

export default cityReducer;