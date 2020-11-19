import React from 'react';
import {connect} from "react-redux";
import {decrementSimpleCounterActionCreator, incrementSimpleCounterActionCreator} from '../redux/simpleCounter/actionCreator';

const  simpleCounterContainer = (props) => {
    const handleClick = (type, event) => {
        switch (type) {
            case "inr":
                props.incrementSimpleCounterActionCreator();
                break;
            case "dcr":
                props.decrementSimpleCounterActionCreator();
                break;
            default:
                return;
        }
    };
    return (
        <>
            <p>{props.counter}</p>
            <button onClick={(event) => {handleClick("inr", event)}}>increment</button>
            <button onClick={(event) => {handleClick("dcr", event)}}>decrement</button>
        </>
    )
};
const mapStateToProps = (state) => {
    return {
        counter: state.simpleCounter.counter
    }
};

export default connect(mapStateToProps, {
    decrementSimpleCounterActionCreator,
    incrementSimpleCounterActionCreator
})(simpleCounterContainer);
