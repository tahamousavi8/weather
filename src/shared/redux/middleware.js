import  axios from "axios";

const basedURL='http://localhost:3004/';
const apiMiddleware =store=>next=>action=>{

    const {isEndpointCall,type}=action;
    if(isEndpointCall){
        const {successType,failedType}=action;
        next({type});
        axios(`${basedURL}${action.endpoint}`).then(response=>{next({
            type:successType,
            data:response.data,
        })}).catch(error=>{next({
            type:failedType,
            error
        })});
    }else{
        next(action);
    }
}
export default apiMiddleware;