import {Types} from "./actionTypes";

export const fetchCities=(city='Stockholm')=>({
    type:Types.FETCH_CITY,
    successType:Types.FETCH_CITY_SUCCESS,
    failedType:Types.FETCH_CITY_FAILED,
    isEndpointCall:true,
    endpoint:`cities?name=${city}`,
})