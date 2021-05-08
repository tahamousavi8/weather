import React,{Component} from 'react';
import {connect} from "react-redux";
import {fetchCities} from "./Actions/fetchCities";


class CityContainer extends Component{


    componentDidMount() {
        this.fetchCities();
        console.log(this.props.city);
    }
    fetchCities=()=>this.props.fetchCities();

    render() {
        return(<div>container</div>)
    }
}
const mapStateToProps = (state)=>({
    city: state.city,
    fetching:state.fetching,
    error:state.error,

})
const mapDispatchToProps={
fetchCities
};
export default connect(mapStateToProps,mapDispatchToProps)(CityContainer);